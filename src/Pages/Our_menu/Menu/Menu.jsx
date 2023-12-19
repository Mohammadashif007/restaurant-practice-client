import Cover from "../../../components/Cover/Cover";
import menuCover from "../../../assets/menu/banner3.jpg";
import Menu_food from "../Menu_food/Menu_food";

const Menu = () => {
    return (
        <div>
            <Cover image={menuCover} title={"our menu"}></Cover>
            <Menu_food></Menu_food>
        </div>
    );
};

export default Menu;