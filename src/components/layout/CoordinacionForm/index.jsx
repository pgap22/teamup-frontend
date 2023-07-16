import React from 'react'

const CoordinacionForm = ({ children, titulo, imagenUrl, handleSubmit=()=>{} }) => {
    return (
        <div className="grid gap-6 lg:grid-cols-[0.6fr_1fr] ">
            <div className="bg-white p-4 rounded-lg">
                <h2 className="font-bold text-2xl mb-6">{titulo}</h2>

                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-6">
                        {children}
                    </div>
                </form>
            </div>

            <div style={{ backgroundImage: `url('${imagenUrl}')` }} className="rounded-lg bg-cover bg-no-repeat max-h-[550px]"></div>
        </div>
    )
}

export default CoordinacionForm