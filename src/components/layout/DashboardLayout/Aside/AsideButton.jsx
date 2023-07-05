import clsx from "clsx";
import { NavLink, useLocation } from "react-router-dom";

const AsideButton = ({ children, ruta, principal = null }) => {
  const principalRuta = ruta==useLocation().pathname;
  return (
    <NavLink
      to={ruta}
      className={({ isActive }) =>
        clsx(
          "w-full font-bold text-center text-white p-1 rounded-md",
          (!principal & isActive) && "!text-black !bg-white",
          (principal & principalRuta) && "!text-black !bg-white"
        )
      }
    >
      {children}
    </NavLink>
  );
};

export default AsideButton;
