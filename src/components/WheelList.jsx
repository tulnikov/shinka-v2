import styles from './WheelList.module.css';

function WheelList({diameter, onChangeDiameter}) {
    const diameterArray = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    return <div className={styles.wheelList}>
        {diameterArray.map((item, index) => (
            <div className={styles.wheel} key={index} onClick={()=>onChangeDiameter(item)}>{item}</div>
        ))}


    </div>
}

export default WheelList;