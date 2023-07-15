import CoordinacionLayout from "../../../components/layout/CoordinacionLayout";
import CoordinacionForm from "../../../components/layout/CoordinacionForm";
import Input from "../../../components/form/Input";
import Textarea from "../../../components/form/Textarea";
import { useFormulario } from "../../../hooks/useFormulario";
import Select from "../../../components/form/Select";
import Button from "../../../components/form/Button";
import { Link, useParams } from "react-router-dom";
import { editarDeporte, obtenerTipoDeportes, obtenerUnDeporte } from "../../../api";
import Caja from "../Dashboard/components/Cajas/Caja";
import { useEffect } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { tipoDeporteTransformar } from "../../../helper/transformarDatos";
import { useFetchId } from "../../../hooks/useFetchId";

function DeporteEditar() {

    const { id } = useParams();

    const { isLoading, deporte } = useFetchId(id, obtenerUnDeporte, "deporte");

    const { register, handleSubmit, setValue, registroExitoso } = useFormulario(editarDeporte);

    const { isLoading: loading, tiposDeportes } = useFetch("tiposDeportes", obtenerTipoDeportes, tipoDeporteTransformar);


    useEffect(() => {
        setValue("id", id);
    }, [])

    if (isLoading || loading) return <p>Cargando...</p>

    if (registroExitoso) return <Exito />

    const idTipoDeporte = tiposDeportes.findIndex(tipoDeporte => tipoDeporte.value == deporte.tipoDeporte.id);


    return (
        <CoordinacionLayout titulo={"Editar Deporte"} center>
            <CoordinacionForm handleSubmit={handleSubmit} titulo={"Datos Generales"} imagenUrl={"/deporte_1.jpg"}>
                <Input
                    register={register("nombre", { value: deporte.nombre })}
                    label={"Nombre del deporte"}
                    placeholder={"Ej: Futbol"} />

                <Textarea
                    register={register("descripcion", { value: deporte.descripcion })}
                    label={"Descripcion"}
                    placeholder={"Descripcion del deporte"} />

                <Input
                    type="number"
                    register={register("limiteJugadores", { value: deporte.limiteJugadores })}
                    label={"Limite de jugadores"}
                    placeholder={"Ej: 7"} />

                <Input
                    type="number"
                    register={register("limiteJugadoresCambio", { value: deporte.limiteJugadoresCambio })}
                    label={"Limite de cambio"}
                    placeholder={"Ej: 2"} />

                <Select
                    label={"Tipo de Deporte"}
                    placeholder={"Ej: Cancha"}
                    setValue={setValue}
                    valueLabel={"id_tipoDeporte"}
                    opciones={tiposDeportes}
                    id_valorPorDefecto={idTipoDeporte}

                />
                <Button>Editar Deporte</Button>
            </CoordinacionForm>
        </CoordinacionLayout>
    )
}


const Exito = () => {
    return <CoordinacionLayout titulo={"Editar Deporte"} center={true}>
        <Caja titulo={"Deporte Editado"}>
            <p>Se ha editado el deporte exitosamente</p>
            <Link className="text-primary underline" to={"/coordinacion/deportes"}>
                Volver a deportes
            </Link>
        </Caja>
    </CoordinacionLayout>
}


export default DeporteEditar;