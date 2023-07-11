import CoordinacionLayout from "../../../components/layout/CoordinacionLayout"
import Tabla from "../../../components/ui/Tabla"

const Maestro = () => {
  const maestros = [
    {
      nombre: "Pachaca",
      correo: "pachaca@cdb.edu.sv",
      "nivel academico": "Bachillerato"
    }
  ]
  
  return (
    <CoordinacionLayout titulo={"Maestros"}>
        <Tabla 
          titulo={"Lista de Maestros"}
          cantidadTexto={"1 Maestro"}
          botonTexto={"Nuevo Maestro"}
          listaDatos={maestros}
        />
    </CoordinacionLayout>
  )
}

export default Maestro