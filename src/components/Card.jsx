import styles from './Card.module.css';

// eslint-disable-next-line react/prop-types
function Card({children, title, carType, onChangeType}) {
    return (
        <div className={styles.card} onClick={()=>onChangeType(carType)}>
            <div className={styles.img}>{children}</div>
            <div className={styles.title}>{title}</div>
        </div>)
}

export default Card;