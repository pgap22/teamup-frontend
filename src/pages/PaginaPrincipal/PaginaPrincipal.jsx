import Header from "./components/Header";
import Hero from "./components/Hero";
import MenuMobile from "./components/MenuMobile";
import { useMenu } from "../../store/useMenu";
import { AnimatePresence } from "framer-motion";

import Cta from "./components/Cta";
import SportBoxes from "./components/Cajas/SportBoxes";
import { useEffect } from "react";
import { PageLoader } from "src/components/ui/PageLoader";

const PaginaPrincipal = () => {
  const { menu, toggleMenu } = useMenu((state) => state);

  useEffect(() => {
    toggleMenu(false);
  }, []);

  return (
    <>
      <div className="flex justify-center w-full p-4 text-white bg-primary md:p-8">
        <div className="max-w-[1280px]  w-full">
          <Header />
          <Hero />
        </div>
      </div>

      <SportBoxes />

      <Cta />

      <AnimatePresence>{menu && <MenuMobile />}</AnimatePresence>
    </>
  );
};

export default PaginaPrincipal;
