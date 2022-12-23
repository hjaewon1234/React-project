import canvasSketch from "canvas-sketch";
import random from "canvas-sketch-util/random";
import math from "canvas-sketch-util/math";
// import eases from "eases";
import colormap from "colormap";
// import { useEffect, useState, useRef } from "react";
// import imgA from "./assets/1.png";

const ParticleTest = () => {
  // const [movElement, setMovElement] = useState(false);
  // const inputRef = useRef(null);

  // useEffect(() => {
  //   if (!inputRef.current) return;
  //   window.addEventListener("input", inputEvent);
  //   return () => {
  //     window.removeEventListener("input", inputEvent);
  //   };
  // }, [inputRef.current]);

  // const inputEvent = () => {
  //   const inputTest = inputRef.current.getBoundingClientRect();

  //   console.log(inputTest);
  //   setMovElement(inputTest);
  // };

  const settings = {
    dimensions: [720, 720],
    animate: true,
  };

  const colors = colormap({ colormap: "viridis", nshades: 20 });

  const particles = [];
  const cursor = { x: 9999, y: 9999 };

  let elCanvas;

  const sketch = ({ width, height, canvas }) => {
    let x, y, particle, radius;

    // const Canvas = document.createElement("canvas");
    // const Context = Canvas.getContext("2d");
    // Canvas.width = width;
    // Canvas.height = height;

    // Context.drawImage(0, 0);

    // const Data = Context.getImageData(0, 0, width, height).data;

    let pos = [];
    const numCircles = 12;
    const gapCircles = 5;
    const gapDot = 5;
    let dotRadius = 5;
    let cirRadius = 2;
    const fitRadius = dotRadius;

    elCanvas = canvas;
    canvas.addEventListener("mousemove", onMouseDown);
    // canvas.addEventListener("keydwon", onKeyDown);

    for (let i = 0; i < numCircles; i++) {
      const circumference = Math.PI * 2 * cirRadius;
      const numFit = i
        ? Math.floor(circumference / (fitRadius * 2 + gapDot))
        : 1;
      const fitSlice = (Math.PI * 2) / numFit;
      let ix, iy, idx, r, g, b, colA;
      for (let j = 0; j < numFit; j++) {
        const theta = fitSlice * j;

        x = Math.cos(theta) * cirRadius;
        y = Math.sin(theta) * cirRadius;

        x += width * 0.5;
        y += height * 0.5;

        ix = Math.floor((x / width) * width);
        iy = Math.floor((y / width) * height);
        idx = (iy * width + ix) * 4;

        r = [idx + 0];
        g = [idx + 1];
        b = [idx + 2];
        colA = `rgb(${r},${g},${b})`;

        radius = dotRadius;
        // radius = math.mapRange(r, 0, 255, 1, 12);

        particle = new Particle({ x, y, radius, colA });
        particles.push(particle);
      }
      cirRadius += fitRadius * 2 + gapCircles;
      dotRadius = (1 - i / numCircles) * fitRadius;
    }

    for (let i = 0; i < 200; i++) {
      x = width * 0.5;
      y = height * 0.5;

      random.insideCircle(400, pos);
      x += pos[0];
      y += pos[1];

      // particle = new Particle({ x, y });

      // particles.push(particle);
    }

    return ({ context, width, height }) => {
      context.fillStyle = "white";
      context.fillRect(0, 0, width, height);

      // context.drawImage(Canvas, 1200, 1200);

      particles.sort((a, b) => a.scale - b.scale);

      particles.forEach((particle) => {
        particle.update();
        particle.draw(context);
      });
    };
  };

  const onMouseDown = (e) => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    onMouseMove(e);
  };

  const onMouseMove = (e) => {
    const x = (e.offsetX / elCanvas.offsetWidth) * elCanvas.width;
    const y = (e.offsetY / elCanvas.offsetHeight) * elCanvas.height;

    cursor.x = x;
    cursor.y = y;
    console.log(cursor);
  };

  const onMouseUp = () => {
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);

    cursor.x = 9999;
    cursor.y = 9999;
  };

  (function () {
    document.addEventListener("keydown", function (e) {
      const keyCode = e.keyCode;
      console.log("입력된 key " + e.key);

      // if (keyCode == 13) {
      //   // Enter key
      //   document.dispatchEvent(new KeyboardEvent("keydown", { key: "e" }));
      //   // document.dispatchEvent(new KeyboardEvent('keyup', {key: 'e'}));
      // } else if (keyCode == 9) {
      //   // Tab key
      //   document.dispatchEvent(new KeyboardEvent("keydown", { key: "t" }));
      //   // document.dispatchEvent(new KeyboardEvent('keyup', {key: 't'}));
      // }
    });
  })();

  // const onKeyDown = (e) => {
  //   window.addEventListener("keydown", onKeyMove);
  //   window.addEventListener("keyup", onKeyUp);

  //   onKeyMove(e);
  // };

  // const onKeyMove = (e) => {
  //   const x = (e.offsetX / elCanvas.offsetWidth) * elCanvas.width;
  //   const y = (e.offsetY / elCanvas.offsetHeight) * elCanvas.height;
  //   const keyCode = e.keyCode;
  //   keyCode.x = x;
  //   console.log(keyCode);
  // };

  // const onKeyUp = (e) => {
  //   window.removeEventListener("Keymove", onKeyMove);
  //   window.removeEventListener("Keyup", onKeyUp);
  //   const keyCode = e.keyCode;
  //   keyCode.x = 9999;
  // };

  // const loadImage = async (url) => {
  //   return new Promise((resolve, reject) => {
  //     const img = new Image();
  //     img.onload = () => resolve(img);
  //     img.onerror = () => reject();
  //     img.src = url;
  //   });
  // };

  // const start = async () => {
  //    = await loadImage("./assets/1.png");
  //   canvasSketch(sketch, settings);
  // };
  // start();

  canvasSketch(sketch, settings);

  class Particle {
    constructor({ x, y, radius = 10, colA }) {
      // posittion
      this.x = x;
      this.y = y;

      // acceleration
      this.ax = 0;
      this.ay = 0;

      // velocity
      this.vx = 0;
      this.vy = 0;

      // initial position
      this.ix = x;
      this.iy = y;

      this.radius = radius;
      this.scale = 1;
      this.color = colA;

      this.minDist = random.range(100, 200);
      this.pushFactor = random.range(0.01, 0.02);
      this.pullFactor = random.range(0.002, 0.006);
      this.dampFactor = random.range(0.9, 0.95);
      // this.minDist = 100;
      // this.pushFactor = 0.02;
      // this.pullFactor = 0.004;
      // this.dampFactor = 0.95;
    }
    update() {
      let dx, dy, dd, distDelta;
      let idxColor;
      // pull force
      dx = this.ix - this.x;
      dy = this.iy - this.y;
      dd = Math.sqrt(dx * dx + dy * dy);

      this.ax = dx * this.pullFactor;
      this.ay = dy * this.pullFactor;

      this.scale = math.mapRange(dd, 0, 200, 1, 5);
      idxColor = Math.floor(
        math.mapRange(dd, 0, 200, 0, colors.length - 1, true)
      );
      this.color = colors[idxColor];

      // push force
      dx = this.x - cursor.x;
      dy = this.y - cursor.y;
      dd = Math.sqrt(dx * dx + dy * dy);

      distDelta = this.minDist - dd;

      if (dd < this.minDist) {
        this.ax += (dx / dd) * distDelta * this.pushFactor;
        this.ay += (dy / dd) * distDelta * this.pushFactor;
      }
      // this.ax += 0.001;

      this.vx += this.ax;
      this.vy += this.ay;

      this.vx *= this.dampFactor;
      this.vy *= this.dampFactor;

      this.x += this.vx;
      this.y += this.vy;
    }
    draw(context) {
      context.save();
      context.translate(this.x, this.y);
      context.fillStyle = this.color;

      context.beginPath();
      context.arc(0, 0, this.radius * this.scale, 0, Math.PI * 2);
      context.fill();

      context.restore();
    }
  }
};

export default ParticleTest;

// const ParticleTest = () => {
//   const settings = {
//     dimensions: [1080, 1080],
//     animate: true,
//   };

//   const colors = colormap({ colormap: "viridis", nshades: 20 });

//   const particles = [];
//   const cursor = { x: 9999, y: 9999 };

//   let elCanvas;

//   const sketch = ({ width, height, canvas }) => {
//     let x, y, particle, radius;

//     const imgACanvas = document.createElement("canvas");
//     const imgAContext = imgACanvas.getContext("2d");
//     imgACanvas.width = imgA.width;
//     imgACanvas.height = imgA.height;

//     imgAContext.drawImage(imgA, 0, 0);

//     const imgAData = imgAContext.getImageData(
//       0,
//       0,
//       imgA.width,
//       imgA.height
//     ).data;

//     // let pos = [];
//     const numCircles = 30;
//     const gapCircles = 2;
//     const gapDot = 2;
//     let dotRadius = 12;
//     let cirRadius = 0;
//     const fitRadius = dotRadius;

//     elCanvas = canvas;
//     canvas.addEventListener("mousedown", onMouseDown);

//     for (let i = 0; i < numCircles; i++) {
//       const circumference = Math.PI * 2 * cirRadius;
//       const numFit = i
//         ? Math.floor(circumference / (fitRadius * 2 + gapDot))
//         : 1;
//       const fitSlice = (Math.PI * 2) / numFit;
//       let ix, iy, idx, r, g, b, colA;
//       for (let j = 0; j < numFit; j++) {
//         const theta = fitSlice * j;

//         x = Math.cos(theta) * cirRadius;
//         y = Math.sin(theta) * cirRadius;

//         x += width * 0.5;
//         y += height * 0.5;

//         ix = Math.floor((x / width) * imgA.width);
//         iy = Math.floor((y / width) * imgA.height);
//         idx = (iy * imgA.width + ix) * 4;

//         r = imgAData[idx + 0];
//         g = imgAData[idx + 1];
//         b = imgAData[idx + 2];
//         colA = `rgb(${r},${g},${b})`;

//         // radius = dotRadius;
//         radius = math.mapRange(r, 0, 255, 1, 12);

//         particle = new Particle({ x, y, radius, colA });
//         particles.push(particle);
//       }
//       cirRadius += fitRadius * 2 + gapCircles;
//       dotRadius = (1 - i / numCircles) * fitRadius;
//     }

//     // for (let i = 0; i < 200; i++) {
//     //   x = width * 0.5;
//     //   y = height * 0.5;

//     //   random.insideCircle(400, pos);
//     //   x += pos[0];
//     //   y += pos[1];

//     //   particle = new Particle({ x, y });

//     //   particles.push(particle);
//     // }

//     return ({ context, width, height }) => {
//       context.fillStyle = "black";
//       context.fillRect(0, 0, width, height);

//       context.drawImage(imgACanvas, 1200, 1200);

//       particles.sort((a, b) => a.scale - b.scale);

//       particles.forEach((particle) => {
//         particle.update();
//         particle.draw(context);
//       });
//     };
//   };

//   const onMouseDown = (e) => {
//     window.addEventListener("mousemove", onMouseMove);
//     window.addEventListener("mouseup", onMouseUp);

//     onMouseMove(e);
//   };

//   const onMouseMove = (e) => {
//     const x = (e.offsetX / elCanvas.offsetWidth) * elCanvas.width;
//     const y = (e.offsetY / elCanvas.offsetHeight) * elCanvas.height;

//     cursor.x = x;
//     cursor.y = y;
//     console.log(cursor);
//   };

//   const onMouseUp = () => {
//     window.removeEventListener("mousemove", onMouseMove);
//     window.removeEventListener("mouseup", onMouseUp);

//     cursor.x = 9999;
//     cursor.y = 9999;
//   };

//   const loadImage = async (url) => {
//     return new Promise((resolve, reject) => {
//       const img = new Image();
//       img.onload = () => resolve(img);
//       img.onerror = () => reject();
//       img.src = url;
//     });
//   };

//   const start = async () => {
//     imgA = await loadImage("./assets/1.png");
//     canvasSketch(sketch, settings);
//   };
//   start();

//   canvasSketch(sketch, settings);

//   class Particle {
//     constructor({ x, y, radius = 10, colA }) {
//       // posittion
//       this.x = x;
//       this.y = y;

//       // acceleration
//       this.ax = 0;
//       this.ay = 0;

//       // velocity
//       this.vx = 0;
//       this.vy = 0;

//       // initial position
//       this.ix = x;
//       this.iy = y;

//       this.radius = radius;
//       this.scale = 1;
//       this.color = colA;

//       this.minDist = random.range(100, 200);
//       this.pushFactor = random.range(0.01, 0.02);
//       this.pullFactor = random.range(0.002, 0.006);
//       this.dampFactor = random.range(0.9, 0.95);
//       // this.minDist = 100;
//       // this.pushFactor = 0.02;
//       // this.pullFactor = 0.004;
//       // this.dampFactor = 0.95;
//     }
//     update() {
//       let dx, dy, dd, distDelta;
//       let idxColor;
//       // pull force
//       dx = this.ix - this.x;
//       dy = this.iy - this.y;
//       dd = Math.sqrt(dx * dx + dy * dy);

//       this.ax = dx * this.pullFactor;
//       this.ay = dy * this.pullFactor;

//       this.scale = math.mapRange(dd, 0, 200, 1, 5);
//       // idxColor = Math.floor(math.mapRange(dd, 0, 200, 0, colors.length - 1, true));
//       // this.color = colors[idxColor];

//       // push force
//       dx = this.x - cursor.x;
//       dy = this.y - cursor.y;
//       dd = Math.sqrt(dx * dx + dy * dy);

//       distDelta = this.minDist - dd;

//       if (dd < this.minDist) {
//         this.ax += (dx / dd) * distDelta * this.pushFactor;
//         this.ay += (dy / dd) * distDelta * this.pushFactor;
//       }
//       // this.ax += 0.001;

//       this.vx += this.ax;
//       this.vy += this.ay;

//       this.vx *= this.dampFactor;
//       this.vy *= this.dampFactor;

//       this.x += this.vx;
//       this.y += this.vy;
//     }
//     draw(context) {
//       context.save();
//       context.translate(this.x, this.y);
//       context.fillStyle = this.color;

//       context.beginPath();
//       context.arc(0, 0, this.radius * this.scale, 0, Math.PI * 2);
//       context.fill();

//       context.restore();
//     }
//   }
// };
