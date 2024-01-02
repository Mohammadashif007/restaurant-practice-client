import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SignUp = () => {

    const {createUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState:{errors}
    } = useForm();
    
    const email = watch('email');

    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            updateUserProfile(data.name, data.photoURL)
            .then(() => {
                const userInfo = {
                    name: data.name,
                    email: data.email
                }
                // create entry in the data base
                axiosPublic.post('/users', userInfo)
                .then(res => {
                    if(res.data.insertedId){
                        reset()
                        Swal.fire({
                            icon: "success",
                            title: "User created successfully",
                            showConfirmButton: false,
                            timer: 1500
                          });
                    }
                })
              }).catch((error) => {
                console.log(error.message)
              });
            navigate('/')
        })
    }

  
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="card-body"
                    >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                {...register("name", { required: "Name field is required" })}
                                placeholder="Name"
                                className="input input-bordered"
                            />
                            <p>{errors.name?.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                {...register("email", { required: "Email field is required" })}
                                placeholder="Email"
                                className="input input-bordered"
                            />
                            <p>{errors.email?.message}</p>
                            <p>{email}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                {...register("photo", { required: "Photo URL field is required" })}
                                placeholder="Photo URL"
                                className="input input-bordered"
                            />
                            <p>{errors.photo?.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/ })}
                                placeholder="Password"
                                className="input input-bordered"
                            />
                            {errors.password?.type ==="required" && <p>{"Password field must be required"}</p>}
                            {errors.password?.type ==="minLength" && <p>{"Password must be more then 6 characters"}</p>}
                            {errors.password?.type ==="maxLength" && <p>{"Password should not be more then 20 characters"}</p>}
                            {errors.password?.type ==="pattern" && <p>{"Password must be one upper case one lower case and one special character"}</p>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <small className="p-4">
                        Already have an account. Please{" "}
                        <Link to="/login">Login</Link>
                    </small>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
