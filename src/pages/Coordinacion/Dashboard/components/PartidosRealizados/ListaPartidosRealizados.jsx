import CajaEstadisticaSimple from "../Cajas/CajaEstadisticaSimple";

const ListaPartidosRealizados = ({ partidos }) => {
  return (
    <div className="flex flex-col gap-4">
      {partidos.map((partido) => (
        <CajaEstadisticaSimple titulo={partido.titulo} cantidad={partido.cantidad} />
      ))}
    </div>
  );
};

export default ListaPartidosRealizados;
