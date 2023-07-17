import Preferencias from "./Preferencias";
import Avatar from "./Avatar";
import Jugadores from "../Jugadores";
import Button from "../../../../../components/ui/Button";

const VistaLider = ({ equipo }) => {
  const { avatar_url } = equipo;
  const { usuarios } = equipo;
  return (
    <div className="flex flex-col gap-5 items-start">
      <div className="grid w-full h-auto justify-between grid-cols-2 p-5">
        <Preferencias />
        <Avatar avatar_url={avatar_url} />
      </div>
      <Jugadores jugadores={usuarios} />
      <Button
        textButton={"Eliminar equipo"}
        onClickButton={() => {}}
        px={50}
        bgColor="#DE2B2B"
        type={"button"}
      />
    </div>
  );
};

export default VistaLider;
