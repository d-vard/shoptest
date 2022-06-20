import styles from './HeaderRight.module.css'
import heart from "./Icons/heart.svg";
import cart from "./Icons/shopping-cart.svg";
import person from "./Icons/person.svg";
function HeaderRight(){
    return (
        <nav className={styles.right__nav}>
            <ul className={styles.header__list}>
                <li><a href="#"><img src={heart} alt="" /></a></li>
                <li><a href="#"><img src={cart} alt="" /></a></li>
                <li><a href="#"><img src={person} alt="" /></a></li>
            </ul>
        </nav>
    )
}
export default HeaderRight