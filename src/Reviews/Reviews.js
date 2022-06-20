import styled from './Reviews.module.css'
import ReviewsItem from "./ReviewsItem/ReviewsItem";
import Slider from 'react-slick';
import img1 from './img/reviews1.png'
import img2 from './img/reviews2.png'

function Reviews(props) {
    const settings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows:false,
        infinite: false,
        autoplay:false,
        speed: 500,
    };
    return (
        <section className={styled.reviews + ' reviews'}>
            <div className="container">
                <h2 className="title">Reviews</h2>
                <Slider {...settings}>
                    <ReviewsItem img={img1}
                                 description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}
                                 name={'Jane Cooper'}/>
                    <ReviewsItem img={img2}
                                 description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}
                                 name={'Jane Cooper'}/>
                    <ReviewsItem img={img1}
                                 description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}
                                 name={'Jane Cooper'}/>
                    <ReviewsItem img={img2}
                                 description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}
                                 name={'Jane Cooper'}/>
                </Slider>
            </div>
        </section>
    );
}

export default Reviews;