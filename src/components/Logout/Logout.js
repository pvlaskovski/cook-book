import { useEffect } from "react";
import firebaseService from '../../services/firebase';
import { useNavigate } from "react-router";

function Logout(props) {
    const navigate = useNavigate();

    useEffect(() => {
        firebaseService.logout();
        navigate('/');
    }, [navigate]);

    return null;
}

export default Logout;