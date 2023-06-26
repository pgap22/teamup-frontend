import SelectUI from "./SelectUI";
import { SelectValueProvider } from "./SelectContext";

const Select = (props) => {
  return (
    <SelectValueProvider>
      <SelectUI {...props} />
    </SelectValueProvider>
  );
};

export default Select;
