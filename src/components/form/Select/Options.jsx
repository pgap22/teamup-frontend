import Option from "./Option";
import { AnimatePresence, motion } from "framer-motion";

const Options = ({ mostrar, opciones = [] }) => {
  const oculto = { opacity: 0 };
  const mostrado = { opacity: 1 };

  return (
    <AnimatePresence>
      {mostrar && (
        <motion.div
          className="overflow-hidden absolute left-0 right-0 top-0"
          initial={oculto}
          animate={mostrado}
          exit={oculto}
          transition={{ duration: 0.1 }}
        >
          <div className="bg-white border rounded-md flex flex-col p-2">
            {opciones.map((option) => (
              <Option key={option.label+"-option"} {...option} />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Options;
