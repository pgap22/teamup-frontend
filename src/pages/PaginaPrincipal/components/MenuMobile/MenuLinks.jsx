import { useTranlate } from "src/hooks/useTranslation";
import MenuButton from "./MenuButton";
import ButtonTranslate from "src/components/translate/ButtonTranslate";

const MenuLinks = () => {
  const { t } = useTranlate();
  return (
    <div className="flex flex-col gap-4">
      <MenuButton to="/login">{t("iniciarSesion")}</MenuButton>
      <MenuButton to="/signup" color="blanco" border="negro">
        {t("registrate")}
      </MenuButton>
      <ButtonTranslate w="w-full" bg={"primary"} />
    </div>
  );
};

export default MenuLinks;
