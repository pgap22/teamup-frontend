import EstudianteFormLayout from "src/components/estudiante/form";

import DatePicker from "src/components/form/Date/DatePicker";
import Textarea from "./Components/Textarea";
import TimePicker from "src/components/form/Date/TimePicker";
import Toggle from "src/components/form/Toogle";

const GeneralDataForm = () => {
  return (
    <div className="max-w-[400px] w-full h-full flex flex-col items-center gap-10">
      <Textarea rows="4" label={"¿Porque quieres jugar este juego?"} />
      <DatePicker label={"¿Que dia van a jugar?"} />
      <TimePicker label={"¿A que hora van a jugar?"} />
      <Toggle />
    </div>
  );
};

export default GeneralDataForm;
