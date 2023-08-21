import clsx from 'clsx'
import React from 'react'

const TablaSkeleton = () => {
    return (
        <div className='overflow-auto'>
            <table className='w-full bg-white min-w-[680px] rounded-md'>
                <thead>
                    <tr>
                        <td colSpan={7}>
                            <div className='flex justify-between p-4'>
                                <div className='bg-gray-200 h-8 w-56 rounded-md animate-pulse'></div>
                                {/* <TablaHeader titulo={titulo} cantidadTexto={cantidadTexto} /> */}
                            </div>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr className="w-full font-bold text-gray-600 border-t border-b">

                        <td className="capitalize px-4 py-2 ">
                            <div className='bg-gray-200 h-6 w-56 rounded-md animate-pulse'></div>
                        </td>
                        <td className="capitalize px-4 py-2 ">
                            <div className='bg-gray-200 h-6 w-56 rounded-md animate-pulse'></div>
                        </td>
                        <td className="capitalize px-4 py-2 ">
                            <div className='bg-gray-200 h-6 w-56 rounded-md animate-pulse'></div>
                        </td>
                        <td className="capitalize px-4 py-2 ">
                            <div className='bg-gray-200 h-6 w-56 rounded-md animate-pulse'></div>
                        </td>
                        <td className="capitalize px-4 py-2 ">
                            <div className='bg-gray-200 h-6 w-56 rounded-md animate-pulse'></div>
                        </td>
                    </tr>
                    <tr className={clsx("last:rounded-b-md", "even:bg-gray-200", "w-full")}>
                        <td className="text-lg whitespace-normal px-4 py-5">
                            <div className='bg-gray-300 h-6 w-56 rounded-md animate-pulse'></div>
                        </td>
                        <td className="text-lg whitespace-normal px-4 py-5">
                            <div className='bg-gray-300 h-6 w-56 rounded-md animate-pulse'></div>
                        </td>
                        <td className="text-lg whitespace-normal px-4 py-5">
                            <div className='bg-gray-300 h-6 w-56 rounded-md animate-pulse'></div>
                        </td>
                        <td className="text-lg whitespace-normal px-4 py-5">
                            <div className='bg-gray-300 h-6 w-56 rounded-md animate-pulse'></div>
                        </td>
                        <td className="text-lg whitespace-normal px-4 py-5">
                            <div className='bg-gray-300 h-6 w-56 rounded-md animate-pulse'></div>
                        </td>
                    </tr>
                    <tr className={clsx("last:rounded-b-md", "even:bg-gray-200", "w-full")}>
                        <td className="text-lg whitespace-normal px-4 py-5">
                            <div className='bg-gray-300 h-6 w-56 rounded-md animate-pulse'></div>
                        </td>
                        <td className="text-lg whitespace-normal px-4 py-5">
                            <div className='bg-gray-300 h-6 w-56 rounded-md animate-pulse'></div>
                        </td>
                        <td className="text-lg whitespace-normal px-4 py-5">
                            <div className='bg-gray-300 h-6 w-56 rounded-md animate-pulse'></div>
                        </td>
                        <td className="text-lg whitespace-normal px-4 py-5">
                            <div className='bg-gray-300 h-6 w-56 rounded-md animate-pulse'></div>
                        </td>
                        <td className="text-lg whitespace-normal px-4 py-5">
                            <div className='bg-gray-300 h-6 w-56 rounded-md animate-pulse'></div>
                        </td>
                    </tr>
                    <tr className={clsx("last:rounded-b-md", "even:bg-gray-200", "w-full")}>
                        <td className="text-lg whitespace-normal px-4 py-5">
                            <div className='bg-gray-300 h-6 w-56 rounded-md animate-pulse'></div>
                        </td>
                        <td className="text-lg whitespace-normal px-4 py-5">
                            <div className='bg-gray-300 h-6 w-56 rounded-md animate-pulse'></div>
                        </td>
                        <td className="text-lg whitespace-normal px-4 py-5">
                            <div className='bg-gray-300 h-6 w-56 rounded-md animate-pulse'></div>
                        </td>
                        <td className="text-lg whitespace-normal px-4 py-5">
                            <div className='bg-gray-300 h-6 w-56 rounded-md animate-pulse'></div>
                        </td>
                        <td className="text-lg whitespace-normal px-4 py-5">
                            <div className='bg-gray-300 h-6 w-56 rounded-md animate-pulse'></div>
                        </td>
                    </tr>
                    <tr className={clsx("last:rounded-b-md", "even:bg-gray-200", "w-full")}>
                        <td className="text-lg whitespace-normal px-4 py-5">
                            <div className='bg-gray-300 h-6 w-56 rounded-md animate-pulse'></div>
                        </td>
                        <td className="text-lg whitespace-normal px-4 py-5">
                            <div className='bg-gray-300 h-6 w-56 rounded-md animate-pulse'></div>
                        </td>
                        <td className="text-lg whitespace-normal px-4 py-5">
                            <div className='bg-gray-300 h-6 w-56 rounded-md animate-pulse'></div>
                        </td>
                        <td className="text-lg whitespace-normal px-4 py-5">
                            <div className='bg-gray-300 h-6 w-56 rounded-md animate-pulse'></div>
                        </td>
                        <td className="text-lg whitespace-normal px-4 py-5">
                            <div className='bg-gray-300 h-6 w-56 rounded-md animate-pulse'></div>
                        </td>
                    </tr>
                    <tr className={clsx("last:rounded-b-md", "even:bg-gray-200", "w-full")}>
                        <td className="text-lg whitespace-normal px-4 py-5">
                            <div className='bg-gray-300 h-6 w-56 rounded-md animate-pulse'></div>
                        </td>
                        <td className="text-lg whitespace-normal px-4 py-5">
                            <div className='bg-gray-300 h-6 w-56 rounded-md animate-pulse'></div>
                        </td>
                        <td className="text-lg whitespace-normal px-4 py-5">
                            <div className='bg-gray-300 h-6 w-56 rounded-md animate-pulse'></div>
                        </td>
                        <td className="text-lg whitespace-normal px-4 py-5">
                            <div className='bg-gray-300 h-6 w-56 rounded-md animate-pulse'></div>
                        </td>
                        <td className="text-lg whitespace-normal px-4 py-5">
                            <div className='bg-gray-300 h-6 w-56 rounded-md animate-pulse'></div>
                        </td>
                    </tr>
                    <tr className={clsx("last:rounded-b-md", "even:bg-gray-200", "w-full")}>
                        <td className="text-lg whitespace-normal px-4 py-5">
                            <div className='bg-gray-300 h-6 w-56 rounded-md animate-pulse'></div>
                        </td>
                        <td className="text-lg whitespace-normal px-4 py-5">
                            <div className='bg-gray-300 h-6 w-56 rounded-md animate-pulse'></div>
                        </td>
                        <td className="text-lg whitespace-normal px-4 py-5">
                            <div className='bg-gray-300 h-6 w-56 rounded-md animate-pulse'></div>
                        </td>
                        <td className="text-lg whitespace-normal px-4 py-5">
                            <div className='bg-gray-300 h-6 w-56 rounded-md animate-pulse'></div>
                        </td>
                        <td className="text-lg whitespace-normal px-4 py-5">
                            <div className='bg-gray-300 h-6 w-56 rounded-md animate-pulse'></div>
                        </td>
                    </tr>
                    {/* {
          listaDatos.length ? <TablaRowHeader filas={filas} /> : ""
        }
        {
          listaDatos.length
            ? <TablaListaDeFilas filas={filas} listaDatos={listaDatos} editarUrl={editarUrl} borrarElemento={borrarElemento} acciones={acciones} AccionesCustomElement={AccionesCustomElement} editar={editar} eliminar={eliminar} />
            : <p className='p-4'>No hay ningun item...</p>
        } */}
                </tbody>
            </table>
        </div>
    )
}

export default TablaSkeleton