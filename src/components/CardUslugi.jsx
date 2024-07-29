import style from './CardUslugi.module.css';

function CardUslugi({title, description}) {
    return <div className={style.cardUslugi}>
        <div className={style.title}>{title}</div>
        <div className={style.description}>{description}</div>
    </div>

}

export default CardUslugi;