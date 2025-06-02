
import {TIPO_BOTAO} from './Constants.js'
import style from './Botao.module.css'

export function Botao({texto, tipo = TIPO_BOTAO.PRIMARIO, ...outrasProps}) {
    return(
        <button className={style.botao} tipo={tipo} {...outrasProps}>
            {texto}
        </button>
    )
}