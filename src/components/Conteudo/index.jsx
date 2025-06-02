
import style from './Conteudo.module.css'

export function Conteudo({children}) {
    return(
        <div className={style.conteudo}>
            <h1>{children}</h1>
        </div>
    )
}