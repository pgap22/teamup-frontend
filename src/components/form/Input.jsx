import { useEffect, useRef, useState } from "react";

const Input = ({ label, placeholder, Icon, type = 'text', register, error = false }) => {
  const div = useRef();
  const [value, setValue] = useState();
  useEffect(() => {
    const input = div.current.children[0];

    input.addEventListener("change", (e)=>{
      setValue(e.target.value)
    });

    return ()=>{
      input.removeEventListener("change", function(){})
    }
  }, [])
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="font-bold select-none">{label}</label>
      <div ref={div} className={`${error && '!border-red-500'} ${value && 'border-blue-500'}  p-2 w-full border grid grid-cols-[1fr_max-content] focus-within:border-blue-500 transition-all gap-4 items-center border-gray-200 rounded-md placeholder:font-medium`}>
        <input {...register} className="outline-none bg-transparent group w-full" type={type} placeholder={placeholder} />
        {Icon && <Icon size={28} color="gray" />}
      </div>
    </div>
  );
};

export default Input;
