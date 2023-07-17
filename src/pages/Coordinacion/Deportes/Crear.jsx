import Select from "../../../components/form/Select";
import Button from "../../../components/form/Button";
import Input from "../../../components/form/Input";
import CoordinacionLayout from "../../../components/layout/CoordinacionLayout";
import { useFormulario } from "../../../hooks/useFormulario";
import Textarea from "../../../components/form/Textarea";
import CoordinacionForm from "../../../components/layout/CoordinacionForm";
import { crearDeporte, obtenerTipoDeportes } from "../../../api";
import { useFetch } from "../../../hooks/useFetch"
import { tipoDeporteTransformar } from "../../../helper/transformarDatos"
import Exito from "src/components/coordinacion/Exito";

const DeporteCrear = () => {

  const { register, setValue, handleSubmit, registroExitoso } = useFormulario(crearDeporte);

  const { tiposDeportes } = useFetch("tiposDeportes", obtenerTipoDeportes, tipoDeporteTransformar);

  if (registroExitoso) return (
    <Exito
      titulo={"Deporte Creado"}
      subtitulo={"El deporte se ha creado exitosamente"}
      linkText={"Volver a deportes"}
      url={"/coordinacion/deportes"}
    />
  )

  return (
    <CoordinacionLayout titulo={"Crear Deporte"} center={true}>

      <CoordinacionForm
        handleSubmit={handleSubmit}
        imagenUrl={"/deporte.jpg"}
        titulo={"Datos Generales"}
      >
        <Input
          register={register("nombre")}
          label={"Nombre del deporte"}
          placeholder={"Ej: Futbol"} />

        <Textarea
          register={register("descripcion")}
          label={"Descripcion"}
          placeholder={"Descripcion del deporte"} />

        <Input
          type="number"
          register={register("limiteJugadores")}
          label={"Limite de jugadores"}
          placeholder={"Ej: 7"} />

        <Input
          type="number"
          register={register("limiteJugadoresCambio")}
          label={"Limite de cambio"}
          placeholder={"Ej: 2"} />

        <Select
          label={"Tipo de Deporte"}
          placeholder={"Ej: Cancha"}
          setValue={setValue}
          valueLabel={"id_tipoDeporte"}
          opciones={tiposDeportes}
        />

        <Button>Añadir Deporte</Button>
      </CoordinacionForm>

    </CoordinacionLayout>
  );
};




export default DeporteCrear;
