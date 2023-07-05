import { MdAdd } from "react-icons/md";
import Button from "../../form/Button";
import { Link } from "react-router-dom";

const TablaBotonAdd = ({ children, url = '' }) => {
  return (
    <Link to={url} className="w-full max-w-[250px]">
      <Button>
        {children} <MdAdd size={29} />
      </Button>
    </Link>
  );
};

export default TablaBotonAdd;
