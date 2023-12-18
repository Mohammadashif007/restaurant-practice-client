import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import About_our_restaurant from "../About_our_restaurant/About_our_restaurant";
import Banner from "../Banner/Banner";
import FeatureFood from "../FeatureFood/FeatureFood";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <SectionTitle heading={"order online"} subHeading={"From 10.00am to 11.00px"}></SectionTitle>
          <FeatureFood></FeatureFood>
          <About_our_restaurant></About_our_restaurant>
        </div>
    );
};

export default Home;