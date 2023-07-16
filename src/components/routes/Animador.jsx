import { useLocation } from "react-router-dom"
import PaginaActual from "./PaginaActual"
import { AnimatePresence, motion } from "framer-motion"

const Animador = () => {
    const location = useLocation()
    const pageTransition = {
        initial: { opacity: 0},
        animate: { opacity: 1},
        exit: { opacity: 0},
        transition: {duration: 0.3}
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                {...pageTransition}
            >
                <PaginaActual />
            </motion.div>
        </AnimatePresence>
    )
}

export default Animador