import Cover from "../../../components/Cover/Cover";
import menuCover from "../../../assets/menu/banner3.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
const Menu = () => {
    return (
        <div>
            <Cover image={menuCover} title={"our menu"}></Cover>
            <SectionTitle subHeading={"Don't Miss"} heading={"TODAY'S OFFER"}></SectionTitle>
        </div>
    );
};

export default Menu;