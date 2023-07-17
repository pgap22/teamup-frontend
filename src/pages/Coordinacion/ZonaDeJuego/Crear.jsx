import CoordinacionLayout from "src/components/layout/CoordinacionLayout"
import CoordinacionForm from "src/components/layout/CoordinacionForm"

import Input from "src/components/form/Input"
import Select from "src/components/form/Select"
import Button from "src/components/form/Button"

import { useFetch } from "src/hooks/useFetch"

import { crearZonaDeJuego, obtenerDeportes } from "src/api"

import { deportesSelect } from "src/helper/transformarDatos"
import ImageDrop from "src/components/form/ImageDrop"
import { useFormulario } from "src/hooks/useFormulario"
import Exito from "src/components/coordinacion/Exito"



const Crear = () => {
  const { deportes } = useFetch("deportes", obtenerDeportes, deportesSelect)
  const { register, setValue, handleSubmit, registroExitoso } = useFormulario(crearZonaDeJuego);

  if(registroExitoso) return(
    <Exito
        titulo={"Zona de Juego Creada"}
        subtitulo={"La zona de juego se ha creado exitosamente"}
        linkText={"Volver a zona de juego"}
        url={"/coordinacion/zonadejuego"}
  />
)


  return (
    <CoordinacionLayout
      titulo={"Crear Zona De Juego"}
    >
      <CoordinacionForm handleSubmit={handleSubmit} titulo={"Datos Generales"} imagenUrl={"/cancha.jpg"}>

        <Input register={register("nombre")} label={"Nombre"} placeholder={"Nombre del deporte"} />

        <Select setValue={setValue} valueLabel={"id_deporte"} placeholder={"Selecciona un deporte"} label={"Deporte"} opciones={deportes} />

        <ImageDrop setValue={setValue} name="imagenes" label={"Imagenes"} />

        <Button>Crear Zona De Juego</Button>
      </CoordinacionForm>
    </CoordinacionLayout>
  )
}



export default Crear