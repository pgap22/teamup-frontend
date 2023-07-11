import Select from "../../../components/form/Select";
import Button from "../../../components/form/Button";
import Input from "../../../components/form/Input";
import CoordinacionLayout from "../../../components/layout/CoordinacionLayout";
import { useFormulario } from "../../../hooks/useFormulario";
import Textarea from "../../../components/form/Textarea";
import CoordinacionForm from "../../../components/layout/CoordinacionForm";

const DeporteCrear = () => {
  /*No esta conectado con la API*/
  const { register,setValue,handleSubmit } = useFormulario((data)=>{console.log(data)});

  return (
    <CoordinacionLayout titulo={"Crear Deporte"} center={true}>

      <CoordinacionForm
        handleSubmit={handleSubmit}
        imagenUrl={"/deporte.jpg"}
        titulo={"Datos Generales"}
      >
        <Input register={register("nombre")} label={"Nombre del deporte"} placeholder={"Ej: Futbol"} />
        <Textarea register={register("descripcion")} label={"Descripcion"} placeholder={"Descripcion del deporte"} />
        <Input type="number" register={register("limite_jugadores")} label={"Limite de jugadores"} placeholder={"Ej: 7"} />
        <Input type="number" register={register("limite_cambio")} label={"Limite de cambio"} placeholder={"Ej: 2"} />
        <Select
          label={"Tipo de Deporte"}
          placeholder={"Ej: Cancha"}
          setValue={setValue}
          valueLabel={"id_tipodeporte"}
          opciones={[
            {
              label: "Cancha",
              value: "cancha",
            },
          ]}
        />

        <Button>Añadir Deporte</Button>
      </CoordinacionForm>

    </CoordinacionLayout>
  );
};

export default DeporteCrear;
