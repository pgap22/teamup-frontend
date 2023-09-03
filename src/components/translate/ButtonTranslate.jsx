import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useTranlate } from "src/hooks/useTranslation";

const SelectorButtons = ({ languaje, handleTranslation, bg_color }) => {
  const { t } = useTranlate();
  return (
    <div
      className="w-full m-1 text-center transition-all delay-100"
      onClick={() => {
        handleTranslation(languaje[0]);
      }}
    >
      <span className="hidden lg:block"> {t("default:" + languaje[0])} </span>
      <span className="uppercase lg:hidden"> {languaje[0]} </span>
    </div>
  );
};

const Selector = ({ show, handleTranslation, languajes, bg }) => {
  const initialAnimation = { opacity: 0 };
  const animateAnimation = { opacity: 1 };
  const exitAnimation = { opacity: 0 };
  const transitionProps = { duration: 0.3 };
  return (
    <AnimatePresence>
      <motion.div
        key={show}
        initial={initialAnimation}
        animate={animateAnimation}
        exit={exitAnimation}
        transition={transitionProps}
        className={`absolute flex w-full ${bg} rounded-md top-12`}
      >
        {show &&
          languajes.map((languaje, i) => {
            return (
              <SelectorButtons
                key={i + "-lenguaje"}
                languaje={languaje}
                handleTranslation={handleTranslation}
              />
            );
          })}
      </motion.div>
    </AnimatePresence>
  );
};

const ButtonTranslate = ({ bg = "white", w = "max-w-[150px]" }) => {
  const { t, languaje, handleTranslation, languajes } = useTranlate();
  const [show, setShow] = useState(false);

  const languajesToTranslate = Object.entries(languajes).filter(
    (current) => current[0] !== languaje
  );

  const bg_color = `bg-${bg}`;
  const text_color = bg == "white" ? "text-primary" : "text-white";

  return (
    <>
      <div
        onClick={() => {
          setShow(!show);
        }}
        className={`relative grid h-10 w-full font-bold rounded-md cursor-pointer select-none place-items-center ${bg_color} ${text_color} ${w}`}
      >
        <span className="hidden lg:block">
          {t("default:" + languajes[languaje].value)}
        </span>
        <span className="uppercase lg:hidden">{languajes[languaje].value}</span>

        <Selector
          bg={bg_color}
          handleTranslation={handleTranslation}
          show={show}
          languajes={languajesToTranslate}
        />
      </div>
    </>
  );
};

export default ButtonTranslate;
