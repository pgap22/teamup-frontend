import dayjs from "dayjs";

import DatePicker from "src/components/form/Date/DatePicker";
import Textarea from "./Components/Textarea";
import TimePicker from "src/components/form/Date/TimePicker";
import Toggle from "src/components/form/Toogle";
import { useState } from "react";
import { useConstantes } from "src/components/estudiante/MultiStepForm/useConstantes";
import { useMultiStepForm } from "src/components/estudiante/MultiStepForm/useMultiStepForm";
import { useEffect } from "react";
import { useTranlate } from "src/hooks/useTranslation";

const GeneralDataForm = () => {
  const { setForm } = useMultiStepForm();
  const { form, currentFormState, currentFormName } = useConstantes();
  const { t } = useTranlate();

  const {
    descripcion: descripcionState,
    hora: horaState,
    fecha: fechaState,
    maestro_intermediario: maestroIntermediarioState,
  } = currentFormState.values;

  const deporte = form.Deportes.values.deporte[0]
  const { skipMaestro, opcionalMaestro } = deporte.tipoDeporte;

  const [descripcion, setDescripcion] = useState(() =>
    descripcionState ? descripcionState : ""
  );
  const [hora, setHora] = useState(() =>
    horaState ? horaState : dayjs(new Date())
  );
  const [fecha, setFecha] = useState(() =>
    fechaState ? fechaState : dayjs(new Date())
  );
  const [maestroIntermediario, setMaestro_intermediario] = useState(() =>
    maestroIntermediarioState ? maestroIntermediarioState : false
  );

  const isTheFormaValid = () => {
    if (descripcion === "" || !hora || !fecha) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    const formStateCopy = { ...currentFormState };

    if (isTheFormaValid()) {
      formStateCopy.valid = true;
      formStateCopy.values.descripcion = descripcion;
      formStateCopy.values.hora = hora;
      formStateCopy.values.fecha = fecha;
      formStateCopy.values.maestro_intermediario = maestroIntermediario;
      formStateCopy.values.descripcion = descripcion;

      setForm({ ...form, [currentFormName]: { ...formStateCopy } });
      return;
    }
    formStateCopy.valid = false;
    setForm({ ...form, [currentFormName]: { ...formStateCopy } });
  }, [descripcion, hora, maestroIntermediario, fecha]);

  return (
    <div className="max-w-[400px] w-full h-full flex flex-col items-center gap-10">
      <Textarea
        setDescripcion={setDescripcion}
        descripcion={descripcion}
        rows="4"
        label={t("reasonToPlay")}
      />
      <DatePicker date={fecha} setDate={setFecha} label={t("playDate")} />
      <TimePicker time={hora} setTime={setHora} label={t("playTime")} />
      {!skipMaestro && opcionalMaestro && (
        <Toggle
          label={t("isMaestroIntermediario")}
          enabled={maestroIntermediario}
          setEnabled={setMaestro_intermediario}
        />
      )}
    </div>
  );
};

export default GeneralDataForm;
