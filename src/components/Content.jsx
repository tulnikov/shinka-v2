import styles from './Content.module.css';
import {LiaTruckSolid, LiaTruckPickupSolid} from "react-icons/lia";
import Card from './Card'
import {useState} from "react";
import WheelList from "../components/WheelList";
import CardUslugi from "./CardUslugi";

function Content() {
    const [carType, setCarType] = useState(1)
    const [diameter, setDiameter] = useState(16)

    const carTypeArray = [
        {
            title: 'Седан',
            carType: 1,
            img: <LiaTruckPickupSolid/>
        },
        {
            title: 'Внедорожник',
            carType: 2,
            img: <LiaTruckPickupSolid/>
        },
        {
            title: 'Коммерческий',
            carType: 3,
            img: <LiaTruckSolid/>
        },
    ]

    

    return <>
        <div className={styles.redLine}></div>

        <div className={styles.content}>
            {carTypeArray.map((item, index) => (
                <Card
                    key={index}
                    title={item.title}
                    carType={item.carType}
                    onChangeType={setCarType}>
                    {item.img}
                </Card>
            ))}
        </div>
        <WheelList diameter={diameter} onChangeDiameter={setDiameter}/>
        <div className={styles.content}>
            <CardUslugi title={'Услуги'} desscription={'Описание'}/>
            <CardUslugi title={'Продажи'} desscription={'Описание'}/>
            <CardUslugi title={'Комплексы'} desscription={'Описание'}/>
        </div>
    </>
}

export default Content;