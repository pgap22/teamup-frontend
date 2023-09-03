import FormPage from "src/components/layout/FormPage";
import FormImagen from "src/components/ui/FormImagen";
import Form from "./components/Form";
import { useFetchId } from "src/hooks/useFetchId";
import { verificarTokenPassword } from "src/api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { PageLoader } from "src/components/ui/PageLoader";

const ResetPassword = () => {
  const {token} = useParams();
  const {isLoading, error} = useFetchId(token, verificarTokenPassword,"dataToken");  
  const navigate = useNavigate();
  
  useEffect(()=>{
    if(error && !isLoading){
      navigate("/login")
    }
  },[error])

  
  if(isLoading) return <PageLoader />



  return (
    <FormPage reverse>
      <Form />
      <FormImagen src={"/login.jpg"} />
    </FormPage>
  );
};

export default ResetPassword;
