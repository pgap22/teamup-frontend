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
import Skeleton from "src/components/ui/Skeleton";
import Loader from "src/components/ui/Loader";
import { useTranlate } from "src/hooks/useTranslation";

const DeporteCrear = () => {
  const {t} = useTranlate();
  const { register, setValue, handleSubmit, registroExitoso, isLoading } = useFormulario(crearDeporte);

  const { tiposDeportes } = useFetch("tiposDeportes", obtenerTipoDeportes, tipoDeporteTransformar);

  if (registroExitoso) {
    return (
      <Exito
        titulo={t('createSport.title')}
        subtitulo={t('createSport.successMessage')}
        linkText={t('createSport.returnToSports')}
        url={"/coordinacion/deportes"}
      />
    );
  }
  
  return (
    <CoordinacionLayout titulo={t('createSport.createSport')} >
      <CoordinacionForm
        handleSubmit={handleSubmit}
        imagenUrl={"/deporte.jpg"}
        titulo={t('createSport.generalData')}
      >
        <Input
          register={register("nombre")}
          label={t('createSport.sportName')}
          placeholder={t('createSport.exampleSportName')} />
  
        <Textarea
          register={register("descripcion")}
          label={t('createSport.description')}
          placeholder={t('createSport.exampleDescription')} />
  
        <Input
          type="number"
          register={register("limiteJugadores")}
          label={t('createSport.playerLimit')}
          placeholder={t('createSport.examplePlayerLimit')} />
  
        <Input
          type="number"
          register={register("limiteJugadoresCambio")}
          label={t('createSport.changeLimit')}
          placeholder={t('createSport.exampleChangeLimit')} />
  
        <Select
          label={t('createSport.sportType')}
          placeholder={t('createSport.exampleSportType')}
          setValue={setValue}
          valueLabel={"id_tipoDeporte"}
          opciones={tiposDeportes}
        />
  
        <Button disabled={isLoading}>
          <Skeleton loading={isLoading} fallback={<Loader />}>
            {t('createSport.addSport')}
          </Skeleton>
        </Button>
      </CoordinacionForm>
    </CoordinacionLayout>
  );
};




export default DeporteCrear;
