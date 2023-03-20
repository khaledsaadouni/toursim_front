import React from 'react';
import {Link} from "react-router-dom";

const NavCom = () => {

    return (
        <React.Fragment>
            <div className="nav_wrapper_inner">
                <div id="menu_border_wrapper">
                    <div className="menu-main-menu-container">
                        <ul id="main_menu" className="nav" style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <li className="menu-item ">
                                <Link to={"/"}>
                                    Home
                                </Link>
                            </li>
                            <li className="menu-item menu-item-has-children arrow">
                                <a href="  ">Services</a>
                                <ul className="sub-menu">
                                    <li className="menu-item">
                                        <Link to={"/accomodations"}>
                                            Accomodations
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to={"/restaurants"}>
                                            Restaurants
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to={"/events_activities"}>
                                            Activities & Events
                                        </Link>

                                    </li>
                                    <li className="menu-item">
                                        <Link to={"/shops"}>
                                            Shops
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item   ">
                                <a href="">
                                    Programs
                                </a>
                            </li>
                            <li className="menu-item   ">
                                <a href="">
                                    Destinations
                                </a>
                            </li>
                            <li className="menu-item   ">
                                <a href="">
                                    My Reservations
                                </a>
                            </li>
                            <li className="menu-item   ">
                                <Link to={"/aboutUs"}>
                                    About Us
                                </Link>

                            </li>

                            <li className="menu-item menu-item-has-children arrow"
                                style={{display: "flex", alignItems: "center"}}>

                                <img src="assets/upload/avatar.jpg" height="40px" width="40px"
                                     style={{borderRadius: "100%"}}/>

                                <a href="#">User</a>

                                <ul className="sub-menu" style={{marginTop: "150px"}}>
                                    <li className="menu-item"><a
                                        href="accordion-toggles.html">Settings </a>
                                    </li>
                                    <li className="menu-item">
                                        <Link to={"/dashboard"}>Dashboard</Link>

                                    </li>
                                    <li className="menu-item"><a href="alert-boxes.html">
                                        Log out</a></li>

                                </ul>
                            </li>

                            <li className="menu-item  " style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>

                                <button className="     nav-outline-secondary"> sign in</button>
                                <button className="  nav-secondary"> sign up</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default NavCom;
