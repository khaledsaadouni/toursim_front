import React from 'react';
import {useLocalState} from "../utils/UseLocalStorage";
import {Navigate} from "react-router-dom";
import Nav from "../navBar/Nav";
import ProfileCard from "./ProfileCard";

const Profile = () => {

    const [jwt, setJwt] = useLocalState("", "jwt");
    return jwt === "" ? <Navigate to="/"/> : (
        <React.Fragment>
            <Nav></Nav>
            <ProfileCard></ProfileCard>
        </React.Fragment>
    );
};

export default Profile;
