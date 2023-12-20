import FoodCard from "../../../components/FoodCard/FoodCard";

const OrderTab = ({items}) => {
    return (
        <div>
            <div className="w-3/4 mx-auto grid md:grid-cols-3 gap-5 my-14">
                {items.map((item) => (
                    <FoodCard key={item._id} item={item}></FoodCard>
                ))}
            </div>
        </div>
    );
};

export default OrderTab;
