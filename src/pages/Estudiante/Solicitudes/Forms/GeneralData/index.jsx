import EstudianteFormLayout from "src/components/estudiante/form";

import DatePicker from "src/components/form/DatePicker";

const Textarea = ({ label, placeholder, register, rows = "", cols = "" }) => {
  return (
    <div className="flex flex-col items-center w-full gap-4">
      <label className="text-xl font-bold">{label}</label>
      <textarea
        {...register}
        rows={rows}
        cols={cols}
        className="outline-none bg-transparent w-full resize-none p-2 border grid grid-cols-[1fr_max-content] gap-4 items-center border-[#D8D8D8] rounded-md placeholder:font-medium"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

const GeneralDataForm = () => {
  return (
    <EstudianteFormLayout
      title={"Rellena la informacion general"}
      handleClickCancelar={() => {}}
      handleClickContinuar={() => {}}
    >
      <div className="max-w-[400px] w-full h-full flex flex-col items-center gap-5">
        <Textarea rows="4" label={"¿Porque quieres jugar este juego?"} />
        <DatePicker label={"¿Que dia van a jugar?"} />
      </div>
    </EstudianteFormLayout>
  );
};

export default GeneralDataForm;
