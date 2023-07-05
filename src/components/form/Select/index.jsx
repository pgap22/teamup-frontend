import SelectUI from "./SelectUI";
import { SelectValueProvider } from "./SelectContext";

const Select = ({ label, placeholder, opciones = [], setValue,valueLabel }) => {
  const props = { label, placeholder, opciones, setValue,valueLabel };
  return (
    <SelectValueProvider>
      <SelectUI {...props} />
    </SelectValueProvider>
  );
};

export default Select;
