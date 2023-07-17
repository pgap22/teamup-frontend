import { NavLink } from "react-router-dom";
import clsx from "clsx";

const AsideButton = ({ children, ruta, principal, Icon = null }) => {
  return (
    <NavLink
      to={ruta}
      end={principal}
      className={({ isActive }) =>
        clsx(
          "w-full font-bold text-2xl rounded-md flex justify-start gap-4 items-center px-3 py-2",
          isActive ? "bg-primary text-white" : "bg-transparent text-[#A1A1A1]"
        )
      }
    >
      {Icon && <Icon size={35} />}
      {children}
    </NavLink>
  );
};

export default AsideButton;
