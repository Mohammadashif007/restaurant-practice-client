import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Banner from "../Banner/Banner";
import FeatureFood from "../FeatureFood/FeatureFood";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <SectionTitle heading={"order online"} subHeading={"From 10.00am to 11.00px"}></SectionTitle>
          <FeatureFood></FeatureFood>
        </div>
    );
};

export default Home;