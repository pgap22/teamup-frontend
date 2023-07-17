import { memo, useEffect, useState } from "react";
import { useImagenes } from "./useImagenes"
import clsx from "clsx";

const ImageSelector = ({ label, imagenes, setValue, valueLabel}) => {
  
    const {imagenes: imgSelecteds} = useImagenes();

    useEffect(()=>{
        setValue(valueLabel, imgSelecteds);
    },[imgSelecteds])

    return (
        <div className="flex flex-col gap-1 w-full">
            <p className='font-bold select-none'>{label}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {
                    imagenes.map((img) => <Image key={img.id} img={img} /> )
                }
            </div>
        </div>
    )
}

const Image = ({img}) => {
    
    const {imagenes, setImagenes} = useImagenes();

    const [isSelected, setSelected] = useState(false);

    const selectImage = ()=>{

        if(imagenes.some((imagen)=> imagen == img.id)){
            setImagenes(imagenes.filter((imagen)=> imagen !== img.id))
            return
        }
        
        setImagenes([...imagenes, img.id])
    }

    useEffect(()=>{
        setSelected(imagenes.some((imagen)=> imagen == img.id))
    },[imagenes])


    return (
        <div onClick={selectImage} className={clsx(
            "before:absolute before:top-0 select-none before:left-0 before:right-0 before:bottom-0 before:bg-black relative before:rounded-md before:bg-opacity-0 before:transition-all cursor-pointer before:hover:bg-opacity-50 ",
            isSelected && "before:!bg-opacity-50 before:bg-red-700"
        )}>
            <img className="rounded-md" src={import.meta.env.VITE_URL + img.imagen_url} />
        </div>
    )
}

export default memo(ImageSelector)