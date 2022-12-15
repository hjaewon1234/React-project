import RegistComponents from "./Components";
import { useParams } from "react-router-dom";

const RegistContainer = () => {
  const params = useParams();
  const Param1 = () => {
    return <div>param1</div>;
  };
  return (
    <>
      {params.id == undefined ? (
        <RegistComponents></RegistComponents>
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
