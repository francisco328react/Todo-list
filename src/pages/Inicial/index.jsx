import { FormCriarTarefa } from "../../components/FormCriarTarefa";
import { ListaTarefas } from "../../components/ListaTarefas";

import style from "./Inicial.module.css";

export function Inicial() {

    return (
        <div className={style.inicial}>
            <FormCriarTarefa/>
            <ListaTarefas/>
        </div>
    );
}
