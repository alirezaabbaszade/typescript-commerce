import React from 'react';
import HomeComponent from "../components/home";
import {useNavigate} from "react-router-dom";
import {ROUTE_LOGIN, ROUTE_REGISTER} from "../constants/routes";

const Home = () => {
    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate(ROUTE_LOGIN)
        console.log("click")
    }
    const navigateToSignUp = () => {
        navigate(ROUTE_REGISTER)
    }
    return (
            <HomeComponent navigateLogin={navigateToLogin} navigateSignUp={navigateToSignUp}/>
    );
};

export default Home;