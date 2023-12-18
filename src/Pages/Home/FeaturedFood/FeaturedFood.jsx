import { useEffect, useState } from "react";
import MenuItem from "../../../components/MenuItem/MenuItem";

const FeaturedFood = () => {
    const [menu, setMenu] = useState([]);

    const items = menu.filter(item => item.category === 'popular');
   
    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => setMenu(data))
    },[])
    return (
        <div className="w-3/4 mx-auto grid md:grid-cols-2 gap-5 my-10">
            {
                items.map(item => <MenuItem key={item._key} item={item}></MenuItem>)
            }
        </div>
    );
};

export default FeaturedFood;