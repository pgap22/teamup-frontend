import ProtectedRoute from "../../components/routes/ProtectedRoute";
import Login from "../../pages/Login/Login";
import PaginaPrincipal from "../../pages/PaginaPrincipal/PaginaPrincipal";
import SignUp from "../../pages/SignUp/SignUp";
import Redirect from "../../redirect";

const router = {
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
    ]
}

export default router;