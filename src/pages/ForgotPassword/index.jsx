import FormPage from "src/components/layout/FormPage";
import FormImagen from "src/components/ui/FormImagen";
import Form from "./components/Form";

const ForgotPassword = () => {
  return (
    <FormPage>
      <FormImagen src={"/login.jpg"} />
      <Form />
    </FormPage>
  );
};

export default ForgotPassword;
