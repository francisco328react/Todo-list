

import style from './Error404.module.css'

export function Error() {
    return(
        <div className={style.error}>
            <h1>ERRO 404</h1>
            <h2>
                Página não encontrada
            </h2>
        </div>
    )
}