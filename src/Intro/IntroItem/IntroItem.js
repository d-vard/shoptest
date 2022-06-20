import styles from './IntroItem.module.css'
function IntroItem({src, title, link}) {
    return (
        <div className={styles.intro__box} style={{backgroundImage: `url(${src})`}}>
            <div className="container">
                <div className={styles.intro__block}>
                    <h1 className={styles.intro__title}>{title}</h1>
                    <a href={link} className={styles.more__link}>More details</a>
                </div>
            </div>
        </div>
    )
}

export default IntroItem