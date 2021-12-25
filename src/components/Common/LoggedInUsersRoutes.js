import { Navigate, Outlet } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext";

const LoggedInUsersRoutes = () => {
    const { user } = useAuthContext();

    return user.uid !==""
        ? <Outlet />
        : <Navigate to="/login" />
}

export default LoggedInUsersRoutes;