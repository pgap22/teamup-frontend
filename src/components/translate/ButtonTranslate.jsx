import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useTranlate } from "src/hooks/useTranslation";

const SelectorButtons = ({ languaje, handleTranslation }) => {
  return (
    <div
      className="w-full m-1 text-center transition-all delay-100"
      onClick={() => {
        handleTranslation(languaje[0]);
      }}
    >
      {languaje[1].name}
    </div>
  );
};

const Selector = ({ show, handleTranslation, languajes }) => {
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
        className="absolute flex w-full bg-white rounded-md top-12"
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

const ButtonTranslate = () => {
  const { languaje, handleTranslation, languajes } = useTranlate();
  const [show, setShow] = useState(false);

  const languajesToTranslate = Object.entries(languajes).filter(
    (current) => current[0] !== languaje
  );

  return (
    <>
      <div
        onClick={() => {
          setShow(!show);
        }}
        className="relative grid w-full font-bold bg-white rounded-md cursor-pointer select-none place-items-center text-primary"
      >
        {languajes[languaje].name}
        <Selector
          handleTranslation={handleTranslation}
          show={show}
          languajes={languajesToTranslate}
        />
      </div>
    </>
  );
};

export default ButtonTranslate;
