import React from 'react'

const Skeleton = ({ children, loading, fallback }) => {
    if(loading) return fallback
    return (
        <>{children}</>
    )
}

export default Skeleton