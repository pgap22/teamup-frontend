import Button from "src/components/form/Button";

import { useMultiStepForm } from "../MultiStepForm/useMultiStepForm";
import { useConstantes } from "../MultiStepForm/useConstantes";
import { useState } from "react";
import Skeleton from "src/components/ui/Skeleton";
import Loader from "src/components/ui/Loader";

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
  const { identificadores } = form;

  const [loading, setLoading] = useState(false)

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

  const { succesSubmit, lastIndex } = form;

  const handleClickContinuar = async () => {
    setLoading(true);
    try {
      if (currentFormValid) {
        if (lastIndex === currentIndex) {
          await succesSubmit({ form });
          return;
        }
        setForm({ ...form, currentFormIndex: currentIndex + 1 });
      }
    } catch (error) {
    }finally{
      setLoading(false);
    }
  };
  return (
    <div className="flex w-full md:max-w-[750px] max-w-[400px] sm:flex-row gap-3 flex-col ">
      {identificadores.length > 1 && (
        <Button onClick={handleClickRegresar} color={"blanco"} border="negro">
          Regresar
        </Button>
      )}

      <Button
        onClick={handleClickContinuar}
        color={"morado"}
        disabled={!currentFormValid || loading}
      >
        <Skeleton loading={loading} fallback={<Loader />}>
          {lastIndex === currentIndex ? "Enviar" : "Continuar"}
        </Skeleton>
      </Button>
    </div>
  );
};

export default EstudianteFormLayout;
