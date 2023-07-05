import { MdChevronLeft } from "react-icons/md";
import Options from "./Options";
import { useSelect } from "./useSelect";
import Placeholder from "./Placeholder";
import { useEffect } from "react";

const SelectUI = ({ label, placeholder, opciones = [], setValue = ()=>{},valueLabel }) => {
  const { value, menuOpciones, setMenuOpciones } = useSelect();

  const alternarMenuOpciones = () => {
    setMenuOpciones(!menuOpciones);
  };

  useEffect(()=>{
    setValue(valueLabel, value.value)
  },[value])

  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="font-bold">{label}</label>
      <div
        onClick={alternarMenuOpciones}
        className="p-2 cursor-pointer w-full border grid grid-cols-[1fr_max-content] gap-4 items-center border-gray-200 rounded-md placeholder:font-medium"
      >
        {value.value ? value.label : <Placeholder text={placeholder} />}
        <MdChevronLeft className="-rotate-90" size={28} />
      </div>
      <div className="relative">
        <Options mostrar={menuOpciones} opciones={opciones} />
      </div>
    </div>
  );
};

export default SelectUI;
