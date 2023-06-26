import clsx from "clsx";
import { NavLink, useRoutes } from "react-router-dom";

const AsideButton = ({ children, ruta }) => {
  
  return (
    <NavLink
      to={ruta}
      end
      className={({ isActive }) =>
        clsx(
          "w-full font-bold text-center text-white p-1 rounded-md",
          isActive && "!text-black !bg-white"
        )
      }
    >
      {children}
    </NavLink>
  );
};

export default AsideButton;
