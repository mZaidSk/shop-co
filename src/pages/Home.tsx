import Banner from "../components/home/Banner";
import Poster from "../components/home/Poster";
import Recommendation from "../components/products/Recommendation";

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="m-auto md:w-[90%] w-[94%] mb-8">
                <Recommendation heading ="NEW ARRIVAL" slider = {false}/>
                <hr className="text-border-100"/>
                <Recommendation heading ="TOP SELLING" slider = {false}/>
                <Poster/>

            </div>
        </div>
    );
};

export default Home;
