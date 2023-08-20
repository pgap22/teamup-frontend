import FormPage from "src/components/layout/FormPage";
import FormImagen from "src/components/ui/FormImagen";
import Form from "./components/Form";

const ResetPassword = () => {
  return (
    <FormPage reverse>
      <Form />
      <FormImagen src={"/login.jpg"} />
    </FormPage>
  );
};

export default ResetPassword;
