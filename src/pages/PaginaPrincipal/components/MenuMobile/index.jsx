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
      <div className="absolute top-0 z-30 w-full p-2 md:hidden">
        <div className="flex flex-col gap-8 p-4 bg-white rounded-md">
          <LogoCancelButton />
          <MenuLinks />
        </div>
      </div>
    </motion.div>
  );
};

export default MenuMobile;
