import { useAppContext } from '../../hooks/useAppContext'

import { ListaTarefasItem } from './ListaTarefasItem'
import { Loading } from '../Loading'

import style from './ListaTarefas.module.css'

export function ListaTarefas() {
    const { tarefas, loadingCarregar } = useAppContext()

    return(
        <ul className={style.listaTarefas}>
            {loadingCarregar && (
                <p>Carregando... <Loading /></p>
            )}

            {!loadingCarregar && !tarefas.length && (
                <p>Não há tarefas cadastradas...</p>
            )}
            
            {tarefas.map(item => 
                <ListaTarefasItem
                    key={item.id}
                    id={item.id}
                    nome={item.nome} 
                />
            )}
        </ul>
    )
}