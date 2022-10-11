import styles from './index.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src='https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'></img>
            <div className={styles.profile}>
                <div className={styles.avatar}>
                    <img src='https://github.com/luciano-gp.png'></img>
                </div>
                <div className={styles.description}>
                    <strong>Luciano Gomes</strong>
                    <span>Developer Junior | Clínica Experts</span>
                </div>
            </div>
        </aside>
    );
}