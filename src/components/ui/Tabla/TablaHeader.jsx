const TablaHeader = ({ titulo, cantidadTexto }) => {
  return (
    <div className="flex items-center gap-4">
      <h2 className="font-bold text-2xl">{titulo}</h2>
      <div className="bg-[#D9D9D9] max-w-fit px-4 p-1 rounded-full">
        <p className="text-gray-600 text-sm  font-bold">{cantidadTexto}</p>
      </div>
    </div>
  );
};

export default TablaHeader;
