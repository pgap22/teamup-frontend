import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import PaginaActual from "./PaginaActual";

const Animador = () => {
  const location = useLocation();

  const initialAnimation = { opacity: 0 };
  const animateAnimation = { opacity: 1 };
  const exitAnimation = { opacity: 0 };
  const transitionProps = { duration: 0.6 };

  // const pageVariants = {
  //   initial: {
  //     opacity: 0,
  //     y: 50,
  //   },
  //   animate: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.5,
  //       ease: "easeInOut",
  //     },
  //   },
  //   exit: {
  //     opacity: 0,
  //     y: -50,
  //     transition: {
  //       duration: 0.5,
  //       ease: "easeInOut",
  //     },
  //   },
  // };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={initialAnimation}
        animate={animateAnimation}
        exit={exitAnimation}
        transition={transitionProps}
        // initial="initial"
        // animate="animate"
        // exit="exit"
        // variants={pageVariants}
        // transition={{ duration: 0.3 }}
        style={{ position: "absolute", width: "100%" }}
      >
        <PaginaActual />
      </motion.div>
    </AnimatePresence>
  );
};

export default Animador;
