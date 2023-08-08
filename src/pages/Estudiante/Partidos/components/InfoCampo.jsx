import React from 'react'

const InfoCampo = ({title, value}) => {
    return (
        <div className="flex flex-col sm:grid sm:grid-cols-[max-content_minmax(0,1fr)] items-center md:flex lg:grid gap-2 break-words">
            <h3 className='font-bold text-gray-500 text-lg md:text-xl '>{title}:</h3>
            <p title={value} className='truncate w-fit max-w-full'>{value}</p>
        </div>
    )
}

export default InfoCampo