const CajaEstadistica = ({ Icon, titulo, cantidad }) => {
  return (
    <div className="bg-gray-200 p-2 px-4 rounded-md flex items-center gap-6
    md:grid md:grid-rows-2 md:gap-0
    ">
      <h3 className="font-bold text-gray-500 hidden md:block">{titulo}</h3>

      <div className="md:flex md:gap-8">        
        <div className="bg-gray-300 max-w-fit p-1 rounded">
          <Icon color="787878" size={36} />
        </div>
        <p className="font-bold text-3xl hidden md:block">{cantidad}</p>
      </div>

      <div className="md:hidden">
        <h3 className="font-bold text-gray-500">{titulo}</h3>
        <p className="font-bold text-3xl">{cantidad}</p>
      </div>
    </div>
  );
};

export default CajaEstadistica;
