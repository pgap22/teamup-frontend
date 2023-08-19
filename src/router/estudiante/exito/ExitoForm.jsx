import { Link } from "react-router-dom";
import Button from "src/components/form/Button";

import { motion } from "framer-motion";

const ExitoForm = ({ idPartido }) => {
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
      <div className="w-full flex flex-col items-center text-center gap-10 p-10">
        <h1 className="text-[#565656] text-3xl font-bold">Ready !</h1>
        <p className="text-[#565656] text-xl font-normal">
          Now your request is on{" "}
          <span className=" text-orange-500 font-bold">RIVAL PENDING</span>,
          wait for the rival team to accept your match!
        </p>
        <p className="text-[#565656] text-xl font-normal">
          You can check the status of your request by clicking on the button
        </p>
        <Link
          to={`/estudiante/partidos/${idPartido}`}
          className={`text-white shadow-md w-full max-w-[400px] flex justify-center items-center gap-4 hover:scale-[1.02] transition-all p-2 font-bold border bg-primary rounded-full`}
        >
          See my application
        </Link>
      </div>
    </motion.div>
  );
};
export default ExitoForm;
