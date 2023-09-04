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
import { useTranlate } from "src/hooks/useTranslation";

function DeporteEditar() {
    const {t} = useTranlate();
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
    if (registroExitoso) {
        return (
          <Exito
            titulo={t('editSport.title')}
            subtitulo={t('editSport.successMessage')}
            linkText={t('editSport.returnToSports')}
            url={"/coordinacion/deportes"}
          />
        );
      }

    const idTipoDeporte = tiposDeportes.findIndex(tipoDeporte => tipoDeporte.value == deporte.tipoDeporte.id);
    return (
<CoordinacionLayout titulo={t('editSportForm.title')} center>
  <CoordinacionForm handleSubmit={handleSubmit} titulo={t('editSportForm.generalData')} imagenUrl={"/deporte_1.jpg"}>
    <Input
      register={register("nombre", { value: deporte.nombre })}
      label={t('editSportForm.sportName')}
      placeholder={t('editSportForm.exampleSportName')}
    />

    <Textarea
      register={register("descripcion", { value: deporte.descripcion })}
      label={t('editSportForm.description')}
      placeholder={t('editSportForm.exampleDescription')}
    />

    <Input
      type="number"
      register={register("limiteJugadores", { value: deporte.limiteJugadores })}
      label={t('editSportForm.playerLimit')}
      placeholder={t('editSportForm.examplePlayerLimit')}
    />

    <Input
      type="number"
      register={register("limiteJugadoresCambio", { value: deporte.limiteJugadoresCambio })}
      label={t('editSportForm.changeLimit')}
      placeholder={t('editSportForm.exampleChangeLimit')}
    />

    <Select
      label={t('editSportForm.sportType')}
      placeholder={t('editSportForm.exampleSportType')}
      setValue={setValue}
      valueLabel={"id_tipoDeporte"}
      opciones={tiposDeportes}
      id_valorPorDefecto={idTipoDeporte}
    />

    <Button disabled={editarLoading}>
      <Skeleton loading={editarLoading} fallback={<Loader />}>
        {t('editSportForm.editSportButton')}
      </Skeleton>
    </Button>
  </CoordinacionForm>
</CoordinacionLayout>
    )
}



export default DeporteEditar;