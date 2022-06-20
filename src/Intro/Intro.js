import bg from "./IntroItem/img/intro_bg.png"
import styles from './Intro.module.css'
import IntroItem from "./IntroItem/IntroItem";
import Slider from 'react-slick';
function Intro() {
    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows:false,
        infinite: false,
        speed: 500,
    };
    return (
        <section className={'intro'}>
            <Slider {...settings}>
            <IntroItem src={bg} title={"Summer collection \n 2020-2021"} link={"/shop"}/>
            <IntroItem src={bg} title={"Summer collection \n 2020-2021"} link={"/shop"}/>
            <IntroItem src={bg} title={"Summer collection \n 2020-2021"} link={"/shop"}/>
            </Slider>
        </section>
    )
}

export default Intro
