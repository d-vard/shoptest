import React from 'react';
import CategoriesItem from "./CategoriesItem/CategoriesItem";
import styles from './Categories.module.css'
import img1 from "./img/category1.png"
import img2 from "./img/category2.png"
import img3 from "./img/category3.png"
import img4 from "./img/category4.png"
import img5 from "./img/category5.png"
import img6 from "./img/category6.png"

function Categories(props) {
    return (
        <section className={styles.categories}>
            <div className="container">
                <h2 className="title">Categories</h2>
                <div className={styles.categories__box}>
                    <div className={styles.categories__body}>
                        <CategoriesItem title={'Categories 01'} img={img1} link={'#'}/>
                        <div className={styles.categories__item}>
                            <CategoriesItem title={'Categories 02'} img={img2} link={'#'}/>
                            <CategoriesItem title={'Categories 03'} img={img3} link={'#'}/>
                        </div>
                    </div>
                    <div className={styles.categories__body}>
                        <div className={styles.categories__item}>
                            <CategoriesItem title={'Categories 04'} img={img4} link={'#'}/>
                        </div>
                        <div className={styles.categories__min}>
                            <CategoriesItem title={'Categories 05'} img={img5} link={'#'}/>
                            <CategoriesItem title={'Categories 06'} img={img6} link={'#'}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Categories;