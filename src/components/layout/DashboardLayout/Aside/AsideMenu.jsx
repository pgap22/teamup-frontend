import { useSession } from "src/hooks/useSession";

import Logo from "../../../Logo/Logo";
import AsideLinks from "./AsideLinks";
import Button from "../../../form/Button.jsx";

const AsideMenu = ({ links = [], bottom }) => {
  return (
    <div className="bg-primary p-4 min-h-screen hidden md:block">
      <div className="mt-4 flex flex-col gap-4 items-center">
        <Logo width={168} />
        <AsideLinks links={links} />
        <Bottom />
        {bottom}
      </div>
    </div>
  );
};
export default AsideMenu;

const Bottom = () => {
  const { logout } = useSession();

  return (
    <>
      <Button onClick={logout} color={"rojo"}>
        Cerrar Sesion
      </Button>
    </>
  );
};
