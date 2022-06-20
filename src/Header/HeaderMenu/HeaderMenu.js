import styles from './HeaderMenu.module.css'
import close from './Icons/close.svg'
import {useContext} from "react";
import HeaderContext from "../HeaderContext";

function HeaderMenu() {
    const {menuHide, setMenuHide} = useContext(HeaderContext);
    const setMenu = () => {
        setMenuHide(!menuHide)
    }
    return (
        <ul className={`${styles.menu__list} ${menuHide ? styles.active : ''}`}>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/blog">News</a></li>
            <li className={styles.close__li}>
                <button className={styles.close__btn} onClick={setMenu}><img src={close} alt=""/></button>
            </li>
        </ul>
    )
}

export default HeaderMenu