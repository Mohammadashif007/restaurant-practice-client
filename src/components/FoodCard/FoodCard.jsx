import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
// import useCart from "../../hooks/useCart";


const FoodCard = ({ item }) => {
    const { image, price, name, recipe, _id } = item;
    const navigate = useNavigate();
    const {user} = useAuth();
    const location = useLocation(); 
    const axiosSecure = useAxiosSecure(); 
    // const [,refetch] = useCart();
    const [, refetch] = useCart();

    const handleAddToCart = () => {
        if(user && user?.email){
            const cartItem = {
                menuId: _id,
                email : user.email,
                name,
                image, price
            }

            axiosSecure.post('/carts', cartItem)
            .then(res => {
                if(res.data.insertedId){
                    Swal.fire({
                        icon: "success",
                        title: `${name} added to the cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                    //   refetch();
                    refetch();
                }
            })
        }
        else{
            Swal.fire({
                title: "Please, logged in",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state:{from:location}})
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
                        onClick={handleAddToCart}
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
