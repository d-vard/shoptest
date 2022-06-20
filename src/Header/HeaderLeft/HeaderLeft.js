import burger from "./Icons/burger.svg";
import search from "./Icons/search.svg";
import styles from './HeaderLeft.module.css'
import {useContext} from "react";
import HeaderContext from "../HeaderContext";

function HeaderLeft() {
    const {menuHide, setMenuHide} = useContext(HeaderContext);
    const menuToggle = () => {
        setMenuHide(!menuHide)
    }
    return (
        <nav className={styles.left__nav}>
            <button className={styles.burger__btn} onClick={menuToggle}><img src={burger}
                                                                             alt="burger"/><span>menu</span></button>
            <button className={styles.search__btn}><img src={search} alt="search"/></button>
        </nav>
    )
}

export default HeaderLeft