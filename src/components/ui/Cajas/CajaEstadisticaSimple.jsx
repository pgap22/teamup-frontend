const CajaEstadisticaSimple = ({titulo, cantidad}) => {
  return (
    <div className="bg-gray-200 p-4 rounded-md flex items-center justify-between">
      <h3 className="font-bold text-gray-500 text-xl">{titulo}</h3>

      <div className="bg-gray-300 text-2xl font-bold w-10 aspect-square items-center flex justify-center rounded-md">
        {cantidad}
      </div>
    </div>
  );
};

export default CajaEstadisticaSimple;
