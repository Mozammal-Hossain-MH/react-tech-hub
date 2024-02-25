import { useContext, useEffect, useState } from "react";
import 'aos/dist/aos.css';
import Aos from "aos";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const Register = () => {
    useEffect(() => {
        Aos.init({
            duration: 1200,
        })
    }, [])

    const [error, setError] = useState('');
    const { createAnUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        setError('');

        const email = e.target.email.value;
        const password = e.target.password.value;

        if (password.length < 6) {
            setError('Password should be at least 6 character');
            return;
        }
        else if (!/(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])/.test(password)) {
            setError('password should have a uppercase and a special character');
            return;
        }

        createAnUser(email, password)
            .then(result => {
                console.log(result.user);
                toast('User created successfully');
                navigate('/');
                e.target.reset();
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }

    return (
        <div id="register-form" data-aos="zoom-in" className="hero min-h-max py-16">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleRegister} className="card-body">
                    <p>Register Now!!!</p>
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
                    </div>
                    <p className="text-red-400"><small>{error}</small></p>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;