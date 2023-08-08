import Tabla from "src/components/ui/Tabla"
import CoordinacionLayout from "../../../components/layout/CoordinacionLayout"
import Button from "src/components/form/Button"

const Solicitudes = () => {
  const solicitudes = [
    {
    "ID": 1,
    "Zona De Juego": "Cancha Techada",
    "Solicitante": "Juanito",
    "Maestro": "Pachaca",
    "Hora": "12:00PM"
  },
    {
    "ID": 1,
    "Zona De Juego": "Cancha Techada",
    "Solicitante": "Juanito",
    "Maestro": "Pachaca",
    "Hora": "12:00PM"
  },
    {
    "ID": 1,
    "Zona De Juego": "Cancha Techada",
    "Solicitante": "Juanito",
    "Maestro": "Pachaca",
    "Hora": "12:00PM"
  },
]
  return (
    <CoordinacionLayout titulo={"Solicitudes"}>
        <Tabla 
        titulo={"Solicitudes Pendientes"}
        cantidadTexto={"1 Solicitud"}
        listaDatos={solicitudes}
        boton={false}
        acciones={false}
        accionesCustomLabel={" "}
        AccionesCustomElement={() => <Button>Mas Informacion</Button>}
        />
    </CoordinacionLayout>
  )
}

export default Solicitudes