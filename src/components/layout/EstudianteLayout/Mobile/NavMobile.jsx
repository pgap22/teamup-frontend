import { CgMoreO } from "react-icons/cg";
import { useMenu } from "src/store/useMenu";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const NavMobile = ({ links = [] }) => {
  const { toggleMenu } = useMenu();

  const mostrarMenu = () => {
    toggleMenu();
  };

  return (
    <div className="fixed flex justify-center bottom-2 left-4 right-4 md:hidden ">
      <div className="bg-[#201E7C] grid grid-cols-5 max-w-sm p-2 rounded-full justify-items-center w-full text-white">
        <MobileLinks links={links} />
        <div onClick={mostrarMenu} className="col-start-5 p-1 rounded-md">
          <CgMoreO size={28} />
        </div>
      </div>
    </div>
  );
};

const MobileLinks = ({ links }) => {
  return links.map((link) => {
    if (link.icon)
      return <MobileButton key={link.ruta} Icon={link.icon} ruta={link.ruta} />;
  });
};

const MobileButton = ({ ruta, Icon }) => {
  return (
    <NavLink
      end
      to={ruta}
      className={({ isActive }) =>
        clsx("p-1 rounded-md", isActive && "bg-[#302dd2]")
      }
    >
      <Icon size={28} />
    </NavLink>
  );
};

export default NavMobile;
