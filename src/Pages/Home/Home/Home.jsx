import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import About_our_restaurant from "../About_our_restaurant/About_our_restaurant";
import Banner from "../Banner/Banner";
import FeaturedFood from "../FeaturedFood/FeaturedFood";

import Slider_featured_food_image from "../Slider_featured_food_image/Slider_featured_food_image";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <SectionTitle heading={"order online"} subHeading={"From 10.00am to 11.00px"}></SectionTitle>
          <Slider_featured_food_image></Slider_featured_food_image>
          <About_our_restaurant></About_our_restaurant>
          <SectionTitle heading={"from our menu"} subHeading={"check it out"}></SectionTitle>
          <FeaturedFood></FeaturedFood>
        </div>
    );
};

export default Home;