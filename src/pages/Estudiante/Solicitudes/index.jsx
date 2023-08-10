import { MultiStepFormProvider } from "src/components/estudiante/MultiStepForm/FormContext";

import EstudianteLayaout from "../../../components/layout/EstudianteLayout";

import SportsForm from "./Forms/Sports";
import TeamForm from "./Forms/Team";
import OponnentForm from "./Forms/Oponnent";
import GeneralDataForm from "./Forms/GeneralData";
import TeamStaffForm from "./Forms/TeamStaff";
import MultiStepForm from "src/components/estudiante/MultiStepForm";

const Solicitudes = () => {
  const Forms = [
    {
      name: "Deportes",
      Componet: SportsForm,
      title: "Seleciona un deporte",
      fields: ["id_deporte"],
    },
    {
      name: "EquipoLocal",
      Componet: TeamForm,
      title: "Seleciona tu equipo",
      fields: ["id_equipo_local"],
    },
    {
      name: "EquipoVisitante",
      Componet: OponnentForm,
      title: "Seleciona a tu rival",
      fields: ["id_equipo_visitante"],
    },
    {
      name: "InformacionGeneral",
      Componet: GeneralDataForm,
      title: "Rellena la informacion general",
      fields: ["descripcion", "fecha", "maestro_intermediario"],
    },
  ];
  return (
    <EstudianteLayaout title={"Creando Solicitud"}>
      <MultiStepFormProvider>
        <MultiStepForm FormsData={Forms} />
      </MultiStepFormProvider>
    </EstudianteLayaout>
  );
};

export default Solicitudes;
