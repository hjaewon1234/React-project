import RegistComponents from "./Components";
import { useParams } from "react-router-dom";
import ParticleTest from "../Particle/Components";
import { ParticleTest1 } from "../Particle/Components";
import styled from "styled-components";

const RegistContainer = () => {
  const params = useParams();
  const Param1 = () => {
    return (
      <>
        <div>param1</div>
      </>
    );
  };
  return (
    <>
      <ParticleStyle>
        {/* <ParticleStyle1 className="Particle1 Particle1">
          <ParticleTest1></ParticleTest1>
        </ParticleStyle1> */}
        <ParticleStyle2 className="Particle1 Particle2">
          <ParticleTest></ParticleTest>
        </ParticleStyle2>
        <ParticleStyle3 className="Particle1 Particle3">
          <ParticleTest1></ParticleTest1>
        </ParticleStyle3>
        <ParticleStyle4 className="Particle1 Particle4">
          <ParticleTest></ParticleTest>
        </ParticleStyle4>
        <ParticleStyle5 className="Particle1 Particle5">
          <ParticleTest1></ParticleTest1>
        </ParticleStyle5>
      </ParticleStyle>
      {params.id == undefined ? (
        <>
          <RegistStyle>
            <RegistComponents className="desktop"></RegistComponents>
          </RegistStyle>
        </>
      ) : (
        <div>
          {Param1()}
          {params.id}
        </div>
      )}
    </>
  );
};

export default RegistContainer;

const RegistStyle = styled.div`
  z-index: 3;
  position: relative;
  top: -829px;
  height: 74vh;
  @media screen and (min-width: 1024px) {
    top: -829px;
    height: 74vh;
  }
  @media screen and (max-width: 1280px) {
    top: -812px;
    height: 79vh;
    .desktop {
    }
  }
  @media screen and (max-width: 1024px) {
    top: -589px;
    height: 143vh;
  }
  @media screen and (max-width: 912px) {
    top: -1357px;
    height: 6vh;
  }
  @media screen and (max-width: 820px) {
    top: -1184px;
    height: 21vh;
  }
  @media screen and (max-width: 768px) {
    top: -1020px;
    height: 49vh;
  }
  @media screen and (max-width: 540px) {
    top: -751px;
    height: 92vh;
    scale: 0.9;
  }
  @media screen and (max-width: 414px) {
    top: -926px;
    height: 51.5vh;
    scale: 0.9;
  }
  @media screen and (max-width: 412px) {
    top: -943px;
    height: 50vh;
    scale: 0.9;
  }
  @media screen and (max-width: 393px) {
    top: -887px;
    height: 51vh;
    scale: 0.85;
  }
  @media screen and (max-width: 375px) {
    top: -714px;
    height: 93vh;
    scale: 0.85;
  }
  @media screen and (max-width: 360px) {
    top: -766px;
    height: 81vh;
    scale: 0.85;
  }
  @media screen and (max-width: 280px) {
    top: -717px;
    height: 63vh;
    scale: 0.68;
  }
`;

const ParticleStyle = styled.div`
  display: flex;
  flex-wrap: nowrap;
  position: relative;
  z-index: 1;
  top: 200px;
  left: -180px;
  height: 100vh;
  width: 100vh;

  .Particle2 {
    display: block;
    top: 960px;
    left: 650px;
    animation-direction: alternate;
    animation: effect4 6.3s infinite alternate ease-in-out;
  }
  .Particle3 {
    display: block;
    bottom: -335px;
    left: 110px;
    animation-direction: reverse;
    animation: effect3 5.7s infinite alternate ease-in-out;
  }
  .Particle4 {
    display: block;
    top: -190px;
    left: 185px;
    animation-direction: reverse;
    animation: effect2 5.3s infinite alternate ease-in-out;
  }
  .Particle5 {
    display: block;
    top: -250px;
    left: 615px;
    animation-direction: reverse;
    animation: effect1 6.5s infinite alternate ease-in-out;
  }

  @keyframes effect1 {
    from {
      top: 50px;
      left: 650px;

      transform: rotate(45deg);
    }
    to {
      top: -350px;
      left: 600px;

      transform: rotate(210deg);
    }
  }
  @keyframes effect2 {
    from {
      top: 50px;
      right: 300px;
      transform: rotate(70deg);
    }
    to {
      right: 680px;
      transform: rotate(280deg);
    }
  }
  @keyframes effect3 {
    from {
      bottom: -285px;
      left: -220px;
      transform: rotate(45deg);
    }
    to {
      bottom: -583px;
      left: 65px;
      transform: rotate(285deg);
    }
  }
  @keyframes effect4 {
    from {
      top: 600px;
      left: 860px;
      transform: rotate(25deg);
    }
    to {
      top: 960px;
      left: 580px;
      transform: rotate(275deg);
    }
  }

  @media screen and (max-width: 768px) {
    .Particle1 {
      display: none;
    }
    .Particle2 {
      display: block;
      top: 960px;
      left: 650px;
      animation-direction: alternate;
      animation: effect4 6.3s infinite alternate ease-in-out;
    }
    .Particle3 {
      display: block;
      bottom: -335px;
      left: 110px;
      animation-direction: reverse;
      animation: effect3 5.7s infinite alternate ease-in-out;
    }
    .Particle4 {
      display: block;
      top: -190px;
      left: 95px;
      animation-direction: reverse;
      animation: effect2 5.3s infinite alternate ease-in-out;
    }
    .Particle5 {
      display: block;
      top: -250px;
      left: 625px;
      animation-direction: reverse;
      animation: effect1 6.5s infinite alternate ease-in-out;
    }

    @keyframes effect1 {
      from {
        top: 150px;
        left: 625px;

        transform: rotate(45deg);
      }
      to {
        left: 625px;

        transform: rotate(210deg);
      }
    }
    @keyframes effect2 {
      from {
        top: 50px;
        right: 260px;
        transform: rotate(70deg);
      }
      to {
        right: 370px;
        transform: rotate(280deg);
      }
    }
    @keyframes effect3 {
      from {
        bottom: -285px;
        left: -70px;
        transform: rotate(45deg);
      }
      to {
        bottom: -583px;
        left: 60px;
        transform: rotate(285deg);
      }
    }
    @keyframes effect4 {
      from {
        top: 600px;
        left: 760px;
        transform: rotate(25deg);
      }
      to {
        top: 960px;
        left: 580px;
        transform: rotate(275deg);
      }
    }
  }
`;
const ParticleStyle1 = styled.div`
  position: absolute;
  flex: 1;
  z-index: 1;
  top: 295px;
  left: -25px;
  rotate: 45deg;
  widht: 100%;
`;
const ParticleStyle2 = styled.div`
  position: absolute;
  flex: 1;
  z-index: 2;
  top: 960px;
  left: 650px;
  widht: 100%;
`;
const ParticleStyle3 = styled.div`
  position: absolute;
  flex: 1;
  z-index: 1;
  bottom: -25px;
  left: 110px;
  rotate: 15deg;
  widht: 100%;
`;
const ParticleStyle4 = styled.div`
  position: absolute;
  flex: 1;
  z-index: 2;
  top: -150px;
  left: 155px;
  widht: 100%;
`;
const ParticleStyle5 = styled.div`
  position: absolute;
  flex: 1;
  z-index: 1;
  top: 550px;
  left: 799px;
  rotate: 225deg;
  widht: 100%;
`;
