import Cover from "../../../components/Cover/Cover";
import MenuItem from "../../../components/MenuItem/MenuItem";

const MenuCategory = ({items, coverImage, coverTitle}) => {
    return (
        <div className="w-3/4 mx-auto">
            {coverTitle && <Cover image={coverImage} title={coverTitle}></Cover>}
            <div className=" mx-auto grid md:grid-cols-2 gap-5 my-10">
                {items.map((item) => (
                    <MenuItem key={item._key} item={item}></MenuItem>
                ))}
            </div>
        </div>
    );
};

export default MenuCategory;
