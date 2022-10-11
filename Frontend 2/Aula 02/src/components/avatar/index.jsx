import styles from './index.module.css';

export function Avatar({ hasBorder, src }) {
    return (
        <img className={hasBorder ? styles.avatar : styles.avatarWithoutBorder} src={src}/>
    )
}