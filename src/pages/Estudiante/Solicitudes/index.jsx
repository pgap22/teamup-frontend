import EstudianteLayaout from "../../../components/layout/EstudianteLayout";

import SportsForm from "./Forms/Sports";
import TeamForm from "./Forms/Team";
import OponnentForm from "./Forms/Oponnent";
import GeneralDataForm from "./Forms/GeneralData";

const Solicitudes = () => {
  return (
    <EstudianteLayaout title={"Creando Solicitud"}>
      <div className="flex flex-col gap-20">
        {/* <SportsForm />
        <TeamForm />
        <OponnentForm /> */}
        <GeneralDataForm />
      </div>
    </EstudianteLayaout>
  );
};

export default Solicitudes;
