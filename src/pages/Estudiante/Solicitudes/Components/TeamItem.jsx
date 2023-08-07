import Avatar from "src/components/estudiante/Avatar";

const EquipoItem = ({ equipo, isSelected, handleClickItem }) => {
  const { avatar_url, nombre, id } = equipo;
  const isSelectedStyles = isSelected ? "!border-primary" : "";
  return (
    <div
      onClick={() => {
        handleClickItem(id);
      }}
      className={`cursor-pointer max-w-[350px] flex items-center gap-5  mx-auto border-[#D8D8D8] border w-full py-3 px-5 rounded-lg ${isSelectedStyles} transition-all duration-200`}
    >
      <Avatar avatar_url={avatar_url} h={48} w={48} />
      <h1 className="text-xl font-medium truncate">{nombre}</h1>
    </div>
  );
};

export default EquipoItem;
