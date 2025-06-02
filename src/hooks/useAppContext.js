import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"

export const useAppContext = () => {
    const contexto = useContext(AppContext)

    return contexto
}