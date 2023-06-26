import FondoColor from "../../ui/FondoColor";
import {useMediaQuery} from "@uidotdev/usehooks"
const FormPage = ({ children }) => {

  const blanco = useMediaQuery('(min-width: 768px)')

  return (
    <FondoColor color={blanco ? 'white' : "#EDEDED"}>
      <div className="md:grid md:grid-cols-2 min-h-screen">
        {children[0]}
        {children[1]}
      </div>
    </FondoColor>
  );
};

export default FormPage;
