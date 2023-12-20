import { Link } from "react-router-dom";
import Cover from "../../../components/Cover/Cover";
import MenuItem from "../../../components/MenuItem/MenuItem";

const MenuCategory = ({ items, coverImage, coverTitle }) => {
    return (
        <div className="my-10">
            {coverTitle && (
                <Cover image={coverImage} title={coverTitle}></Cover>
            )}
            <div className="w-3/4 mx-auto grid md:grid-cols-2 gap-5 my-10">
                {items.map((item) => (
                    <MenuItem key={item._id} item={item}></MenuItem>
                ))}
            </div>
            <div className="text-center">
                <Link to={`/order/${coverTitle}`}>
                    <button className="btn btn-outline border-b-4">
                        ORDER YOUR FAVORITE FOOD
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;
