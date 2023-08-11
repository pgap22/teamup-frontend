import { BsChevronDown } from "react-icons/bs";

const InputDateBody = ({
  ref,
  value,
  title,
  inputProps,
  onChange,
  setIsOpen,
  isOpen,
  Icon,
  label,
}) => {
  return (
    <div ref={ref} className="flex flex-col items-center w-full gap-4">
      <p className="text-xl font-bold">{title}</p>
      <div className="relative w-full">
        <label className=" text-[#9A9A9A] font-bold text-xs pointer-events-none absolute left-14 top-2 flex ">
          {label}
        </label>
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <input
            {...inputProps}
            type="text"
            readOnly
            value={value}
            onChange={onChange}
            className="outline-none uppercase cursor-pointer border text-sm rounded-lg block font-bold w-full pl-12 placeholder:text-[#9A9A9A] placeholder:font-bold  pt-6 pb-1 leading-none focus:outline-none focus:shadow-outline placeholder:text-sm"
            placeholder="Select date"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 font-bold cursor-pointer">
            <BsChevronDown color={"black"} size={20} />
          </div>
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Icon color="#AEAEAE" size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputDateBody;
