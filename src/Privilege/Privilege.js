import React from 'react';
import star from './img/star.svg';
import tool from './img/tool.svg';
import truck from './img/truck.svg';
import PrivilegeItem from "./PrivilegeItem/PrivilegeItem";
import styles from "./Privilege.module.css"

function Privilege(props) {
    const items = [
        {
            title:'Fast shipping',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
            imgSrc: truck,
        },
        {
            title:'Quality assurance',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
            imgSrc: star,
        },
        {
            title:'Discount program',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
            imgSrc: tool,
        },
    ]
    return (
        <section className={styles.privilege}>
            <div className="container">
                <div className={styles.privilege__box}>
                    {
                        items.map((item,index)=>{
                            return <PrivilegeItem key={index} title={item.title} description={item.description} src={item.imgSrc} />
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Privilege;
