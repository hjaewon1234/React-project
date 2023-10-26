import canvasSketch from "canvas-sketch";
import random from "canvas-sketch-util/random";
import math from "canvas-sketch-util/math";
import colormap from "colormap";
import { useEffect } from "react";
import React from "react";

const ParticleTest = () => {
  const settings = {
    dimensions: [360, 360],
    animate: true,
  };

  const colors = colormap({ colormap: "viridis", nshades: 20 });

  const particles = [];
  const cursor = { x: 9999, y: 9999 };

  let elCanvas;

  const sketch = ({ width, height, canvas }) => {
    let x, y, particle, radius;
    let pos = [];
    const numCircles = 5;
    const gapCircles = 4;
    const gapDot = 9;
    let dotRadius = 2;
    let cirRadius = 5;
    const fitRadius = dotRadius;

    elCanvas = canvas;
    canvas.addEventListener("mousemove", onMouseDown);

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
    }

    return ({ context, width, height }) => {
      context.fillStyle = "#f4f4f4";
      context.fillRect(0, 0, width, height);

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
  };

  const onMouseUp = () => {
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);

    cursor.x = 9999;
    cursor.y = 9999;
  };

  class Particle {
    constructor({ x, y, radius = 10, colA }) {
      this.x = x;
      this.y = y;

      this.ax = 0;
      this.ay = 0;

      this.vx = 0;
      this.vy = 0;

      this.ix = x;
      this.iy = y;

      this.radius = radius;
      this.scale = 1;
      this.color = colA;

      this.minDist = random.range(100, 200);
      this.pushFactor = random.range(0.01, 0.02);
      this.pullFactor = random.range(0.002, 0.006);
      this.dampFactor = random.range(0.9, 0.95);
    }
    update() {
      let dx, dy, dd, distDelta;
      let idxColor;
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

      dx = this.x - cursor.x;
      dy = this.y - cursor.y;
      dd = Math.sqrt(dx * dx + dy * dy);

      distDelta = this.minDist - dd;

      if (dd < this.minDist) {
        this.ax += (dx / dd) * distDelta * this.pushFactor;
        this.ay += (dy / dd) * distDelta * this.pushFactor;
      }

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

  const ref = React.createRef();
  useEffect(() => {
    canvasSketch(sketch, {
      ...settings,
      canvas: ref.current,
    });
  }, [ref]);
  return (
    <>
      <canvas ref={ref} />
    </>
  );
};

export const ParticleTest1 = () => {
  const settings = {
    dimensions: [720, 720],
    animate: true,
  };

  const colors = colormap({ colormap: "inferno", nshades: 20 });

  const particles = [];
  const cursor = { x: 9999, y: 9999 };

  let elCanvas;

  const sketch = ({ width, height, canvas }) => {
    let x, y, particle, radius;

    let pos = [];
    const numCircles = 7.2;
    const gapCircles = 3.3;
    const gapDot = 18;
    let dotRadius = 3.3;
    let cirRadius = 82;
    const fitRadius = dotRadius;

    elCanvas = canvas;
    canvas.addEventListener("mousemove", onMouseDown);

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
    }

    return ({ context, width, height }) => {
      context.fillStyle = "#f4f4f4";
      context.fillRect(0, 0, width, height);

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
  };

  const onMouseUp = () => {
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);

    cursor.x = 9999;
    cursor.y = 9999;
  };

  class Particle {
    constructor({ x, y, radius = 10, colA }) {
      this.x = x;
      this.y = y;

      this.ax = 0;
      this.ay = 0;

      this.vx = 0;
      this.vy = 0;

      this.ix = x;
      this.iy = y;

      this.radius = radius;
      this.scale = 1;
      this.color = colA;

      this.minDist = random.range(100, 200);
      this.pushFactor = random.range(0.01, 0.02);
      this.pullFactor = random.range(0.002, 0.006);
      this.dampFactor = random.range(0.9, 0.95);
    }
    update() {
      let dx, dy, dd, distDelta;
      let idxColor;
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

      dx = this.x - cursor.x;
      dy = this.y - cursor.y;
      dd = Math.sqrt(dx * dx + dy * dy);

      distDelta = this.minDist - dd;

      if (dd < this.minDist) {
        this.ax += (dx / dd) * distDelta * this.pushFactor;
        this.ay += (dy / dd) * distDelta * this.pushFactor;
      }
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

  const ref = React.createRef();
  useEffect(() => {
    canvasSketch(sketch, {
      ...settings,
      canvas: ref.current,
    });
  }, [ref]);
  return (
    <>
      <canvas ref={ref} />
    </>
  );
};

export default ParticleTest;
