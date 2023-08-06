import { NavLink } from "react-router-dom";
import clsx from "clsx";

const AsideButton = ({ children, ruta, principal, Icon = null }) => {
  return (
    <NavLink
      to={ruta}
      end={principal}
      className={({ isActive }) =>
        clsx(
          "w-full rounded-md flex justify-start gap-4 items-center lg:px-3 lg:py-2 hover:scale-[1.02] transition-all p-2 font-bold ",
          isActive ? "bg-primary text-white" : "bg-transparent text-[#A1A1A1]"
        )
      }
    >
      {Icon && <Icon size={35} />}
      <p className="text-2xl font-bold md:hidden lg:block"> {children}</p>
    </NavLink>
  );
};

export default AsideButton;
