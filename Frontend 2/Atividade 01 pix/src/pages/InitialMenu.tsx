import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import styles from "./InitialMenu.module.css";

export function InitialMenu() {
  return (
    <div>
      <Header />
      <div className={styles.initialMenu}>
        <Link to="/new-pix">Fazer Pix</Link>
        <Link to="/pix">Consultar</Link>
      </div>
    </div>
  );
}
