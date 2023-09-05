const EquipoCard = ({ equipo, resultado, esLocal = false }) => {
  return (
    <div className="flex flex-col items-center gap-2 p-4 border rounded-md shadow-md">
      <img
        className="w-12 rounded-full aspect-square"
        src={equipo.avatar_url}
        alt=""
      />
      <h2 className="font-bold text-[#747474]">{equipo.nombre}</h2>
      {resultado && resultado.confirmado && (
        <p className="text-xl font-bold text-center">
          {esLocal ? resultado.resultado_local : resultado.resultado_visitante}
        </p>
      )}
    </div>
  );
};

export default EquipoCard;
