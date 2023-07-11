const Textarea = ({ label, placeholder, register, rows='',cols='' }) => {


  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="font-bold">{label}</label>
      <textarea {...register} rows={rows} cols={cols} className="outline-none bg-transparent w-full resize-none p-2 border grid grid-cols-[1fr_max-content] gap-4 items-center border-gray-200 rounded-md placeholder:font-medium" placeholder={placeholder}>

      </textarea>

    </div>
  );
};

export default Textarea;
