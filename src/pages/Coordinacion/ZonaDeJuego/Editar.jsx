import CoordinacionForm from "src/components/layout/CoordinacionForm";
import CoordinacionLayout from "src/components/layout/CoordinacionLayout";

import Input from "src/components/form/Input";
import Select from "src/components/form/Select";
import ImageDrop from "src/components/form/ImageDrop";
import { useFormulario } from "src/hooks/useFormulario";
import {
  editarUnaZonaDeJuego,
  obtenerDeportes,
  obtenerDeportesCancha,
  obtenerUnaZonaDeJuego,
} from "src/api";
import { deportesSelect } from "src/helper/transformarDatos";
import { useFetch } from "src/hooks/useFetch";
import Button from "src/components/form/Button";
import { useParams } from "react-router-dom";
import { useFetchId } from "src/hooks/useFetchId";
import ImageSelector from "src/components/form/ImageSelector/";
import { useEffect } from "react";
import Exito from "src/components/coordinacion/Exito";
import { PageLoader } from "src/components/ui/PageLoader";
import Skeleton from "src/components/ui/Skeleton";
import Loader from "src/components/ui/Loader";

export default function Editar() {
  const { id } = useParams();

  const { isLoading, zonaDeJuego } = useFetchId(
    id,
    obtenerUnaZonaDeJuego,
    "zonaDeJuego"
  );

  const { deportes } = useFetch("deportes", obtenerDeportesCancha, deportesSelect);

  const { handleSubmit, register, setValue, registroExitoso, isLoading: editarLoading } =
    useFormulario(editarUnaZonaDeJuego);

  useEffect(() => {
    setValue("id", id);
  }, []);

  if (isLoading) return <PageLoader />;

  if (registroExitoso)
    return (
      <Exito
        titulo={"Zona de Juego Editada"}
        subtitulo={"La zona de juego se ha editado exitosamente"}
        linkText={"Volver a zona de juego"}
        url={"/coordinacion/zonadejuego"}
      />
    );

  const idDeporte = deportes.findIndex(deporte => deporte.value == zonaDeJuego.deporte.id);

  return (
    <CoordinacionLayout titulo={"Editar Zona De Juego"}>
      <CoordinacionForm
        handleSubmit={handleSubmit}
        titulo={"Datos Generales"}
        imagenUrl={"/basquet.jpg"}
      >
        <Input
          register={register("nombre", { value: zonaDeJuego.nombre })}
          label={"Nombre"}
          placeholder={"Nombre de la zona de juego"}
        />

        <Select
          setValue={setValue}
          id_valorPorDefecto={idDeporte}
          valueLabel={"id_tipoDeporte"}
          placeholder={"Selecciona un deporte"}
          label={"Deporte"}
          opciones={deportes}
        />

        <ImageSelector
          setValue={setValue}
          valueLabel={"imagen_eliminadas"}
          imagenes={zonaDeJuego.imagenes}
          label={"Editar Imagenes"}
        />

        <ImageDrop setValue={setValue} name="imagenes" label={"Imagenes"} />

        <Button disabled={editarLoading}>
          <Skeleton loading={editarLoading} fallback={<Loader />}>
            Editar Zona De Juego
          </Skeleton>
        </Button>
      </CoordinacionForm>
    </CoordinacionLayout>
  );
}
