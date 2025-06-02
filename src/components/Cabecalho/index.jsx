import { Link } from "react-router-dom";
import style from "./Cabecalho.module.css";

export function Cabecalho() {
  return (
    <div className={style.cabecalho}>
      <Link to="/">
        <h1>
          <span>Todo</span>
          List
        </h1>
      </Link>

      <Link to="/sobre-nos">
        Sobre Nós
      </Link>
    </div>
  );
}
