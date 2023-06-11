import React from 'react';
import {Link} from "react-router-dom";
import {useLocalState} from "../utils/UseLocalStorage";
import image from "../avatar.jpg";


const NavCom = (props) => {

    const [jwt, setJwt] = useLocalState("", "jwt");
    const [user, setUser] = useLocalState(null, "user");

    const logout = async () => {
        localStorage.removeItem('jwt');
        localStorage.removeItem('user');
        window.location.reload();
    }
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
                                        <Link to={"/accommodations"}>
                                            Accomodations
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to={"/events_activities"}>
                                            Activities & Events
                                        </Link>

                                    </li>
                                    <li className="menu-item">
                                        <Link to={"/restaurants"}>
                                            Restaurants
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to={"/shops"}>
                                            Shops
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            {/*<li className="menu-item   ">*/}
                            {/*    <a href="">*/}
                            {/*        Programs*/}
                            {/*    </a>*/}
                            {/*</li>*/}
                            {jwt && user !== null ? (
                                <li className="menu-item   ">
                                    <Link to={"/reservations"}>
                                        My Reservations
                                    </Link>
                                </li>) : null}
                            {/*<li className="menu-item   ">*/}
                            {/*    <Link to={"/aboutUs"}>*/}
                            {/*        About Us*/}
                            {/*    </Link>*/}

                            {/*</li>*/}
                            {jwt ? (
                                <li className="menu-item menu-item-has-children arrow"
                                    style={{display: "flex", alignItems: "center"}}>
                                    {user.photo !== null ? (
                                        <img src={encodeURI(user.photo)} height="40px"
                                             style={{borderRadius: "100%", objectFit: "contain"}}/>) : (
                                        <img src={image} height="40px"
                                             style={{borderRadius: "100%", objectFit: "contain"}}/>)}

                                    <a> {user.firstname}</a>
                                    <ul className="sub-menu" style={{ marginTop: "150px" }}>
                                        <li className="menu-item">
                                            <Link
                                                to={user.role === "Client" ? "/profile/main" : "/dashboard/profile"}>Profile </Link>
                                        </li>
                                        {user.role !== "Client" ?
                                            (<li className="menu-item">
                                                <Link to={"/dashboard/main"}>Dashboard</Link>

                                            </li>) : null}
                                        <li className="menu-item">
                                            <button style={{
                                                color: "#FF4A52",
                                                marginLeft: "12px",
                                                borderColor: "transparent",
                                                backgroundColor: "transparent"
                                            }} onClick={logout}>Log out
                                            </button>
                                        </li>

                                    </ul>
                                </li>) : (

                                <li className="menu-item  " style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    <Link
                                        to={"/sign/in"}>
                                        <button className="     nav-outline-secondary">

                                            Sign in


                                        </button>
                                    </Link><Link
                                        to={"/sign/up"}>
                                        <button className="  nav-secondary">

                                            Sign up

                                        </button>
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default NavCom;
