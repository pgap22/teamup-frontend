import { Link } from "react-router-dom";
import Button from "src/components/form/Button";
import { motion } from "framer-motion";
import { useTranlate } from "src/hooks/useTranslation";

const Exito = ({ idPartido }) => {
  const { t } = useTranlate();

  const initialAnimation = { opacity: 0 };
  const animateAnimation = {
    opacity: 1,
  };
  const exitAnimation = { opacity: 0 };
  const transitionProps = { duration: 0.5 };

  return (
    <motion.div
      initial={initialAnimation}
      animate={animateAnimation}
      exit={exitAnimation}
      transition={transitionProps}
      style={{ width: "100%" }}
    >
      <div className="flex flex-col items-center w-full gap-10 p-10 text-center">
        <h1 className="text-[#565656] text-3xl font-bold">{t("ready")}</h1>
        <p className="text-[#565656] text-xl font-normal">
          <span className="font-bold text-orange-500">
            {t("teacherPending")}
          </span>
          , {t("waitTeacherAcceptance")}
        </p>
        <p className="text-[#565656] text-xl font-normal">
          {t("checkStatusByClickingButton")}
        </p>
        <Link
          to={`/estudiante/partidos/${idPartido}`}
          className={`text-white shadow-md w-full max-w-[400px] flex justify-center items-center gap-4 hover:scale-[1.02] transition-all p-2 font-bold border bg-primary rounded-full`}
        >
          {t("seeMyApplication")}
        </Link>
      </div>
    </motion.div>
  );
};

export default Exito;
