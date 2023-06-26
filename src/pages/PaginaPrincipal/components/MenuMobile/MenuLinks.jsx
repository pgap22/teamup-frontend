import MenuButton from "./MenuButton";

const MenuLinks = () => {
  return (
    <div className="flex flex-col gap-4">
      <MenuButton to="/login">Iniciar Sesión</MenuButton>
      <MenuButton to="/signup" color="blanco" border="negro">
        Registrate
      </MenuButton>
    </div>
  );
};

export default MenuLinks;
