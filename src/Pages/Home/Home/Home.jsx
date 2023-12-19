import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import About_our_restaurant from "../About_our_restaurant/About_our_restaurant";
import Banner from "../Banner/Banner";
import Contract from "../Contract/Contract";
import FeaturedFood from "../FeaturedFood/FeaturedFood";
import Featured_item from "../Featured_item/Featured_item";

import Slider_featured_food_image from "../Slider_featured_food_image/Slider_featured_food_image";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <SectionTitle heading={"order online"} subHeading={"From 10.00am to 11.00px"}></SectionTitle>
          <Slider_featured_food_image></Slider_featured_food_image>
          <About_our_restaurant></About_our_restaurant>
          <SectionTitle heading={"from our menu"} subHeading={"check it out"}></SectionTitle>
          <FeaturedFood></FeaturedFood>
          <Contract></Contract>
          <Featured_item></Featured_item>
          <SectionTitle heading={"testimonials"} subHeading={"What our clients say"}></SectionTitle>
          <Testimonials></Testimonials>
        </div>
    );
};

export default Home;