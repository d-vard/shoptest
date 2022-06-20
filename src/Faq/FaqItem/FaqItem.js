import styles from './FaqItem.module.css';
import arrowRight from '../img/arrow_right.svg';
import { useSelector ,useDispatch} from 'react-redux';
import {faqShow} from "../../redux/actions";
function FaqItem({title,description}) {
    const show = useSelector(state => state.faqReducer.show);
    const dispatch = useDispatch();
    // console.log(show)
    return (
        <div className={styles.faq_block} onClick={()=>{dispatch(faqShow())}}>
            <h3 className={styles.faq__title}>{title}</h3>
            {show ? <div className={`${styles.faq__desc} ${styles.active}`}>{description}</div> : ''}
            <div className={`${styles.faq__arrow} ${show ? styles.active : ''}`}><img src={arrowRight} alt="" /></div>
        </div>
    );
}
export default FaqItem;