import Aos from "aos";
import { useContext, useEffect, useState } from "react";
import 'aos/dist/aos.css';
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";



const Login = () => {
    useEffect(() => {
        Aos.init({
            duration: 1200,
        })
    }, [])

    const { loginAnUser, loginWithFacebook, loginWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleLogin = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        loginAnUser(email, password)
            .then(result => {
                console.log(result);
                toast('Login successfully');
                navigate('/');
                e.target.reset()
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })

    }

    const handleFacebookLogin =() => {
        loginWithFacebook()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error.message);
        })
    }
    const handleGoogleLogin =() => {
        loginWithGoogle()
        .then(result => {
            console.log(result.user);
            navigate('/')
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    return (
        <div id="login-form" data-aos="zoom-in" className="hero min-h-max py-16">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body" >
                    <p>Login Now!!!</p>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <p className="text-red-400"><small>{error}</small></p>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div className="px-8 pb-8 flex justify-end space-x-2">
                    <button onClick={handleFacebookLogin}><FaFacebook className="h-8 w-8"/></button>
                    <button onClick={handleGoogleLogin}><FaGoogle className="h-8 w-8"/></button>
                    <button><FaGithub className="h-8 w-8"/></button>
                </div>
                
            </div>
        </div>
    );
};

export default Login;