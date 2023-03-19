import NavBar from "./navBar/NavBar";
import NavBarMobile from "./navBar/NavBarMobile";
import Home from "./home/Home";
import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";
import Accomodations from "./accommodation/Accomodations";
import Activities from "./activities_events/Activies";
import Restaurants from "./restaurants/Restaurants";
import Footer from "./footer/Footer";
import Shops from "./shops/Shops";
import Destinations from "./destination/Destinations";

function App() {
    return (
        <React.Fragment>


            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/accomodations" element={<Accomodations/>}/>
                <Route path="/events_activities" element={<Activities/>}/>
                <Route path="/restaurants" element={<Restaurants/>}/>
                <Route path="/shops" element={<Shops/>}/>
                <Route path="/destinations" element={<Destinations/>}/>
            </Routes>
            <Footer/>
        </React.Fragment>
    );
}

export default App;
