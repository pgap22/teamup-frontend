import FondoSombra from "../../../ui/FondoSombra";
import Logo from "../../../Logo/Logo";
import { motion } from "framer-motion";
import AsideLinks from "../Aside/AsideLinks";

const AsideMobile = ({ links }) => {
  const salirMenu = { transform: "translateX(100%)" };
  const mostrarMenu = { transform: "translateX(0)" };

  return (
    <>
      <FondoSombra />
      <motion.div
        initial={salirMenu}
        animate={mostrarMenu}
        exit={salirMenu}
        className="fixed top-0 bottom-0 right-0 z-30 p-4 bg-primary md:hidden"
      >
        <Logo width={168} />
        <div className="flex flex-col items-center gap-4 mt-4">
          <AsideLinks links={links} />
        </div>
      </motion.div>
    </>
  );
};

export default AsideMobile;
