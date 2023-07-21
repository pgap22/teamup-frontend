import { useContext } from "react"
import { ImageContext } from "./ImageContext"

export const useImagenes = ()=>{
    return useContext(ImageContext)
}