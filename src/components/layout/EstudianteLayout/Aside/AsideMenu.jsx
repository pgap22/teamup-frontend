import { useSession } from "src/hooks/useSession";
import AsideLinks from "./AsideLinks";
import Button from "src/components/form/Button";
import { BiLogOut } from "react-icons/bi";
import ButtonTranslate from "src/components/translate/ButtonTranslate";
import { useTranlate } from "src/hooks/useTranslation";
const AsideMenu = ({ links }) => {
  return (
    <aside className="relative flex-col hidden w-full gap-5 p-4 overflow-x-hidden bg-white rounded-md lg:w-full md:flex md:w-20">
      <AsideLinks links={links} />
      <Bottom />
      <ButtonTranslate w="w-full" bg={"primary"} />
    </aside>
  );
};

const Bottom = () => {
  const { logout } = useSession();
  const { t } = useTranlate();
  return (
    <>
      <Button onClick={logout} color={"rojo"}>
        <BiLogOut size={35} />
        <p className="text-xl md:hidden lg:block">
          {t("default:cerrarSesion")}
        </p>
      </Button>
    </>
  );
};

export default AsideMenu;
