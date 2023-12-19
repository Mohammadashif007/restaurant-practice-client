import MenuItem from "../../../components/MenuItem/MenuItem";
import useMenu from "../../../hooks/useHooks";

const FeaturedFood = () => {
    const [menu] = useMenu();
    const items = menu.filter((item) => item.category === "popular");

    

    return (
        <div className="my-10">
            <div className="w-3/4 mx-auto grid md:grid-cols-2 gap-5 my-10">
                {items.map((item) => (
                    <MenuItem key={item._key} item={item}></MenuItem>
                ))}
            </div>
            <div className="text-center">
                <button className="btn btn-outline border-b-4">View Full Menu</button>
            </div>
        </div>
    );
};

export default FeaturedFood;
