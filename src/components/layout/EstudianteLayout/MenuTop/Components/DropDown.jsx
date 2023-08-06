import React from "react";
import FondoSombra from "src/components/ui/FondoSombra";
import { motion } from "framer-motion";

const DropDownNav = ({
  RightAsideContent,
  RightAsideButton,
  RightAsideTitulo,
  dropdownRef,
}) => {
  const salirMenu = { transform: "translateX(100%)" };
  const mostrarMenu = { transform: "translateX(0)" };

  return (
    <>
      <FondoSombra />
      <motion.div
        initial={salirMenu}
        animate={mostrarMenu}
        exit={salirMenu}
        className="fixed top-0 bottom-0 right-0 z-30 p-4 bg-white rounded-l-md md:hidden"
        ref={dropdownRef}
      >
        <div className="flex flex-col items-center gap-4 mt-4">
          <div className="flex justify-between w-full ">
            <h1 className="text-2xl font-bold">{RightAsideTitulo}</h1>
            {RightAsideButton}
          </div>

          <div className="flex flex-col gap-5">{RightAsideContent}</div>
        </div>
      </motion.div>
    </>
  );
};

export default DropDownNav;
