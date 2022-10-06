import { Avatar } from '../avatar';
import { Comment } from '../comment';
import styles from './index.module.css';

export function Post(props) {
    return (
        <section className={styles.post}>
            <div className={styles.infos}>
                <div className={styles.profile}>
                    <Avatar hasBorder={true} src='https://github.com/luciano-gp.png' />
                    <div className={styles.description}>
                        <strong>Luciano Gomes</strong>
                        <span>Developer Junior | Clínica Experts</span>
                    </div>
                </div>
                <p className={styles.time}>Publicado há 1h</p>
            </div>
            <div className={styles.content}>
                <p>{props.hello}</p><br />
                <p>{props.msg}</p><br />
                <p><a className={styles.link} href={props.link} target='_blank'>{props.link}</a></p><br />
                <a href='#' className={styles.tags}>{props.tags}</a>
            </div>
            <div className={styles.newComment}>
                <strong>Deixe seu feedback</strong>
                <form method='' action=''>
                    <textarea id='comment' name='comment'></textarea>
                    <button>Publicar</button>
                </form>
            </div>
            <Comment img='https://github.com/fallerbruno.png' name='Bruno Faller' time='2h' text='Parabéns pelo design, fácil de replicar e muito bonito'/>
            <Comment img='https://github.com/yurikerber.png' name='Yuri Kerber' time='4h' text='Posso copiar?'/>
            <Comment img='https://github.com/mateusrovedaa.png' name='Mateus Roveda' time='1d' text='O Thor faria melhor'/>
        </section>
    );
}