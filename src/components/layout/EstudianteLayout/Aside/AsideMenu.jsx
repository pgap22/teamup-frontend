import { useSession } from "src/hooks/useSession";
import AsideLinks from "./AsideLinks";
import Button from "src/components/form/Button";
const AsideMenu = ({ links }) => {
  return (
    <aside className="relative flex-col hidden w-full min-h-screen gap-5 p-4 bg-white rounded-md md:flex">
      <AsideLinks links={links} />
      <Bottom />
    </aside>
  );
};

const Bottom = () => {
  const { logout } = useSession();

  return (
    <>
      <Button onClick={logout} color={"rojo"}>Cerrar Sesion</Button>
    </>
  );
};

export default AsideMenu;
