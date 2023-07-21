import { createContext, useState } from "react"  
const ImageContext = createContext()

const ImageProvider = ({children})=>{
    const [imagenes, setImagenes] = useState([])
    return (
        <ImageContext.Provider value={{imagenes,setImagenes}}>{children}</ImageContext.Provider>
    )
}

export {ImageContext, ImageProvider}