import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../../../components/Logo/Logo";
import { useMenu } from "../../../store/useMenu";
import Button from "../../../components/form/Button";
import { Link } from "react-router-dom";
import ButtonTranslate from "src/components/translate/ButtonTranslate";

const Header = () => {
  const { toggleMenu } = useMenu((state) => state);

  return (
    <header>
      <div className="flex justify-between md:grid md:grid-cols-2">
        <Logo />

        <RxHamburgerMenu className="md:hidden" onClick={toggleMenu} size={28} />

        <div className="hidden w-full max-w-md gap-4 md:flex justify-self-end">
          <Link to={"/login/"} className="w-full">
            <Button color={"blanco"} textColor={"azul"}>
              Iniciar Sesion
            </Button>
          </Link>

          <Link to={"/signup/"} className="w-full">
            <Button border={"blanco"}>Registrate</Button>
          </Link>
          <ButtonTranslate />
        </div>
      </div>
    </header>
  );
};

export default Header;
