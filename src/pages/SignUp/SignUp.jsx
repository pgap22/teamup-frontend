import FormPage from "../../components/layout/FormPage";
import FormImagen from "../../components/ui/FormImagen";
import Form from "./components/Form";

const SignUp = () => {
  return (
    <FormPage>
      <FormImagen src={'/login.jpg'} />
      <Form />
    </FormPage>
  );
};

export default SignUp;
