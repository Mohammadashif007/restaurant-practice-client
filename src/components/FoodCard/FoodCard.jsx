import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
    const { image, price, name, recipe } = item;
    const navigate = useNavigate();
    const location = useLocation();
    // const {user} = useContext(AuthContext);
    const auth = useAuth();
    const { user } = auth;

    const handleAddToCart = (food) => {
        console.log(food);
        if (user && user?.email) {
            // cart send to the db
        } else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Go To login!",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } });
                }
            });
        }
    };

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
                    <button
                        onClick={() => handleAddToCart(item)}
                        className="btn btn-outline border-b-4 text-[#BB8506]"
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
