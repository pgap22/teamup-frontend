import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import PaginaActual from "./PaginaActual";
import { useTranlate } from "src/hooks/useTranslation";
import { useState } from "react";

const Animador = () => {
  const location = useLocation();
  const { cambiarPaginaDiccionario } = useTranlate()
  const initialAnimation = { opacity: 0 };
  const animateAnimation = { opacity: 1 };
  const exitAnimation = { opacity: 0 };
  const transitionProps = { duration: 0.4 };

  const terminarAnimacion = ()=>{
    cambiarPaginaDiccionario();
  }

  return (
    <AnimatePresence onExitComplete={terminarAnimacion} mode="wait">
      <motion.div
        key={location.pathname}
        initial={initialAnimation}
        animate={animateAnimation}
        exit={exitAnimation}
        transition={transitionProps}
        style={{ position: "absolute", width: "100%" }}
      >
        <PaginaActual />
      </motion.div>
    </AnimatePresence>
  );
};

export default Animador;
