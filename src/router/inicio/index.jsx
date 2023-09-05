import ProtectedRoute from "../../components/routes/ProtectedRoute";
import ForgotPassword from "src/pages/ForgotPassword";
import Login from "../../pages/Login/Login";
import PaginaPrincipal from "../../pages/PaginaPrincipal/PaginaPrincipal";
import SignUp from "../../pages/SignUp/SignUp";
import Redirect from "../../redirect";
import ResetPassword from "src/pages/ResetPassword";
import VerificarCorreo from "src/pages/VerificarCorreo/VerificarCorreo";

const router = {
  caseSensitive: true,
  path: "/",
  children: [
    {
      index: true,

      element: (
        <ProtectedRoute needLogged={false}>
          <PaginaPrincipal />
        </ProtectedRoute>
      ),
    },
    {
      path: "redirect",
      element: <Redirect />,
    },
    {
      path: "login",
      element: (
        <ProtectedRoute needLogged={false}>
          <Login />
        </ProtectedRoute>
      ),
    },
    {
      path: "signup",
      element: (
        <ProtectedRoute needLogged={false}>
          <SignUp />
        </ProtectedRoute>
      ),
    },
    {
      path: "recover",
      element: (
        <ProtectedRoute needLogged={false}>
          <ForgotPassword />
        </ProtectedRoute>
      ),
    },
    {
      path: "reset-password/:token",
      element: (
        <ProtectedRoute needLogged={false}>
          <ResetPassword />
        </ProtectedRoute>
      ),
    },
    {
      path: "verificarEmail/:token",
      element: (
        <ProtectedRoute needLogged={false}>
          <VerificarCorreo />
        </ProtectedRoute>
      ),
    },
  ],
};

export default router;
