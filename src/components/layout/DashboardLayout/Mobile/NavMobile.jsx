import {
  MdHouse,
  MdOutlineAssignmentLate,
  MdOutlineSportsEsports,
} from "react-icons/md";
import { CgMoreO } from "react-icons/cg";
import { useMenu } from "../../../../store/useMenu";
import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";

const NavMobile = ({links = []}) => {
  const { toggleMenu } = useMenu();

  const mostrarMenu = () => {
    toggleMenu();
  };

  return (
    <div className="fixed bottom-2 left-4 right-4 flex justify-center md:hidden ">
      <div className="bg-[#201E7C] grid grid-cols-4 max-w-sm p-2 rounded-full justify-items-center w-full text-white">
        <MobileLinks links={links} />
        <div onClick={mostrarMenu} className="p-1 rounded-md col-start-4">
          <CgMoreO size={28} />
        </div>
      </div>
    </div>
  );
};

const MobileLinks = ({links})=>{
  return (
    links.map((link)=> {
      if(link.icon) return <MobileButton Icon={link.icon} ruta={link.ruta} />
    })
  )
}

const MobileButton = ({ ruta, Icon }) => {
  return (
    <NavLink 
      end
      to={ruta} 
      className={({isActive})=> clsx(
      "p-1 rounded-md",
      isActive && "bg-[#302dd2]"
    )}>
      <Icon size={28} />
    </NavLink>
  );
};



export default NavMobile;
