import { MdAdd } from "react-icons/md";
import Button from "../../form/Button";

const TablaBotonAdd = ({ children }) => {
  return (
    <div className="w-full max-w-[250px]">
      <Button>
        {children} <MdAdd size={29} />
      </Button>
    </div>
  );
};

export default TablaBotonAdd;
