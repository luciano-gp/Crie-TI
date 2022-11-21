import { ArrowLeft, House, List, Plus } from "phosphor-react";
import { NavLink } from "react-router-dom";

import logoPix from "../assets/logo-pix.svg";

import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.navlink}>
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <House size={32} />
          </NavLink>
          <NavLink
            to="/pix"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <List size={32} />
          </NavLink>
          <NavLink
            to="/new-pix"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <Plus size={32} />
          </NavLink>
        </div>
        <img src={logoPix} alt="Logotipo do Pix" />
      </div>
    </header>
  );
}
