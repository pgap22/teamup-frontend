import { MdOutlineCancel, MdOutlineImage } from "react-icons/md";
import { convertArrayToFileList, convertirTamaño } from "src/helper";
import { useImagenes } from "./useImagenes";
import { useEffect } from "react";

const ImageUI = ({ label, id = "image", setValue, name }) => {
  const { imagenes, setImagenes } = useImagenes();

  const agregarImagen = (e) => {
    setImagenes([...imagenes, ...e.target.files]);
  };

  const dropImagen = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setImagenes([...imagenes, ...e.dataTransfer.files]);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setValue(name, convertArrayToFileList(imagenes));
  }, [imagenes]);

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
      <input multiple onChange={agregarImagen} id={id} type="file" hidden />
      {imagenes &&
        imagenes.map((img, i) => (
          <ImageFile key={img.lastModified + "-" + i} img={img} index={i} />
        ))}
    </div>
  );
};

const ImageFile = ({ img, index }) => {
  const { imagenes, setImagenes } = useImagenes();

  const eliminarImagen = () => {
    setImagenes(imagenes.filter((_, imgID) => index !== imgID));
  };

  return (
    <div className="mt-4 grid grid-cols-[1fr_max-content]">
      <div className="flex gap-2 items-center">
        <MdOutlineImage size={22} />
        <p className="text-xs font-bold break-words break-all">{img.name}</p>
      </div>

      <div className="grid gap-2 grid-cols-[6ch_max-content] items-center relative">
        <p className="text-sm font-bold border-2 rounded-sm text-center p-0.5">
          {convertirTamaño(img.size)}
        </p>
        <MdOutlineCancel
          onClick={eliminarImagen}
          className="cursor-pointer"
          size={22}
        />
      </div>
    </div>
  );
};

export default ImageUI;
