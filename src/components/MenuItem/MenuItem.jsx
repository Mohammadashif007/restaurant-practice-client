const MenuItem = ({item}) => {
    const {image, price, name, recipe} = item;
    return (
        // <div className="card  bg-base-100 shadow-xl">
        //     <figure>
        //         <img
        //             src={image}
        //             alt="Shoes"
        //         />
        //     </figure>
        //     <p>{price}</p>
        //     <div className="card-body">
        //         <h2 className="card-title">{name}</h2>
        //         <p>{recipe}</p>
        //         <div className="card-actions justify-end">
        //             <button className="btn btn-primary">Buy Now</button>
        //         </div>
        //     </div>
        // </div>
        <div className="flex gap-8 items-center">
            <img className="w-[100px] h-[80px] rounded-r-full rounded-bl-full" src={image} alt="" />
            <div>
                <h2 className="text-[22px] my-2">{name}-----------</h2>
                <p>{recipe}</p>
            </div>
            <p className="text-[20px] text-[#BB8506]">${price}</p>
        </div>
    );
};

export default MenuItem;
