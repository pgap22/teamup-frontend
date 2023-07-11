import { Link } from "react-router-dom";

const AccionRapidoBoton = ({children,url=""}) => {
  return (
    <Link to={"/coordinacion/"+url} className="bg-[#BEC9FF] text-primary font-bold p-2 px-5 min-w-max text-sm rounded-md">
      {children}
    </Link>
  );
};

export default AccionRapidoBoton;
