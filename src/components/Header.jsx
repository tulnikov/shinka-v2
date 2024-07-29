import styles from "./Header.module.css";
import {GiAbstract021, GiHamburgerMenu} from "react-icons/gi";

function Header() {
    return <div className={styles.header}>
        <div className={styles.logo}><GiAbstract021/></div>
        <div>
            <span className={styles.caption}>Шиномонтаж Баланс</span>
        </div>
        <div className={styles.control} onClick={() => alert('Меню')}><GiHamburgerMenu/></div>
    </div>
}

export default Header;