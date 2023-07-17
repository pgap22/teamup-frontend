import { Link } from "react-router-dom";

const Box = ({ equipo }) => {
  const { id, avatar_url, nombre } = equipo;
  return (
    <Link
      to={`/estudiante/equipos/${id}`}
      className="w-56 h-36 border-2 border-[#CECECE] rounded-md p-3 grid grid-rows-auto justify-around flex-col"
    >
      <div
        className="w-16 h-16 mx-auto overflow-hidden bg-center bg-cover rounded-full"
        style={{
          backgroundImage: `url(${
            import.meta.env.VITE_BASEAPIURL
          }${avatar_url})`,
        }}
      ></div>
      <p className="mx-auto font-bold text-xl text-[#747474] truncate">
        {nombre}
      </p>
    </Link>
  );
};

export default Box;
