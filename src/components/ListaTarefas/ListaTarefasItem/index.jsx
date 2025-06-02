import { useAppContext } from '../../../hooks/useAppContext'
import { useState } from 'react'

import { TIPO_BOTAO } from '../../Botao/Constants'
import { Botao } from '../../Botao'

import { CampoTexto } from '../../CampoTexto'

import style from './ListaTarefasItem.module.css'
import { Loading } from '../../Loading'

export function ListaTarefasItem({ id, nome }) {

    const { removerTarefa, editarTarefa, loadingDeletar, loadingEditar } = useAppContext()

    const [estaEditando, setEstaEditando] = useState(false)

    const onBlurTarefa = (event) => {
        const nomeTarefa = event.currentTarget.value

        editarTarefa(id, nomeTarefa)

        setEstaEditando(false)
    }

    const loadingEstaDeletando = loadingDeletar === id
    const loadingEstaEditando = loadingEditar === id

    return (
        <li className={style.listaTarefasItem}>
            {(loadingEstaEditando || estaEditando) && (
                <CampoTexto
                    defaultValue={nome}
                    onBlur={onBlurTarefa} 
                    autoFocus
                />
            )}

            {!loadingEstaEditando && !estaEditando && (
                <span onDoubleClick={() => setEstaEditando(true)}>
                    {nome}
                </span>
            )}

            {loadingEstaEditando && (
                <Loading />
            )}

            <Botao 
                texto={loadingEstaDeletando ? <Loading /> : "-"}
                tippo={TIPO_BOTAO.SECUNDARIO} 
                onClick={() => removerTarefa(id)} 
            />
        </li>
    )
}