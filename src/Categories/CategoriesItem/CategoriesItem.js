import React from 'react';
import styles from '../Categories.module.css'
function CategoriesItem({title,img,link}) {
    return (
        <a href={link} className={styles.categories__block}
           style={{backgroundImage: `url(${img})`}}>
            <span className={'title color__white'}>{title}</span>
        </a>
    );
}

export default CategoriesItem;