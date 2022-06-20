import styles from './BestsellersItem.module.css'
function BestsellersItem({link,img,price,title,description}) {
    return (
        <div className={styles.bestsellers__block}>
            <a href={link} className={styles.bestsellers__img} style={{backgroundImage:`url(${img})`}}>
                <span className={styles.bestsellers__more}>More details</span>
                <span className={styles.bestsellers__price}>{price}</span>
            </a>
            <h3><a href="#" className={styles.bestsellers__title}>{title}</a></h3>
            <div className={styles.bestsellers__desc}>{description}</div>
        </div>
    );
}

export default BestsellersItem;