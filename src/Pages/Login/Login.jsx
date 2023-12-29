import { useContext, useEffect, useState } from "react";
import {
    loadCaptchaEnginge,
    LoadCanvasTemplate,
    validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const {signInUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
   

    useEffect(() => {
        loadCaptchaEnginge(6);
    },[])



    const handleForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
        .then(result => {
            const user = result.user;
            navigate(from, {replace: true});
            Swal.fire({
                icon: "success",
                title: "Login successful!",
                showConfirmButton: false,
                timer: 1500
              });
              navigate(from,  { replace: true })
        })
        .catch(error => {
            const errorMessage = error.message;
            console.log(errorMessage)
        })
        
    };

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false);
        }
        else{
            setDisabled(true)
        }

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card  w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleForm} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                                
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                                
                            />
                            <label className="label">
                                <a
                                    href="#"
                                    className="label-text-alt link link-hover"
                                >
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control">
                            <LoadCanvasTemplate />
                            <input
                                type="text"
                                name="captcha"
                                onBlur={handleValidateCaptcha}
                                placeholder="Type Captcha"
                                className="input input-bordered mt-3"
                                
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button disabled={false}  className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <small className="p-4">New here ? Please <Link to="/signup">create an account</Link></small>
                </div>
            </div>
        </div>
    );
};

export default Login;
