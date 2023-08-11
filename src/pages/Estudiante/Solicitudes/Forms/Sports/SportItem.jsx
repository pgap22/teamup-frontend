import { AiOutlineCheck } from "react-icons/ai";

const SportItem = ({ deporte, isSelected, handleClickSport }) => {
  const { nombre, id } = deporte;

  const handleClick = () => {
    handleClickSport(id);
  };

  const isSelectedStyles = isSelected ? "!border-[#CBC7C7] " : " ";
  return (
    <div
      onClick={handleClick}
      className={`  place-items-center transition-all ease-in-out duration-200 cursor-pointer w-[250px] border-2 h-[150px] border-[#E0E0E0] bg-[#E0E0E0] relative grid rounded-md ${isSelectedStyles} overflow-hidden `}
    >
      <SelectIndicator isSelected={isSelected} />
      <p className="text-lg font-bold">{nombre}</p>
    </div>
  );
};

const SelectIndicator = ({ isSelected }) => (
  <div className="absolute right-2 top-2">
    {isSelected ? <SelectedCircle /> : <NoSelectedCircle />}
  </div>
);

const SelectedCircle = () => {
  return (
    <div className="bg-[#A0A0A0] p-1 rounded-full">
      <AiOutlineCheck color="#D8D8D8" size={15} />
    </div>
  );
};
const NoSelectedCircle = () => {
  return (
    <div className="border-[#A0A0A0] bg-transparent border-2 h-6 w-6 rounded-full"></div>
  );
};

export default SportItem;
