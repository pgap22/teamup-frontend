import AsideButton from "./AsideButton";

const AsideLinks = ({ links = [] }) => {
    return links.map((link) => (
      <AsideButton ruta={link.ruta} principal={link.principal}>{link.nombre}</AsideButton>
    ));
  };
  
export default AsideLinks