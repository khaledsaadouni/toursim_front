import Home from "./home/Home";
import React from "react";
import {Route, Routes} from "react-router-dom";
import Accomodations from "./accommodation/Accomodations";
import Activities from "./activities_events/Activies";
import Restaurants from "./restaurants/Restaurants";
import Shops from "./shops/Shops";
import Destinations from "./destination/Destinations";
import Accomodation_Detail from "./accommodation/Accomodation_Detail";
import AboutUs from "./about/Aboutus";
import Dashboard from "./dashboard/Dashboard";
import Sign from "./sign/Sign";

function App() {
    return (
        <React.Fragment>


            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/accomodations" element={<Accomodations/>}/>
                <Route path="/accomodation" element={<Accomodation_Detail/>}/>
                <Route path="/events_activities" element={<Activities/>}/>
                <Route path="/restaurants" element={<Restaurants/>}/>
                <Route path="/shops" element={<Shops/>}/>
                <Route path="/destinations" element={<Destinations/>}/>
                <Route path="/aboutUs" element={<AboutUs/>}/>
                <Route path="/dashboard/:page" element={<Dashboard/>}/>
                <Route path="/sign/:p" element={<Sign/>}/>
            </Routes>
            {/*<Footer/>*/}
        </React.Fragment>
    );
}

export default App;
