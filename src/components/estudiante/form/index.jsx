import Button from "src/components/form/Button";

const EstudianteFormLayout = ({
  children,
  title,
  handleClickCancelar,
  handleClickContinuar,
}) => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full gap-10">
      <FormHeader title={title} />
      {children}
      <FormButtons
        handleClickContinuar={handleClickContinuar}
        handleClickCancelar={handleClickCancelar}
      />
    </section>
  );
};

const FormHeader = ({ title }) => {
  return <h1 className=" text-[#565656] font-bold text-3xl">{title}</h1>;
};
const FormButtons = ({ handleClickCancelar, handleClickContinuar }) => {
  return (
    <div className="flex w-full md:max-w-[750px] max-w-[400px] sm:flex-row gap-3 flex-col ">
      <Button onClick={handleClickCancelar} color={"rojo"}>
        Cancelar
      </Button>
      <Button onClick={handleClickContinuar} color={"morado"} disabled>
        Continuar
      </Button>
    </div>
  );
};

export default EstudianteFormLayout;
