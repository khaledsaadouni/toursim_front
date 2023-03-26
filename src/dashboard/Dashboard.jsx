import React, {useState} from 'react';
import {Navigate, useParams} from 'react-router-dom';
import MainDash from "./main/MainDash";
import Offers from "./offers/Offers";
import Programs from "./programs/Programs";

import "./Dashboard.css"
import NavBarDash from "./NavBarDash";
import ProfileCard from "../profile/ProfileCard";
import {useLocalState} from "../utils/UseLocalStorage";

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
            default:
                    return <MainDash/>;

            }
        };
    const classmethod = () => {
        let classes = "bg-gray-200 g-sidenav-";
        return classes += state === "show" ? "hidden" : "show";
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
                    <a className="navbar-brand m-0"
                       href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard " target="_blank">
                            <span className="ms-1 font-weight-bold text-white">DASHBOARD</span>
                        </a>
                    </div>
                    <div className="horizontal light mt-0 mb-2">
                        <div className=" " id="sidenav-collapse-main">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link text-white   bg-gradient-primary"

                                       href="  ">
                                        <div
                                            className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                            <i className="material-icons opacity-10">dashboard</i>
                                        </div>
                                        <span className="nav-link-text ms-1">Dashboard</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white " href="../pages/tables.html">
                                        <div
                                            className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                            <i className="material-icons opacity-10">table_view</i>
                                        </div>
                                        <span className="nav-link-text ms-1">  Offers</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white " href="../pages/billing.html">
                                        <div
                                            className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                            <i className="material-icons opacity-10">receipt_long</i>
                                        </div>
                                        <span className="nav-link-text ms-1">Billing</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white " href="../pages/virtual-reality.html">
                                        <div
                                            className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                            <i className="material-icons opacity-10">view_in_ar</i>
                                        </div>
                                        <span className="nav-link-text ms-1"> Programs</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white " href="../pages/virtual-reality.html">
                                        <div
                                            className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                            <i className="material-icons opacity-10">person</i>
                                        </div>
                                        <span className="nav-link-text ms-1"> Profile</span>
                                    </a>
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
