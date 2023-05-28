import React from 'react';
import "./Nav.css"
import {useLocalState} from "../utils/UseLocalStorage";
import {Link} from "react-router-dom";
import image from "../avatar.jpg";

const NavBarDash = (props) => {
    const [jwt, setJwt] = useLocalState("", "jwt");

    const [user, setUser] = useLocalState(null, "user");
    const logout = () => {
        localStorage.removeItem('jwt');
        window.location.reload();
    }

    const handleClick = () => {
        props.slideHandle();
    }
    return (
        <React.Fragment>
            <nav
                // navbar  navbar-expand-lg blur border-radius-xl top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4
                className=" navbar navbar-main blur navbar-expand-lg px-0 mx-4 shadow border-radius-xl ">
                <div className="container-fluid ps-2 pe-0 py-1 px-3">
                    <button className="btnn" onClick={handleClick}
                            style={{backgroundColor: "transparent", borderColor: "transparent"}}
                    ><i className="bi bi-list"></i></button>
                    <a className="navbar-brand font-weight-bolder ms-lg-0 ms-3 "

                       href="../pages/dashboard.html">
                        &nbsp;
                        Dashboard
                    </a>
                    <button className="navbar-toggler shadow-none ms-2" type="button"
                            data-bs-toggle="collapse" data-bs-target="#navigation"
                            aria-controls="navigation" aria-expanded="false"
                            aria-label="Toggle navigation">
                                   <span className="navbar-toggler-icon mt-2">
                                     <span className="navbar-toggler-bar bar1"></span>
                                     <span className="navbar-toggler-bar bar2"></span>
                                     <span className="navbar-toggler-bar bar3"></span>
                                    </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navigation">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link d-flex align-items-center me-2 active" to={"/"}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link d-flex align-items-center me-2 active" to={"/accomodations"}>
                                    Accomodations
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link d-flex align-items-center me-2 active" to={"/restaurants"}>
                                    Restaurants
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link d-flex align-items-center me-2 active"
                                      to={"/events_activities"}>
                                    Activities & Events
                                </Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link d-flex align-items-center me-2 active" to={"/shops"}>
                                    Shops
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav d-lg-flex d-none">
                            <li className="nav-item d-flex align-items-center" style={{marginTop: "0px"}}>
                                <img src={user.photo === null ? image : user.photo} height="40px" width="40px"
                                     style={{borderRadius: "100%", objectFit: "contain"}}/>

                            </li>
                            <li cl className="menu-item menu-item-has-children arrow"
                                style={{marginLeft: "25px", marginTop: "10px"}}>
                                <Link to={"/profile"}> {user.firstname}</Link>

                            </li>
                            <li cl className="menu-item menu-item-has-children arrow"
                                style={{marginLeft: "25px", marginRight: "25px"}}>

                                <button className="btn btn-primary"
                                        style={{height: "25px ", paddingTop: "5px", marginTop: "10px"}}
                                        onClick={logout}> Logout
                                </button>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
};

export default NavBarDash;
