import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { obtenerEstadoServidor } from "src/api";
import Button from "src/components/form/Button";
import { PageLoader } from "src/components/ui/PageLoader";

const ServerStatus = ({ children }) => {
    const [estadoServidor, setEstado] = useState({});
    const [cargarPagina, setCargarPagina] = useState(false);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        (async () => {
            try {
                const data = await obtenerEstadoServidor();
                setEstado(data)
            } catch (error) {
                setEstado(error)
            }
            finally{
                setLoading(false)
            }
        })()
    }, [])

    useEffect(()=>{
        if(estadoServidor.server && estadoServidor.db){
            setCargarPagina(true)
        }
    },[estadoServidor])

    if (loading) return <PageLoader />

    if(!cargarPagina) return <ErrorServidor  estado={estadoServidor}/>

    return <>
        {children}
    </>
}

const ErrorServidor = ({estado})=>{
    const {server, db} = estado
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="border-t-8 md:min-w-[520px] p-4 bg-white shadow rounded-md border-primary ">
                <h2 className="font-bold text-xl">Estado del servidor</h2>
                <p className="text-gray-500">Hubo un error con los servidores de TeamUp</p>
                <div className="flex flex-col gap-4 my-4">
                    <div className="flex gap-2 items-center">
                        <div className={`w-6 aspect-square ${server ? 'bg-green-500' : 'bg-red-600'} rounded-full`}></div>
                        <h3>Servidor (API)</h3>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className={`w-6 aspect-square ${db ? 'bg-green-500' : 'bg-red-600'} rounded-full`}></div>
                        <h3>Base de datos</h3>
                    </div>
                </div>
                <Button onClick={()=> window.location.reload()}>Recargar Pagina</Button>
            </div>
        </div>
    )
}

export default ServerStatus