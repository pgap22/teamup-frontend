import Button from "src/components/form/Button";
import { useMultiStepForm } from "../MultiStepForm/useMultiStepForm";
import { useEffect } from "react";
import { useConstantes } from "../MultiStepForm/useConstantes";

const EstudianteFormLayout = ({ children, title }) => {
  return (
    <section className="flex flex-col items-center justify-center w-full gap-10">
      <FormHeader title={title} />
      {children}
      <FormButtons />
    </section>
  );
};

const FormHeader = ({ title }) => {
  return <h1 className=" text-[#565656] font-bold text-3xl">{title}</h1>;
};
const FormButtons = () => {
  const { form, setForm } = useMultiStepForm();

  const { currentIndex, currentFormValid } = useConstantes({
    form,
  });

  const handleClickRegresar = () => {
    const value = currentIndex - 1 < 0 ? 0 : currentIndex - 1;

    const data = {
      ...form,
      currentFormIndex: value,
      previousIndex: currentIndex,
    };
    setForm(data);
  };

  const handleClickContinuar = () => {
    if (currentFormValid) {
      setForm({ ...form, currentFormIndex: currentIndex + 1 });
    }
  };
  return (
    <div className="flex w-full md:max-w-[750px] max-w-[400px] sm:flex-row gap-3 flex-col ">
      <Button onClick={handleClickRegresar} color={"blanco"} border="negro">
        Regresar
      </Button>
      <Button
        onClick={handleClickContinuar}
        color={"morado"}
        disabled={!currentFormValid}
      >
        Continuar
      </Button>
    </div>
  );
};

export default EstudianteFormLayout;
