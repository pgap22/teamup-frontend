const BoxText = ({titulo, descripcion}) => {
  return (
    <div>
      <h2 className="font-bold text-2xl">
        {titulo}
      </h2>
      <p className="text-lg md:max-w-[450px]">
        {descripcion}
      </p>
    </div>
  );
};

export default BoxText;
