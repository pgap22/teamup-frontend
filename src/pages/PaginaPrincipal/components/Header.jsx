import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../../../components/Logo/Logo";
import { useMenu } from "../../../store/useMenu";
import Button from "../../../components/form/Button";
import { Link } from "react-router-dom";

const Header = () => {
  const { toggleMenu } = useMenu((state) => state);

  return (
    <header>
      <div className="flex justify-between md:grid md:grid-cols-2">
        <Logo />

        <RxHamburgerMenu className="md:hidden" onClick={toggleMenu} size={28} />

        <div className="hidden md:flex w-full gap-4 max-w-xs justify-self-end">
          <Link to={"/login/"} className="w-full">
            <Button color={"blanco"} textColor={"azul"}>
              Iniciar Sesion
            </Button>
          </Link>

          <Link to={"/signup/"} className="w-full">
            <Button border={"blanco"}>Registrate</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
