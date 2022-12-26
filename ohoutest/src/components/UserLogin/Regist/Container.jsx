import RegistComponents from "./Components";
import { useParams } from "react-router-dom";
import ParticleTest from "../Particle/Components";
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
        <ParticleTest></ParticleTest>
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
  top: 100px;
  left: 200px;
  left ParticleStyle {
    background-color: rgb(240, 165, 0);
  }
`;

const RegistStyle = styled.div`
  z-index: 3;
`;
