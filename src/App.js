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
import Profile from "./profile/Profile";
import EventDetail from "./activities_events/Acitvity_detail";
import Restaurant_Detail from "./restaurants/Restaurant_detail";
import MyReservation from "./reservations/MyReservation";
import ShopDetail from "./shops/Shop_Detail";
import Programs from "./programs/programs";
import Program_detail from "./programs/program_detail";

function App() {

    return (<
            React.Fragment>
            <
                Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/accommodations" element={< Accomodations/>}/>
                <Route path="/accommodation/:id" element={< Accomodation_Detail/>}/>
                <Route path="/programs" element={< Programs/>}/>
                <Route path="/program/:id" element={< Program_detail/>}/>
                <Route path="/event/:id" element={< EventDetail/>}/>
                <Route path="/restoration/:id" element={< Restaurant_Detail/>}/>
                <Route path="/shop/:id" element={< ShopDetail/>}/>
                <Route path="/events_activities" element={< Activities/>}/>
                <Route path="/restaurants" element={< Restaurants/>}/>
                <Route path="/reservations" element={< MyReservation/>}/>
                <Route path="/shops" element={< Shops/>}/>
                <Route path="/destinations" element={< Destinations/>}/>
                <Route path="/aboutUs" element={< AboutUs/>}/>
                <Route path="/dashboard/:page/:id?" element={< Dashboard/>}/>
                <Route path="/sign/:p/:token?" element={< Sign/>}/>
                <Route path="/profile/:page" element={< Profile/>}/>
            < /Routes>

        </React.Fragment>
    );
}

export default App;