import { Link } from "react-router-dom";

const Box = ({ equipo }) => {
  const { id, avatar_url, nombre } = equipo;
  return (
    <Link
      to={`/estudiante/equipos/datos/${id}`}
      className="w-56 h-36 border-2 border-[#CECECE] rounded-md p-3 grid grid-rows-auto place-items-center"
    >
      <img
        src={import.meta.env.VITE_URL + avatar_url}
        alt="Preview"
        className="object-cover w-[68px] h-[68px]"
        style={{
          clipPath: "circle(50% at 50% 50%)", // Aplicar la máscara circular
        }}
      />
      <p className="mx-auto font-bold text-xl text-[#747474] truncate">
        {nombre}
      </p>
    </Link>
  );
};

export default Box;
