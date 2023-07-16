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
import Caja from "src/components/ui/Cajas/Caja"
import { Link } from "react-router-dom"



const Crear = () => {
  const { deportes } = useFetch("deportes", obtenerDeportes, deportesSelect)
  const { register, setValue, handleSubmit, registroExitoso } = useFormulario(crearZonaDeJuego);

  if(registroExitoso) return <Exito />

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


const Exito = () => {
  return <CoordinacionLayout titulo={"Crear Zona de Juego"} center={true}>
    <Caja titulo={"Zona de juego Creada"}>
      <p>Se ha creado la zona de juego exitosamente</p>
      <Link className="text-primary underline" to={"/coordinacion/zonadejuego"}>
        Volver a zona de juego
      </Link>
    </Caja>
  </CoordinacionLayout>
}

export default Crear