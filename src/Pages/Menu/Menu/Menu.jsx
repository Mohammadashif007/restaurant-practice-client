import menuCover from "../../../assets/menu/banner3.jpg";
import Cover from "../../../components/Cover/Cover";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useHooks";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImage from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImage from "../../../assets/menu/pizza-bg.jpg";
import saladImage from "../../../assets/menu/salad-bg.jpg";
import soupImage from "../../../assets/menu/soup-bg.jpg";

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
soup
    return (
        <div>
            <Cover image={menuCover} title={"OUR MENU"}></Cover>
            <SectionTitle
                heading={"TODAY'S OFFER"}
                subHeading={"Don't Miss"}
            ></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={dessert} coverImage={dessertImage} coverTitle={'dessert'}></MenuCategory>
            <MenuCategory items={pizza} coverImage={pizzaImage} coverTitle={'pizza'}></MenuCategory>
            <MenuCategory items={salad} coverImage={saladImage} coverTitle={'salad'}></MenuCategory>
            <MenuCategory items={soup} coverImage={soupImage} coverTitle={'soup'}></MenuCategory>
        </div>
    );
};

export default Menu;
