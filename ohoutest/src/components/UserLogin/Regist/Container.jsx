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
        <ParticleStyle1>
          <ParticleTest1></ParticleTest1>
        </ParticleStyle1>
        <ParticleStyle2>
          <ParticleTest></ParticleTest>
        </ParticleStyle2>
        <ParticleStyle3>
          <ParticleTest1></ParticleTest1>
        </ParticleStyle3>
        <ParticleStyle4>
          <ParticleTest></ParticleTest>
        </ParticleStyle4>
        <ParticleStyle5>
          <ParticleTest></ParticleTest>
        </ParticleStyle5>
      </ParticleStyle>

      {params.id == undefined ? (
        <>
          <RegistStyle>
            <RegistComponents></RegistComponents>
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
const ParticleStyle = styled.div`
  position: absolute;
  z-index: 1;
  top: 334px;
  left: 10%;
`;
const ParticleStyle1 = styled.div`
  position: absolute;
  z-index: 1;
  top: 245px;
  left: -5%;
`;
const ParticleStyle2 = styled.div`
  position: absolute;
  z-index: 1;
  top: 960px;
  left: 150px;
`;
const ParticleStyle3 = styled.div`
  position: absolute;
  z-index: 1;
  top: -235px;
  left: 530px;
`;
const ParticleStyle4 = styled.div`
  position: absolute;
  z-index: 1;
  top: -180px;
  left: 155px;
`;
const ParticleStyle5 = styled.div`
  position: absolute;
  z-index: 1;
  top: 780px;
  left: 599px;
`;
const RegistStyle = styled.div`
  z-index: 3;
`;
