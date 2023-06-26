import Option from "./Option";
import { motion } from "framer-motion";

const Options = ({ mostrar, opciones = [] }) => {
  const oculto = { height: 0 };
  const mostrado = { height: "auto" };

  return (
    <motion.div
      className="overflow-hidden"
      animate={mostrar ? mostrado : oculto}
    >
      <div className="bg-white border rounded-md flex flex-col p-2">
        {opciones.map((option) => (
          <Option {...option} />
        ))}
      </div>
    </motion.div>
  );
};

export default Options;
