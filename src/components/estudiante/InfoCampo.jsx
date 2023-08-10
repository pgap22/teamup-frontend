import React from 'react'

const InfoCampo = ({ title, value }) => {
    return (
        <p className='flex flex-col gap-2 sm:block'><span className='font-bold text-gray-500 text-lg md:text-xl'>{title}:</span>   <span title={value} className='truncate w-fit max-w-full'>{value}</span></p>
    )
}

export default InfoCampo