const FoodCard = ({ item }) => {
    const { image, price, name, recipe } = item;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt="food" />
            </figure>
            <p className="absolute bg-slate-600 text-white px-2 rounded right-0 top-3 mr-3">
                {price}
            </p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn btn-outline border-b-4 text-[#BB8506]">View Full Menu</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;