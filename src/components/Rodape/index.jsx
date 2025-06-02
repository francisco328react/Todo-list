import style from './Rodape.module.css'

export function Rodape({criador}) {
    const data = new Date().getUTCFullYear()

    return(
        <div className={style.rodape}>
            <p>React Básico - {data} - {criador} </p>
        </div>
    )
}