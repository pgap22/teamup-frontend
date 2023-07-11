import CajaEstadisticaSimple from "../Cajas/CajaEstadisticaSimple";

const ListaPartidosRealizados = ({ partidos }) => {
  return (
    <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
      {partidos.map((partido) => (
        <CajaEstadisticaSimple key={partido.titulo+"-stat"} titulo={partido.titulo} cantidad={partido.cantidad} />
      ))}
    </div>
  );
};

export default ListaPartidosRealizados;
