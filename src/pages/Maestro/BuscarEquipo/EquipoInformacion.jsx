import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { buscarEquipo } from 'src/api/equipos';
import Partido from 'src/components/estudiante/PartidoCard/Partido';
import MaestroLayout from 'src/components/layout/MaestroLayout'
import Caja from 'src/components/ui/Cajas/Caja';
import { useEquipo } from 'src/store/useEquipo'

const EquipoInformacion = () => {
    const [mounted, setMounted] = useState(true);
    const { equipo, setEquipo } = useEquipo();
    const nombreEquipo = useParams();
    const navigate = useNavigate();



    useEffect(() => {

        setMounted(false);
        (async () => {
            if (!equipo.id) {
                try {
                    const equipoEncontrado = await buscarEquipo(nombreEquipo);
                    setEquipo(equipoEncontrado);
                } catch (error) {
                    console.log(error);
                    navigate("/maestro/buscar")
                }
            }
        })()

        return () => {
            if(!mounted) setEquipo({})
        }
    }, [mounted])


    if (!equipo.id) return <p>Cargando...</p>


    return (
        <MaestroLayout
            titulo={equipo.nombre}
        >
            <div className='space-y-4'>
                <Caja titulo={"Partidos"}>
                    <div className="max-w-full scroll-p-2 flex gap-5 overflow-auto">
                        {
                            equipo.partidos.map(partido => (
                                <div key={partido.id} className="min-w-[300px]">
                                    <Partido partido={partido} url="/maestro/solicitud/" />
                                </div>
                            ))
                        }
                    </div>
                </Caja>

                <Caja titulo={"Estudiantes"}>
                    <div className='flex flex-col gap-4'>
                        <p>{equipo.lider.nombre}</p>
                        {equipo.usuarios.map(usuario => (
                            <p key={usuario.id} >{usuario.nombre}</p>
                        ))}
                    </div>
                </Caja>
            </div>
        </MaestroLayout>
    )
}

export default EquipoInformacion