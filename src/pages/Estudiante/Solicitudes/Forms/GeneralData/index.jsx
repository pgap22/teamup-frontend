import EstudianteFormLayout from "src/components/estudiante/form";

import DatePicker from "src/components/form/Date/DatePicker";
import Textarea from "./Components/Textarea";
import HourPicker from "src/components/form/Date/HourPicker";

const GeneralDataForm = () => {
  return (
    <EstudianteFormLayout
      title={"Rellena la informacion general"}
      handleClickCancelar={() => { }}
      handleClickContinuar={() => { }}
    >
      <div className="max-w-[400px] w-full h-full flex flex-col items-center gap-5">
        <Textarea rows="4" label={"¿Porque quieres jugar este juego?"} />
        <DatePicker label={"¿Que dia van a jugar?"} />
        <HourPicker label={"Seleciona una hora"} />
      </div>
    </EstudianteFormLayout>
  );
};


export default GeneralDataForm;
