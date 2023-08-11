import { MultiStepFormProvider } from "src/components/estudiante/MultiStepForm/FormContext";

import EstudianteLayaout from "../../../components/layout/EstudianteLayout";

import SportsForm from "./Forms/Sports";
import TeamForm from "./Forms/Team";
import OponnentForm from "./Forms/Oponnent";
import GeneralDataForm from "./Forms/GeneralData";
import TeamStaffForm from "./Forms/TeamStaff";
import MultiStepForm from "src/components/estudiante/MultiStepForm";
import { throwError } from "src/helper";

const Solicitudes = () => {
  const Forms = [
    {
      name: "Deportes",
      Componet: SportsForm,
      title: "Seleciona un deporte",
      fields: ["id_deporte", "deporte"],
    },
    {
      name: "EquipoLocal",
      Componet: TeamForm,
      title: "Seleciona tu equipo",
      fields: ["id_equipo_local", "previous_id_equipo"],
    },
    {
      name: "Plantilla",
      Componet: TeamStaffForm,
      title: "Crea tu plantilla",
      fields: ["jugadores", "id_equipo_actual"],
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
      fields: ["descripcion", "hora", "fecha", "maestro_intermediario"],
    },
  ];
  return (
    <EstudianteLayaout title={"Creando Solicitud"}>
      <MultiStepFormProvider>
        <MultiStepForm FormsData={Forms} succesSubmit={async ({ data }) => {
          try {
            const partido = await crearPartido(data)
            console.log(partido)
            return partido
          } catch (error) {
            throwError(error)
          }
        }} />
      </MultiStepFormProvider>
    </EstudianteLayaout>
  );
};

export default Solicitudes;
