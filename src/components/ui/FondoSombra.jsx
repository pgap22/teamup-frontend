import { useMenu } from "../../store/useMenu";
import { motion } from "framer-motion";

const FondoSombra = () => {
  const { toggleMenu } = useMenu();

  const ocultarMenu = () => {
    toggleMenu(false);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={ocultarMenu}
      className="fixed md:hidden z-20 top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60"
    ></motion.div>
  );
};

export default FondoSombra;
