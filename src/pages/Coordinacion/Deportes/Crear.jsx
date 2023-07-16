import Select from "../../../components/form/Select";
import Button from "../../../components/form/Button";
import Input from "../../../components/form/Input";
import CoordinacionLayout from "../../../components/layout/CoordinacionLayout";
import { useFormulario } from "../../../hooks/useFormulario";
import Textarea from "../../../components/form/Textarea";
import CoordinacionForm from "../../../components/layout/CoordinacionForm";
import { crearDeporte, obtenerTipoDeportes } from "../../../api";
import Caja from "../../../components/ui/Cajas/Caja";
import { Link } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch"
import { tipoDeporteTransformar } from "../../../helper/transformarDatos"

const DeporteCrear = () => {

  const { register, setValue, handleSubmit, registroExitoso } = useFormulario(crearDeporte);

  const { tiposDeportes } = useFetch("tiposDeportes", obtenerTipoDeportes, tipoDeporteTransformar);

  if (registroExitoso) return <Exito />

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


const Exito = () => {
  return <CoordinacionLayout titulo={"Crear Deporte"} center={true}>
    <Caja titulo={"Deporte Creado"}>
      <p>Se ha creado el deporte exitosamente</p>
      <Link className="text-primary underline" to={"/coordinacion/deportes"}>
        Volver a deportes
      </Link>
    </Caja>
  </CoordinacionLayout>
}

export default DeporteCrear;
