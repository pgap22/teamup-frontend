import { useConstantes } from "../../useConstantes";
import { useMultiStepForm } from "../../useMultiStepForm";
import Item from "./Item";

const ProgresiverIndicator = ({ FormsData }) => {
  const { form, setForm } = useMultiStepForm();
  const { currentIndex, currentFormValid } = useConstantes({
    form,
  });

  const handleClickRegresarProgresiveIndicator = (i) => {
    return () => {
      const idForm = i - 1 < 0 ? 0 : i - 1;
      const formClickedMinus = form.identificadores[idForm].name;

      const data = {
        ...form,
        currentFormIndex: i,
        previousIndex: form.currentFormIndex,
      };

      if (i > currentIndex) {
        if (
          (i === currentIndex + 1 && currentFormValid) ||
          form[formClickedMinus].valid
        ) {
          setForm(data);
        }
      }

      if (i < currentIndex) {
        setForm(data);
      }
    };
  };

  return (
    <div className="flex gap-2">
      {FormsData?.map((_, i) => {
        return (
          <Item
            key={i}
            handleClick={handleClickRegresarProgresiveIndicator(i)}
            isActive={i === form.currentFormIndex}
          />
        );
      })}
    </div>
  );
};

export default ProgresiverIndicator;
