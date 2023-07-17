import Logo from "../../../Logo/Logo";
import UserConfig from "./Components/UserConfig";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between w-full px-5 max-h-20 h-28 bg-primary">
      <Logo width={168} />
      <UserConfig />
    </nav>
  );
};

export default Nav;
