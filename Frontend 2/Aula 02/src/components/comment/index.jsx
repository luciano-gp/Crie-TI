import { Avatar } from '../avatar';
import styles from './index.module.css';

export function Comment(props) {
    return (
        <div className={styles.comment}>
            <Avatar hasborder={false} src={props.img} />
            <div className={styles.content}>
                <div className={styles.infos}>
                    <div>
                        <strong>{props.name}</strong>
                        <div className={styles.time}>Comentado há {props.time}</div>
                        <p className={styles.msg}>{props.text}</p>
                    </div>
                    <i className="fa-solid fa-trash"></i>
                </div>
                <span className={styles.like}><i className="fa-regular fa-thumbs-up"></i>03</span>
            </div>
        </div>
    )
}