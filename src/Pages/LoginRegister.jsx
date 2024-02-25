import { useState } from "react";
import Login from "../Components/Login";
import Register from "../Components/Register";

const LoginRegister = () => {
    const [login, setLogin] = useState(true);


    return (
        <div className="bg-[#F1F1F1]">
            <h1 className="text-5xl text-black font-bold text-center py-20">My Account</h1>
            <div className="text-center mb-3">
                <button onClick={() => setLogin(true)} className={`text-3xl ${login ? 'text-black' : 'text-gray-400'}  mr-3 font-semibold`}>Login</button>
                <button onClick={() => setLogin(false)} className={`text-3xl ${login ? 'text-gray-400' : 'text-black'} ml-3 font-semibold`}>Register</button>
            </div>
            {
                login ?
                    <Login></Login>
                    : <Register></Register>
            }

        </div>
    );
};

export default LoginRegister;