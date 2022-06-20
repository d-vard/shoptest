import styles from "./Gallery.module.css";
import GalleryItem from "./GalleryItem/GalleryItem";
import img1 from "./img/gallery1.png"
import img2 from "./img/gallery2.png"
import img3 from "./img/gallery3.png"
import img4 from "./img/gallery4.png"

function Gallery() {
    return (
        <section className={styles.gallery}>
            <GalleryItem img={img1}/>
            <GalleryItem img={img2}/>
            <GalleryItem img={img3}/>
            <GalleryItem img={img4}/>
        </section>
    );
}

export default Gallery;