import { AiOutlinePlus } from "react-icons/ai";
import { useModal } from "../../../../store/useModal";
import { useTranlate } from "src/hooks/useTranslation";

const JoinTeam = () => {
  const { toggleModal } = useModal();
  const { t } = useTranlate();

  return (
    <div
      onClick={() => {
        toggleModal("CrearEquipo");
      }}
      className="w-56 h-36 border-2 border-[#CECECE] rounded-md p-3 flex items-center justify-around flex-col cursor-pointer"
    >
      <AiOutlinePlus size={54} color="#8B8B8B" />
      <p className="text-xl text-[#747474] font-bold">{t("crearEquipo")}</p>
    </div>
  );
};

export default JoinTeam;
