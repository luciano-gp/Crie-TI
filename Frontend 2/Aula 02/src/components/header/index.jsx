import styles from './index.module.css';
import logoCrie from '../../assets/logo-crie-ti.png';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logoCrie} alt='Logotipo Crie-TI'/>
        </header>
    );
}