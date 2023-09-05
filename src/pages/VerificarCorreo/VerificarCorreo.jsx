import FormPage from "src/components/layout/FormPage";
import FormImagen from "src/components/ui/FormImagen";
import Form from "./Components/Form";

const VerificarCorreo = () => {
  return (
    <FormPage>
      <FormImagen src={"/login.jpg"} />
      <Form />
    </FormPage>
  );
};

export default VerificarCorreo;
