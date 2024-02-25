import { useContext } from "react";
import { IoMdCart } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from 'react-toastify';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
                toast('Logout successfully');
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <header id="header" className="bg-transparent">
            {/* Upper Navbar */}
            <div className="h-20 container mx-auto px-3 flex items-center justify-between max-w-6xl">
                <img className="w-28 rounded hidden sm:block" src={'https://i.ibb.co/N30sLt0/techhub.jpg'} alt="" />
                <div className="searchbar flex items-center">
                    <input type="text" className="bg-gray-100 text-gray-900 px-4 py-2 rounded-s-md w-48" placeholder="Search..." />
                    <button className="bg-gray-800 text-white px-4 py-2 rounded-e-md">Search</button>
                </div>
                <div className="flex items-center">
                    <Link to={'/cart'}>
                        <IoMdCart className="w-10 h-10 mr-2 text-gray-700 hidden sm:block"></IoMdCart>
                    </Link>
                    {
                        user ?
                            <button onClick={handleLogout} className="btn bg-white text-black font-bold border-none hover:bg-white hover:text-black">Logout</button>
                            : <Link to={'/my-account'}><button className="btn bg-white text-black font-bold border-none hover:bg-white hover:text-black">Log In <br /> Register</button></Link>
                    }
                </div>
            </div>
            <div className="border-b border-gray-200"></div>
            {/* Lower Navbar */}
            <nav className="h-12 container max-w-6xl mx-auto px-3 flex justify-center items-center text-black">
                <NavLink to={'/'} className="px-4 py-2 font-semibold rounded hover:bg-blue-400 hover:text-white">Home</NavLink>
                <NavLink to={'/'} className="px-4 py-2 font-semibold rounded hover:bg-blue-400 hover:text-white">Campaigns</NavLink>
                <NavLink to={'/'} className="px-4 py-2 font-semibold rounded hover:bg-blue-400 hover:text-white">Showrooms</NavLink>
                <NavLink to={'/add-products'} className="px-4 py-2 font-semibold rounded hover:bg-blue-400 hover:text-white">Add Product</NavLink>
            </nav>
            <div className="border-b border-gray-200"></div>
        </header>
    );
};

export default Header;