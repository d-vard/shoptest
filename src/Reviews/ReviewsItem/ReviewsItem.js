import styles from './ReviewsItem.module.css'

function ReviewsItem({img, name, description}) {
    return (
        <div className={styles.reviews__block}>
            <div className={styles.reviews__user}>
                <div className={styles.user__img} style={{backgroundImage: `url(${img})`}}> </div>
                <h3 className={styles.user__name}>{name}</h3>
            </div>
            <div className={styles.reviews__comment}>{description}</div>
        </div>
    );
}

export default ReviewsItem;