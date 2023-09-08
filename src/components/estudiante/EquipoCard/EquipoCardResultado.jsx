import Input from "src/components/form/Input";
import { useTranlate } from "src/hooks/useTranslation";

const EquipoCardResultado = ({ equipo, register }) => {
  const { t } = useTranlate();
  return (
    <div
      className={
        "border space-y-2 items-center gap-2 transition-all shadow p-4 rounded-md"
      }
    >
      <div className="flex items-center gap-2">
        <img
          className="w-12 rounded-full aspect-square"
          src={new URL(equipo.avatar_url).toString()}
          alt=""
        />
        <p className="font-bold">{equipo.nombre}</p>
      </div>
      <Input register={register} type="number" label={t("Resultado")} />
    </div>
  );
};

export default EquipoCardResultado;
