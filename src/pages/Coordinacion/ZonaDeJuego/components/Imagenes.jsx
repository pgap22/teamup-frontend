import { AnimatePresence} from "framer-motion";
import { useState } from "react";
import { MdImage } from "react-icons/md";

import MostrarCaruselImagen from "./MostrarCaruselImagen";

const Imagenes = ({ imagenes }) => {
    const [openGaleria, setGaleria] = useState(false);

    const abrirGaleria = () => {
        setGaleria(true)
    }
    const cerrarGaleria = () => {
        setGaleria(false)
    }

    return (
        <>
            <div className="max-w-[7ch] flex justify-center">
                <MdImage onClick={abrirGaleria} className="transition-all cursor-pointer hover:opacity-50" size={38} />
            </div>
            <AnimatePresence>
                {
                    openGaleria && <MostrarCaruselImagen cerrarGaleria={cerrarGaleria} imagenes={imagenes} />
                }
            </AnimatePresence>
        </>
    );
}



export default Imagenes;