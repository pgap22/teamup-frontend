import AsideMenu from "./Aside/AsideMenu";
import MainContent from "./Center/MainContent";

import { AiOutlineHome } from "react-icons/ai";
import { RiTeamLine } from "react-icons/ri";
import { MdSportsSoccer } from "react-icons/md";
import { AiOutlinePullRequest } from "react-icons/ai";

//Contenedor de todos los menus de la pagina principal
const Main = ({ children, title, textButton, onClickButton }) => {
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

  return (
    <main className="md:grid md:grid-cols-[minmax(0,250px)_minmax(0,1fr)] p-4 gap-4 relative">
      <AsideMenu links={links} />
      <MainContent
        textButton={textButton}
        onClickButton={onClickButton}
        title={title}
      >
        {children}
      </MainContent>
    </main>
  );
};

export default Main;
