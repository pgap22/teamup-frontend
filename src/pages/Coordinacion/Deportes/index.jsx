import CoordinacionLayout from "../../../components/layout/CoordinacionLayout";
import Tabla from "../../../components/ui/Tabla";

const Deportes = () => {
  const deportes = [
    {
      "Nombre del deporte": "Futbol",
      "Jugadores": 11,
      "Reservas": 2,
    },
    {
      "Nombre del deporte": "Futbol",
      "Jugadores": 11,
      "Reservas": 2,
    },
    {
      "Nombre del deporte": "Futbol",
      "Jugadores": 11,
      "Reservas": 2,
    },
    {
      "Nombre del deporte": "Futbol",
      "Jugadores": 11,
      "Reservas": 2,
    },
  ];

  return (
    <CoordinacionLayout titulo={"Deportes"}>
      <Tabla 
        titulo={"Lista Deportes"}
        cantidadTexto={"4 Deportes"}
        botonTexto={"Nuevo Deporte"}
        listaDatos={deportes}
        botonUrl={"/coordinacion/deportes/crear"}
      />
    </CoordinacionLayout>
  );
};


export default Deportes;
