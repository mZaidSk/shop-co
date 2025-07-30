import Banner from "../components/home/Banner";
import BrandLogo from "../components/home/BrandLogo";

const Home = () => {
    return (
        <div>
            <Banner
                title="Welcome to Shop Co!"
                subtitle="Discover the best products and deals."
                imageUrl="src/assets/images/home-img/banner.jpg"
                ctaText="Shop Now"
                onCtaClick={() => alert("CTA clicked!")}
            />
            <BrandLogo />
        </div>
    );
};

export default Home;
