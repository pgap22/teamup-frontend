import FormPage from "../../components/layout/FormPage";
import FormImagen from "../../components/ui/FormImagen";
import Form from "./components/Form";

const Login = () => {
  return (
    <FormPage>
      <Form />
      <FormImagen src={"/login.jpg"} />
    </FormPage>
  );
};

export default Login;
