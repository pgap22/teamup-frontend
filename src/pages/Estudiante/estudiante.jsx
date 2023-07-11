import { useSession } from "../../hooks/useSession";

const Estudiante = () => {
  const { logout } = useSession();

  return (
    <>
      <p>Desde Estudiante</p>
      <button onClick={logout}>Cerrar Sesion</button>
    </>
  );
};

export default Estudiante;
