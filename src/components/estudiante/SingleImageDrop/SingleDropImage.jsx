import { useSingleImage } from "src/store/useSingleImage";
import { convertArrayToFileList } from "src/helper";
import { useEffect } from "react";

const SingleImageDrop = ({ label, id = "image" }) => {
  const { imagen, setImagen, setData } = useSingleImage();

  const agregarImagen = (e) => {
    setImagen([{ ...e.target.files }[0]]);
  };

  const dropImagen = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setImagen([{ ...e.dataTransfer.files }[0]]);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setData(convertArrayToFileList(imagen));
  }, [imagen]);

  return (
    <div className="flex flex-col gap-1 w-full">
      <p className="font-bold select-none">{label}</p>
      <label
        onDrop={dropImagen}
        onDragOver={dragOver}
        className="border-[3px] cursor-pointer hover:bg-gray-100 transition-all py-20 border-gray-300 rounded-lg border-dashed"
        htmlFor={id}
      >
        <p className="text-gray-400 mx-auto max-w-[200px] text-center">
          Haz click aqui o arrastra tus imagenes aqui !
        </p>
      </label>
      <input onChange={agregarImagen} id={id} type="file" hidden />
    </div>
  );
};

export default SingleImageDrop;
