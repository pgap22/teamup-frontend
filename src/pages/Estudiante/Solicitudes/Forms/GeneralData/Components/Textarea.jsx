const Textarea = ({ label, placeholder, setDescripcion, descripcion, rows = "", cols = "" }) => {
    return (
        <div className="flex flex-col items-center w-full gap-4">
            <label className="text-xl font-bold">{label}</label>
            <textarea
                onChange={(e) => {
                    setDescripcion(e.target.value)
                }}
                value={descripcion}
                rows={rows}
                cols={cols}
                className="outline-none bg-transparent w-full resize-none p-2 border grid grid-cols-[1fr_max-content] gap-4 items-center border-[#D8D8D8] rounded-md placeholder:font-medium"
                placeholder={placeholder}
            ></textarea>
        </div>
    );
};

export default Textarea