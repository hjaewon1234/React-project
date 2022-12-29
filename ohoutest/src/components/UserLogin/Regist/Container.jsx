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

  @media screen and (max-width: 1280px) {
  }
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 912px) {
  }
  @media screen and (max-width: 820px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 540px) {
    margin-top: -50px;
    scale: 0.9;
  }
  @media screen and (max-width: 414px) {
    scale: 0.9;
  }
  @media screen and (max-width: 412px) {
    scale: 0.9;
  }
  @media screen and (max-width: 393px) {
    scale: 0.85;
  }
  @media screen and (max-width: 375px) {
    margin-top: -70px;
    scale: 0.85;
  }
  @media screen and (max-width: 360px) {
    margin-bottom: -70px;
    scale: 0.85;
  }
  @media (max-width: 280px) {
    scale: 0.68;
  }
`;

const ParticleStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: fixed;
  z-index: 1;
  top: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

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
    right: 100px;
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
