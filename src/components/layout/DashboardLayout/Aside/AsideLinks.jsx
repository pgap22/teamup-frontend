import AsideButton from "./AsideButton";

const AsideLinks = ({ links = [] }) => {
    return links.map((link) => (
      <AsideButton key={"aside-"+link.nombre} ruta={link.ruta} principal={link.principal}>{link.nombre}</AsideButton>
    ));
  };
  
export default AsideLinks