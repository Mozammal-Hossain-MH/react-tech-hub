import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className="flex items-center justify-center h-screen">
            <span className="loading loading-spinner loading-lg text-info"></span>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate to={'/my-account'}></Navigate>;
};

export default PrivateRoute;