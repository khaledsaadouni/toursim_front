import React from 'react';
import image from "../home/image7.jpg";
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <React.Fragment>
            sgddfdsfdsf
            <div id="wrapper" className=" ">

                <div className="header_style_wrapper">
                    <div className="top_bar ">
                        <div className="standard_wrapper">
                            <div id="logo_wrapper">
                                <div id="menu_wrapper">
                                    <div id="nav_wrapper">
                                        <div id="logo_normal" className="logo_container">
                                            <div className="logo_align">
                                                <a id="custom_logo" className="logo_wrapper default" href="index.html">
                                                    <img src="assets/upload/logo@2x.png" alt="" width="92" height="22"/>
                                                </a>
                                            </div>
                                        </div>

                                        <div id="logo_transparent" className="logo_container">
                                            <div className="logo_align">
                                                <a id="custom_logo_transparent" className="logo_wrapper hidden"
                                                   href="index.html">
                                                    <img src="assets/upload/logo@2x_white.png" alt="" width="92"
                                                         height="22"/>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="nav_wrapper_inner">
                                            <div id="menu_border_wrapper">
                                                <div className="menu-main-menu-container">
                                                    <ul id="main_menu" className="nav" style={{
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center"
                                                    }}>
                                                        <li className="menu-item  ">
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
                                                            <a href="">
                                                                About Us
                                                            </a>
                                                        </li>

                                                        <li className="menu-item menu-item-has-children arrow"
                                                            style={{display: "flex", alignItems: "center"}}>

                                                            <img src="assets/upload/avatar.jpg" height="40px"
                                                                 width="40px" style={{borderRadius: "100%"}}/>

                                                            <a href="#">User</a>

                                                            <ul className="sub-menu" style={{marginTop: "150px"}}>
                                                                <li className="menu-item"><a
                                                                    href="accordion-toggles.html">Settings </a>
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

                                                            <button className="     nav-outline-secondary"> sign in
                                                            </button>
                                                            <button className="  nav-secondary"> sign up</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
};

export default Nav;
