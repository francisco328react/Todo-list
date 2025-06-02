import { useAppContext } from "../../hooks/useAppContext";
import { useState } from "react";

import { Botao } from "../Botao";
import { CampoTexto } from "../CampoTexto";
import { Loading } from "../Loading";

import style from './FormCriarTareffa.module.css'

export function FormCriarTarefa() {

    const { adicionarTarefa, loadingCriar } = useAppContext()

    const [ nomeTarefa, setNomeTarefa ] = useState('')

    function onChangeNomeTarefa(event) {
        setNomeTarefa(event.currentTarget.value)
    }
    
    function handleAddTarefa(event) {
        event.preventDefault()

        if(!nomeTarefa) {
            return
        }

        adicionarTarefa(nomeTarefa)        

        setNomeTarefa('')
    }

    return(
        <form className={style.formCriarTarefa} onSubmit={handleAddTarefa}>
            <CampoTexto 
                value={nomeTarefa} 
                onChange={onChangeNomeTarefa} 
            />
            <Botao texto={loadingCriar ? <Loading /> : "+"} />
        </form>
    )
}