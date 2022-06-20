import styles from '../Gallery.module.css';

function GalleryItem({img}) {
    return (
        <div className={styles.gallery__box}>
            <a href={img}><img src={img} alt="" /></a>
        </div>
    );
}

export default GalleryItem;