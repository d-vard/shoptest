import Intro from "../Intro/Intro";
import Privilege from "../Privilege/Privilege";
import Categories from "../Categories/Categories";
import Gallery from "../Gallery/Gallery";
import Bestsellers from "../Bestsellers/Bestsellers";
import Reviews from "../Reviews/Reviews";
import Faq from "../Faq/Faq";

function Home (){
    return (
        <main>
            <Intro/>
            <Privilege/>
            <Categories/>
            <Bestsellers/>
            <Gallery/>
            <Reviews/>
            <Faq/>
        </main>
    )
}
export default Home