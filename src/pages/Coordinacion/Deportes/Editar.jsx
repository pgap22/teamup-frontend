import CoordinacionLayout from "../../../components/layout/CoordinacionLayout";
import CoordinacionForm from "../../../components/layout/CoordinacionForm";
import Input from "../../../components/form/Input";
import Textarea from "../../../components/form/Textarea";
import { useFormulario } from "../../../hooks/useFormulario";
import Select from "../../../components/form/Select";
import Button from "../../../components/form/Button";
import { useParams } from "react-router-dom";
import { editarDeporte, obtenerTipoDeportes, obtenerUnDeporte } from "../../../api";
import { useEffect } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { tipoDeporteTransformar } from "../../../helper/transformarDatos";
import { useFetchId } from "../../../hooks/useFetchId";
import Exito from "src/components/coordinacion/Exito";
import { PageLoader } from "src/components/ui/PageLoader";
import Skeleton from "src/components/ui/Skeleton";
import Loader from "src/components/ui/Loader";

function DeporteEditar() {

    const { id } = useParams();
    const { isLoading, deporte } = useFetchId(id, obtenerUnDeporte, "deporte");
    const { register, handleSubmit, setValue, registroExitoso, isLoading: editarLoading } = useFormulario(editarDeporte);
    const { isLoading: loading, tiposDeportes } = useFetch("tiposDeportes", obtenerTipoDeportes, tipoDeporteTransformar);

    useEffect(() => {
        console.log(isLoading)
    }, [deporte])

    useEffect(() => {
        setValue("id", id);
    }, [])

    if (isLoading || loading) return <PageLoader />
    if (registroExitoso) return (
        <Exito
            titulo={"Deporte editado"}
            subtitulo={"El deporte se ha editado exitosamente"}
            linkText={"Volver a deportes"}
            url={"/coordinacion/deportes"}
        />
    )

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
                <Button disabled={editarLoading}>
                    <Skeleton loading={editarLoading} fallback={<Loader />}>
                        Editar Deporte
                    </Skeleton>
                </Button>
            </CoordinacionForm>
        </CoordinacionLayout>
    )
}



export default DeporteEditar;