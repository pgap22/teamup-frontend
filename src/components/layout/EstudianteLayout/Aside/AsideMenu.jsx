import { useSession } from "src/hooks/useSession";
import AsideLinks from "./AsideLinks";
import Button from "src/components/form/Button";
import { BiLogOut } from "react-icons/bi";
const AsideMenu = ({ links }) => {
  return (
    <aside className="relative flex-col hidden w-full gap-5 p-4 overflow-x-hidden bg-white rounded-md lg:w-full md:flex md:w-20">
      <AsideLinks links={links} />
      <Bottom />
    </aside>
  );
};

const Bottom = () => {
  const { logout } = useSession();
  return (
    <>
      <Button onClick={logout} color={"rojo"}>
        <BiLogOut size={35} />
        <p className="text-xl md:hidden lg:block">Cerrar sesion</p>
      </Button>
    </>
  );
};

export default AsideMenu;
