import Cover from "../../components/Cover/Cover";
import contactImage from "../../assets/contact/banner.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Contact_us = () => {
    return (
        <div>
            <Cover image={contactImage} title={"contact us"}></Cover>
            <SectionTitle heading={"OUR LOCATION"} subHeading={"Visit Us"}></SectionTitle>
        </div>
    );
};

export default Contact_us;