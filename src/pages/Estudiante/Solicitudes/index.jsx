import { MultiStepFormProvider } from "src/components/estudiante/MultiStepForm/FormContext";

import EstudianteLayaout from "../../../components/layout/EstudianteLayout";

import SportsForm from "./Forms/Sports";
import TeamForm from "./Forms/Team";
import OponnentForm from "./Forms/Oponnent";
import GeneralDataForm from "./Forms/GeneralData";
import TeamStaffForm from "./Forms/TeamStaff";
import MultiStepForm from "src/components/estudiante/MultiStepForm";

import ExitoForm from "src/router/estudiante/exito/ExitoForm";

import { mappedDataSolicitud } from "src/helper/transformarDatos";
import { crearPartido } from "src/api/partidos";
import { useTranlate } from "src/hooks/useTranslation";

const Solicitudes = () => {
  const { t } = useTranlate();

  const Forms = [
    {
      name: "Deportes",
      Componet: SportsForm,
      title: t("seleccionaDeporte"),
      fields: ["id_deporte", "deporte"],
    },
    {
      name: "EquipoLocal",
      Componet: TeamForm,
      title: t("seleccionaEquipo"),
      fields: ["id_equipo_local", "previous_id_equipo"],
    },
    {
      name: "Plantilla",
      Componet: TeamStaffForm,
      title: t("creaPlantilla"),
      fields: ["jugadores", "id_equipo_actual"],
    },
    {
      name: "EquipoVisitante",
      Componet: OponnentForm,
      title: t("seleccionaRival"),
      fields: ["id_equipo_visitante"],
    },
    {
      name: "InformacionGeneral",
      Componet: GeneralDataForm,
      title: t("rellenaInformacion"),
      fields: ["descripcion", "hora", "fecha", "maestro_intermediario"],
    },
  ];

  return (
    <EstudianteLayaout title={t("creandoSolicitud")}>
      <MultiStepFormProvider>
        <MultiStepForm
          Exito={ExitoForm}
          FormsData={Forms}
          sender={crearPartido}
          mappedFunction={mappedDataSolicitud}
          keyName={"id_equipo_local"}
        />
      </MultiStepFormProvider>
    </EstudianteLayaout>
  );
};

export default Solicitudes;
