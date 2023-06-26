import { motion } from "framer-motion";
import FondoSombra from "../../../../components/ui/FondoSombra";
import LogoCancelButton from "./LogoCancelButton";
import MenuLinks from "./MenuLinks";

const MenuMobile = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <FondoSombra />
      <div className="absolute w-full top-0 p-2 z-30">
        <div className="bg-white p-4 rounded-md flex flex-col gap-8">
          <LogoCancelButton />
          <MenuLinks />
        </div>
      </div>
    </motion.div>
  );
};

export default MenuMobile;
