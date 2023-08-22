import React from "react";
import FondoColor from "../../ui/FondoColor";
import { useMenu } from "../../../store/useMenu";
import { useEffect } from "react";
import AsideMobile from "./Mobile/AsideMobile";
import NavMobile from "./Mobile/NavMobile";
import { AnimatePresence } from "framer-motion";
import AsideMenu from "./Aside/AsideMenu";
import MainContent from "./MainContent";

const DashboardLayout = ({
  children,
  links,
  titulo = "Titulo",
  center = false,
  bottom,
}) => {
  const { menu, toggleMenu } = useMenu();

  useEffect(() => {
    toggleMenu(false);
  }, []);

  return (
    <>
      <FondoColor color={"#EDEDED"}>
        <div className="md:grid md:grid-cols-[minmax(0,250px)_minmax(0,1fr)]">
          <AsideMenu links={links} bottom={bottom} />
          <MainContent titulo={titulo} center={center}>
            {children}
          </MainContent>
        </div>
      </FondoColor>

      <AnimatePresence>{menu && <AsideMobile links={links} bottom={bottom} />}</AnimatePresence>
      <NavMobile bottom={bottom} links={links} />
    </>
  );
};

export default DashboardLayout;
