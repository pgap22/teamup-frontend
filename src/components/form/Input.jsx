const Input = ({label, placeholder, Icon, type='text', register}) => {


  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="font-bold select-none">{label}</label>
      <div className="p-2 w-full border grid grid-cols-[1fr_max-content] gap-4 items-center border-gray-200 rounded-md placeholder:font-medium">
        <input {...register} className="outline-none bg-transparent w-full" type={type} placeholder={placeholder} />
        {Icon && <Icon  size={28} color="gray" />}
      </div>
    </div>
  );
};

export default Input;
