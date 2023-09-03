import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../../../components/Logo/Logo";
import { useMenu } from "../../../store/useMenu";
import Button from "../../../components/form/Button";
import { Link } from "react-router-dom";
import ButtonTranslate from "src/components/translate/ButtonTranslate";
import { useTranlate } from "src/hooks/useTranslation";

const Header = () => {
  const { t } = useTranlate(); // Inicializar useTranslation
  const { toggleMenu } = useMenu((state) => state);

  return (
    <header>
      <div className="flex justify-between md:grid md:grid-cols-2">
        <Logo />

        <RxHamburgerMenu className="md:hidden" onClick={toggleMenu} size={28} />

        <div className="hidden w-full max-w-md gap-4 md:flex justify-self-end">
          <Link to={"/login/"} className="w-full">
            <Button color={"blanco"} textColor={"azul"}>
              {t("iniciarSesion")}
            </Button>
          </Link>

          <Link to={"/signup/"} className="w-full">
            <Button border={"blanco"}>{t("registrate")}</Button>
          </Link>
          <ButtonTranslate />
        </div>
      </div>
    </header>
  );
};

export default Header;
