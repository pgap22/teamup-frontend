import CoordinacionLayout from "src/components/layout/CoordinacionLayout"
import CoordinacionForm from "src/components/layout/CoordinacionForm"

import Input from "src/components/form/Input"
import Select from "src/components/form/Select"
import Button from "src/components/form/Button"

import { useFetch } from "src/hooks/useFetch"

import { crearZonaDeJuego, obtenerDeportes, obtenerDeportesCancha } from "src/api"

import { deportesSelect } from "src/helper/transformarDatos"
import ImageDrop from "src/components/form/ImageDrop"
import { useFormulario } from "src/hooks/useFormulario"
import Exito from "src/components/coordinacion/Exito"
import Skeleton from "src/components/ui/Skeleton"
import Loader from "src/components/ui/Loader"
import { useTranlate } from "src/hooks/useTranslation"



const Crear = () => {
  const { deportes } = useFetch("deportes", obtenerDeportesCancha, deportesSelect)
  const { register, setValue, handleSubmit, registroExitoso, isLoading } = useFormulario(crearZonaDeJuego);
  const {t} = useTranlate();
  if (registroExitoso) {
    return (
      <Exito
        titulo={t('zonadejuegoCreate.title')}
        subtitulo={t('zonadejuegoCreate.successMessage')}
        linkText={t('zonadejuegoCreate.returnToZonadejuego')}
        url="/coordinacion/zonadejuego"
      />
    );
  }
  
  return (
    <CoordinacionLayout
      titulo={t('zonadejuegoCreateForm.title')}
    >
      <CoordinacionForm handleSubmit={handleSubmit} titulo={t('zonadejuegoCreateForm.generalData')} imagenUrl="/cancha.jpg">
        <Input register={register("nombre")} label={t('zonadejuegoCreateForm.nameLabel')} placeholder={t('zonadejuegoCreateForm.namePlaceholder')} />
        <Select setValue={setValue} valueLabel="id_deporte" placeholder={t('zonadejuegoCreateForm.sportPlaceholder')} label={t('zonadejuegoCreateForm.sportLabel')} opciones={deportes} />
        <ImageDrop setValue={setValue} name="imagenes" label={t('zonadejuegoCreateForm.imagesLabel')} />
        <Button disabled={isLoading}>
          <Skeleton loading={isLoading} fallback={<Loader />}>
            {t('zonadejuegoCreateForm.createButton')}
          </Skeleton>
        </Button>
      </CoordinacionForm>
    </CoordinacionLayout>
  );
}



export default Crear