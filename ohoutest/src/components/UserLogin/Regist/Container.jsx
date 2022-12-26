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
      {params.id == undefined ? (
        <>
          <RegistComponents></RegistComponents>
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
