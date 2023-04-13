import React, {useState} from 'react';
import {Link, Navigate, useParams} from 'react-router-dom';
import MainDash from "./main/MainDash";
import Offers from "./offers/Offers";
import Programs from "./programs/Programs";

import "./Dashboard.css"
import NavBarDash from "./NavBarDash";
import ProfileCard from "../profile/ProfileCard";
import {useLocalState} from "../utils/UseLocalStorage";
import Settings from "../profile/Settings";
import Password from "../profile/Password";
import AddOffer from "./offers/AddOffer";
import EditAccom from "./offers/EditAccom";
import EditResto from "./offers/EditResto";
import EditEvent from "./offers/EditEvent";
import AddShop from "./offers/AddShop";
import EditShop from "./offers/EditShop";
import Reserve from "./reservation/Reserve";

const Dashboard = () => {
    const {page} = useParams();
    const [state, setState] = useState("show");


    const handleClick = () => {
        state === "show" ? setState("hidden") : setState("show");
    }
    const show = () => {
        switch (page) {
            case "main":
                return <MainDash/>;
            case "offers":
                return <Offers/>;
            case "programs":
                return <Programs/>;
            case "profile":
                return <ProfileCard/>;
            case "settings":
                return <Settings/>;
            case "editAccom":
                return <EditAccom/>;
            case "editResto":
                return <EditResto/>;
            case "editEvent":
                return <EditEvent/>;
            case "editShop":
                return <EditShop/>;
            case "addOffer":
                return <AddOffer/>;
            case "addShop":
                return <AddShop/>;
            case "password":
                return <Password/>;
            case "reservations":
                return <Reserve/>;
            default:
                return <MainDash/>;

        }
    };
    const classmethod = () => {
        let classes = "  g-sidenav-";
        classes += state === "show" ? "hidden" : "show";
        return classes
    }
    const [jwt, setJwt] = useLocalState("", "jwt");


    return jwt === "" ? <Navigate to="/"/> : (
        <div class={classmethod()}>
            <aside
                className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark"
                id="sidenav-main">

                <div className="sidenav-header">
                    <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
                       aria-hidden="true" id="iconSidenav"></i>
                </div>
                <div className="horizontal light mt-0 mb-2">
                    <div className=" " id="sidenav-collapse-main">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className={`nav-link text-white   ${page === "main" && "bg-gradient-primary"}`}
                                      to={"/dashboard/main"} style={{color: "white"}}>

                                    <div
                                        className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className="material-icons opacity-10">dashboard</i>
                                    </div>
                                    <span className="nav-link-text ms-1">Dashboard</span>

                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link text-white   ${page === "offers" && "bg-gradient-primary"}`}
                                      to={"/dashboard/offers"} style={{color: "white"}}>
                                    <div
                                        className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className="material-icons opacity-10">table_view</i>
                                    </div>
                                    <span className="nav-link-text ms-1">  Offers</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link text-white   ${page === "reservations" && "bg-gradient-primary"}`}
                                    to={"/dashboard/reservations"} style={{color: "white"}}>
                                    <div
                                        className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className="material-icons opacity-10">receipt_long</i>
                                    </div>
                                    <span className="nav-link-text ms-1">Reservations</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link text-white   ${page === "programs" && "bg-gradient-primary"}`}
                                    to={"/dashboard/programs"} style={{color: "white"}}>
                                    <div
                                        className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className="material-icons opacity-10">view_in_ar</i>
                                    </div>
                                    <span className="nav-link-text ms-1"> Programs</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link text-white   ${page === "profile" && "bg-gradient-primary"}`}
                                    to={"/dashboard/profile"} style={{color: "white"}}>
                                    <div
                                        className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className="material-icons opacity-10">person</i>
                                    </div>
                                    <span className="nav-link-text ms-1"> Profile</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link text-white   ${page === "settings" && "bg-gradient-primary"}`}
                                    to={"/dashboard/settings"} style={{color: "white"}}>
                                    <div
                                        className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className="material-icons opacity-10">settings</i>
                                    </div>
                                    <span className="nav-link-text ms-1"> Settings</span>
                                </Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </aside>
                <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">

                    <NavBarDash slideHandle={handleClick}/>


                    {show()}
                </main>
            </div>
        );
    }
;

export default Dashboard;
