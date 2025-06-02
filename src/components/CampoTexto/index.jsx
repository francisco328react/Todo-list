import style from './CampoTexto.module.css'

export function CampoTexto(props) {
    return (
        <input
            type='text'
            className={style.campoTexto}
            {...props} 
        />
    )
}