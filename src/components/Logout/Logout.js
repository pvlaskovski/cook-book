import { useEffect, useState } from "react";
import firebaseService from '../../services/firebase';
import { useContext } from "react";
import { AuthContext, useAuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router";

import toast from 'react-hot-toast';

function Logout(props){
    const {logout} = useAuthContext();
    const navigate = useNavigate();
    useEffect(()=>{
        firebaseService.logout();
        logout();
        navigate('/');
    }, []);

    return null;
}

export default Logout;