import { Suspense } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MenuMobile from "./components/MenuMobile";
import { useMenu } from "../../store/useMenu";
import { AnimatePresence } from "framer-motion";

import Cta from "./components/Cta";
import SportBoxes from "./components/Cajas/SportBoxes";
import { useEffect } from "react";
import Container from "../../components/ui/Container";

const PaginaPrincipal = () => {
  const { menu, toggleMenu } = useMenu((state) => state);

  useEffect(() => {
    toggleMenu(false);
  }, []);

  return (
    <Suspense fallback="Cargando...">
      <div className="bg-primary text-white p-4 w-full md:p-8 flex justify-center">
        <div className="max-w-[1280px]  w-full">
          <Header />
          <Hero />
        </div>
      </div>
      
      <SportBoxes />

      <Cta />

      <AnimatePresence>{menu && <MenuMobile />}</AnimatePresence>
    </Suspense>
  );
};

export default PaginaPrincipal;
