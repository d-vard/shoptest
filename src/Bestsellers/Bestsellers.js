import BestsellersItem from "./BestsellersItem/BestsellersItem";
import styles from "./Bestsellers.module.css"
import itemImg1 from "./img/bestsellers1.png"
import itemImg2 from "./img/bestsellers2.png"
import itemImg3 from "./img/bestsellers3.png"
import itemImg4 from "./img/bestsellers4.png"
import PrevArrow from "../SliderArrows/PrevArrow";
import NextArrow from "../SliderArrows/NextArrow";
import Slider from 'react-slick';

function Bestsellers(props) {
    const settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        infinite: false,
        speed: 500,
    };
    return (
        <section className={styles.bestsellers + ' bestsellers'}>
            <div className="container">
                <h2 className="title">Bestsellers</h2>
                <div className={styles.bestsellers__box}>
                    <Slider {...settings}>
                        <BestsellersItem img={itemImg1}
                                         link={'#'}
                                         title={'Fluro Big Pullover'}
                                         description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
                                         price={'$5'}/>
                        <BestsellersItem img={itemImg2}
                                         link={'#'}
                                         title={'Fluro Big Pullover'}
                                         description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
                                         price={'$5'}/>
                        <BestsellersItem img={itemImg3}
                                         link={'#'}
                                         title={'Fluro Big Pullover'}
                                         description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
                                         price={'$5'}/>
                        <BestsellersItem img={itemImg4}
                                         link={'#'}
                                         title={'Fluro Big Pullover'}
                                         description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
                                         price={'$5'}/>
                        <BestsellersItem img={itemImg1}
                                         link={'#'}
                                         title={'Fluro Big Pullover'}
                                         description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
                                         price={'$5'}/>
                        <BestsellersItem img={itemImg2}
                                         link={'#'}
                                         title={'Fluro Big Pullover'}
                                         description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
                                         price={'$5'}/>
                        <BestsellersItem img={itemImg3}
                                         link={'#'}
                                         title={'Fluro Big Pullover'}
                                         description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
                                         price={'$5'}/>
                        <BestsellersItem img={itemImg4}
                                         link={'#'}
                                         title={'Fluro Big Pullover'}
                                         description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
                                         price={'$5'}/>
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default Bestsellers;