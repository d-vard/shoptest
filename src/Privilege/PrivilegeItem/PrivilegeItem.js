import styles from "./PrivilegeItem.module.css"

function PrivilegeItem({title, description, src}) {
    return (
        <div className={styles.privilege__block}>
            <img src={src} alt=""/>
            <h2 className={styles.privilege__title}>{title}</h2>
            <div className={styles.privilege__desc}>{description}</div>
        </div>
    );
}

export default PrivilegeItem;