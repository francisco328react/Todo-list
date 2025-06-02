import { Outlet } from "react-router-dom";

import { Cabecalho } from "../../components/Cabecalho";
import { Rodape } from "../../components/Rodape";
import { Conteudo } from "../../components/Conteudo";
import { useAppContext } from "../../hooks/useAppContext";

export function LayoutPadrao() {
    
    const { criador } = useAppContext()

    return (
        <>
            <Cabecalho name="Francisco" />
            <Conteudo>
                <Outlet />
            </Conteudo>
            <Rodape criador={criador}/>
        </>
    )
}