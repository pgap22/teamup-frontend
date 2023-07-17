import { useClickAway, useMediaQuery } from "@uidotdev/usehooks";
import { motion } from "framer-motion";
import {  useState } from "react";
import { MdChevronLeft, MdChevronRight, MdImage } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const MostrarCaruselImagen = ({ imagenes, cerrarGaleria }) => {
    const start_url = import.meta.env.VITE_URL
    const transition = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 }
    }


    const [indexImage, setImage] = useState(0);
    const tablet = useMediaQuery("(min-width: 768px)");
    const ref = useClickAway(cerrarGaleria)
    
    
    const nextImage = () => {
        const nextIndex = indexImage + 1;
        if (nextIndex > imagenes.length - 1) {
            setImage(0);
            return
        }
        setImage(nextIndex)
    }
    const previusImage = () => {
        const nextIndex = indexImage - 1;
        if (nextIndex < 0) {
            setImage(imagenes.length-1);
            return
        }
        setImage(nextIndex)
    }
    
  

    return (
        <motion.div {...transition} className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-30">
            <div ref={ref} className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-50">
                <div className="relative select-none">

                    <div onClick={previusImage} className="absolute cursor-pointer top-1/2 -translate-y-1/2 -left-4 z-50 bg-white p-2 rounded-full ">
                        <MdChevronLeft size={tablet ? 40 : 28} />
                    </div>

                    <img src={start_url + imagenes[indexImage].imagen_url} className="min-w-[300px] rounded-md max-h-screen" alt="" />

                    <div className="absolute bg-white rounded-md -mb-4 font-bold border p-2 bottom-0 left-1/2 -translate-x-1/2">
                        {indexImage + 1}/{imagenes.length}
                    </div>

                    <div onClick={cerrarGaleria} className="absolute p-2 bg-white rounded-full -top-2 -right-2">
                        <RxCross2 size={24} color="gray" />
                    </div>

                    <div onClick={nextImage} className="absolute cursor-pointer top-1/2 -translate-y-1/2 -right-4 z-50 bg-white p-2 rounded-full ">
                        <MdChevronRight size={tablet ? 40 : 28} />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
export default MostrarCaruselImagen
