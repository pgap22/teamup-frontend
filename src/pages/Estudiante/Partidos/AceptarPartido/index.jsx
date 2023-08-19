import MultiStepForm from "src/components/estudiante/MultiStepForm";
import { MultiStepFormProvider } from "src/components/estudiante/MultiStepForm/FormContext";
import EstudianteLayaout from "src/components/layout/EstudianteLayout";
import ExitoForm from "src/router/estudiante/exito/ExitoForm";
import Exito from "./components/Exito";
import TeamStaffForm from "./form";

import { aceptarSolictudRival } from "src/api/partidos";

const AceptarPartido = ({ partido, miembros }) => {
  const { deporte } = partido;
  const Forms = [
    {
      name: "Plantilla",
      Componet: TeamStaffForm,
      title: "Crea tu plantilla",
      fields: ["jugadores"],
      props: { partido, deporte, miembros },
    },
  ];

  return (
    <EstudianteLayaout title={"Aceptar invitacion"}>
      <MultiStepFormProvider>
        <MultiStepForm
          Exito={Exito}
          FormsData={Forms}
          sender={aceptarSolictudRival}
          keyName={"id_partido"}
          mappedFunction={({ form }) => {
            const data = form["Plantilla"];
            const { values } = data;
            return {
              datos: {
                ...values,
                id_partido: partido.id,
              },
            };
          }}
        />
      </MultiStepFormProvider>
    </EstudianteLayaout>
  );
};

export default AceptarPartido;
