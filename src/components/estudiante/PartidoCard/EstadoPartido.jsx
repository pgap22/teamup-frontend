import React from 'react'

const EstadoPartido = ({color = '#757575', titulo}) => {
    return (
        <div style={{backgroundColor: color+"25",}} className="px-4 p-1 rounded-lg  w-fit">
            <p style={{color}} className="font-bold text-base">{titulo}</p>
        </div>
    )
}

export default EstadoPartido