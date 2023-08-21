import CajaEstadisticaSimple from "../../../../../components/ui/Cajas/CajaEstadisticaSimple";

const ListaPartidosRealizados = ({ partidos }) => {
  return (
    <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
      {partidos.map((partido) => (
        <CajaEstadisticaSimple key={partido.id+"-stat"} titulo={partido.nombre} cantidad={partido.partidos.length} />
      ))}
    </div>
  );
};

export default ListaPartidosRealizados;
