import Nav from "./MenuTop/Nav";
import Main from "./Main";

import FondoColor from "../../ui/FondoColor";
import { AnimatePresence } from "framer-motion";

import NavMobile from "./Mobile/NavMobile";
import AsideMobile from "./Mobile/AsideMobile";

import { useMenu } from "src/store/useMenu";
import { useEffect } from "react";

import { AiOutlineHome } from "react-icons/ai";
import { RiTeamLine } from "react-icons/ri";
import { MdSportsSoccer } from "react-icons/md";
import { AiOutlinePullRequest } from "react-icons/ai";

const links = [
  {
    nombre: "Inicio",
    ruta: "/estudiante",
    principal: true,
    icon: AiOutlineHome,
  },

  {
    nombre: "Equipo",
    ruta: "/estudiante/equipos",
    icon: RiTeamLine,
  },
  {
    nombre: "Partidos",
    ruta: "/estudiante/partidos",
    icon: MdSportsSoccer,
  },
  {
    nombre: "Solicitudes",
    ruta: "/estudiante/solicitudes",
    icon: AiOutlinePullRequest,
  },
];

const EstudianteLayaout = ({
  children,
  title,
  textButton,
  onClickButton,
  RightAsideContent,
  RightAsideButton,
  RightAsideTitulo,
}) => {
  const { menu, toggleMenu } = useMenu();
  useEffect(() => {
    toggleMenu(false);
  }, []);
  return (
    <FondoColor color={"#f0f0f0"}>
      <div className="flex flex-col gap-5 md:mb-0 mb-14">
        <Nav
          RightAsideContent={RightAsideContent}
          RightAsideButton={RightAsideButton}
          RightAsideTitulo={RightAsideTitulo}
        />
        <Main
          RightAsideContent={RightAsideContent}
          links={links}
          textButton={textButton}
          onClickButton={onClickButton}
          title={title}
          RightAsideButton={RightAsideButton}
          RightAsideTitulo={RightAsideTitulo}
        >
          {children}
        </Main>

        <AnimatePresence>
          {menu && <AsideMobile links={links} />}
        </AnimatePresence>
        <AnimatePresence>
          <NavMobile links={links} />
        </AnimatePresence>
      </div>
    </FondoColor>
  );
};

export default EstudianteLayaout;
