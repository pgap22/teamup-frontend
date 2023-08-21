import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { unirsePorToken } from "src/api/equipos";

const UnirseToken = () => {

    const { token } = useParams();
    const navigate = useNavigate();
    const [first, setFirst] = useState(false);
    useEffect(() => {
        setFirst(true);
    }, [])

    useEffect(()=>{
        if(first){
            (async () => {
                try {
                    const { data } = await unirsePorToken(token);
                    navigate("/estudiante/exito", {
                        state: {
                            url: "/estudiante/equipos", 
                            titulo: "Nuevo Equipo !", 
                            subtitulo: "Te acabas de unir a "+data.nombre, 
                            descripcion: "Ahora sos un nuevo integrante de este equipo !", 
                            linkText: "Volver"
                        }
                    })
                    return;
                } catch (error) {
                    console.log(error);
                    navigate("/estudiante/exito", {
                        state: {
                            url: "/estudiante/equipos", 
                            titulo: "Token Invalido", 
                            subtitulo: "La invitacion no es valida o ya estas en el equipo", 
                            descripcion: "Trata de contactar a algun miembro del equipo y corroba el link !", 
                            linkText: "Volver"
                        }
                    })
                }
            })()
        }
    },[first])

    return (
        <>Uniendote...</>
    )
}

export default UnirseToken