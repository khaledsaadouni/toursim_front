import React from 'react';
import {useLocalState} from "../utils/UseLocalStorage";
import {Navigate, useParams} from "react-router-dom";
import Nav from "../navBar/Nav";
import ProfileCard from "./ProfileCard";
import Settings from "./Settings";
import Password from "./Password";

const Profile = () => {
    const {page} = useParams();
    const show = () => {
        switch (page) {
            case "main":
                return <ProfileCard/>;
            case "settings":
                return <Settings/>;
            case "password":
                return <Password/>;
            default:
                return <ProfileCard/>;


        }
    };

    const [jwt, setJwt] = useLocalState("", "jwt");
    return jwt === "" ? <Navigate to="/"/> : (
        <React.Fragment>
            <Nav></Nav>
            {show()}
        </React.Fragment>
    );
};

export default Profile;
