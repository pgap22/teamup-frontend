import clsx from "clsx";
import FondoColor from "../../ui/FondoColor";
import {useMediaQuery} from "@uidotdev/usehooks"
const FormPage = ({ children, reverse = false }) => {

  const blanco = useMediaQuery('(min-width: 768px)')

  return (
    <FondoColor color={blanco ? 'white' : "#EDEDED"}>
      <div className={clsx(
        "md:grid md:grid-cols-2 min-h-screen",
        reverse ? "xl:grid-cols-[0.6fr_1fr]" : "xl:grid-cols-[1fr_0.6fr]"
      )}>
        {children[0]}
        {children[1]}
      </div>
    </FondoColor>
  );
};

export default FormPage;
