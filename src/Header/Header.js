import HeaderLeft from "./HeaderLeft/HeaderLeft";
import Logo from "./Logo/Logo";
import HeaderRight from "./HeaderRight/HeaderRight";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import styles from "./Header.module.css"
import {useState,useEffect} from "react";
import HeaderContext from "./HeaderContext";
function Header() {
    const [menuHide, setMenuHide] = useState(false);
    const [windowScroll,setWindowScroll] = useState(false);
    const checkScroll = (scroll,height)=>{
        if (scroll > height) return setWindowScroll(true)
        setWindowScroll(false)
    }
    window.addEventListener('scroll',function (){
        const scrollTop = window.scrollY
        checkScroll(scrollTop,60)
        // console.log(scrollTop)
    })
    return (
        <header className={`${styles.header} ${windowScroll ? styles.scroll : ''}`}>
            <HeaderContext.Provider value={{menuHide, setMenuHide}}>
                <div className="container">
                    <div className={styles.header__box}>
                        <HeaderLeft/>
                        <Logo/>
                        <HeaderRight/>
                    </div>
                </div>
                <HeaderMenu/>
            </HeaderContext.Provider>
        </header>
    )
}

export default Header