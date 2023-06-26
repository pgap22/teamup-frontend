import { useSelect } from "./useSelect";

const Option = ({value, label }) => {
  const {setValue, setMenuOpciones} = useSelect();

  const cambiarValor = ()=>{
    setValue({
        value,
        label
    })
    setMenuOpciones()
  }

  return (
    <div 
        onClick={cambiarValor}
        className="p-2 hover:bg-gray-200 text-slate-600 font-medium rounded cursor-pointer">
      {label}
    </div>
  );
};

export default Option;
