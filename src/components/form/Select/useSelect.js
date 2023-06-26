import { useContext } from "react"
import { SelectValueContext } from "./SelectContext"

export const useSelect = ()=>{
    return useContext(SelectValueContext)
}