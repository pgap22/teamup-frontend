import React from 'react'

const PartidoTitulo = ({ titulo, estado = '' }) => {
    return (
        <div className='flex gap-4 flex-col sm:flex-row items-center'>
            <p>{titulo}</p>
            {estado}
        </div>
    )
}

export default PartidoTitulo