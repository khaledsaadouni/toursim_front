import React from 'react';
import "./Nav.css"

const NavBarDash = (props) => {
    const handleClick = () => {
        props.slideHandle();
    }
    return (
        <React.Fragment>
            <nav

                className="navbar  navbar-expand-lg blur border-radius-xl top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
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
                                <a className="nav-link d-flex align-items-center me-2 active"
                                   aria-current="page" href="../pages/dashboard.html">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-2" href="../pages/profile.html">
                                    Services
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-2" href="../pages/sign-up.html">
                                    <i className="fas fa-user-circle opacity-6 text-dark me-1"></i>
                                    Sign Up
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-2" href="../pages/sign-in.html">
                                    <i className="fas fa-key opacity-6 text-dark me-1"></i>
                                    Sign In
                                </a>
                            </li>
                        </ul>
                        <ul className="navbar-nav d-lg-flex d-none">
                            <li className="nav-item d-flex align-items-center">
                                <a className="btn btn-outline-primary btn-sm mb-0 me-2" target="_blank"
                                   href="https://www.creative-tim.com/builder/material?ref=navbar-dashboard">Online
                                    Builder</a>
                            </li>
                            <li className="nav-item">
                                <a href="https://www.creative-tim.com/product/material-dashboard"
                                   className="btn btn-sm mb-0 me-1 bg-gradient-dark">Free download</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
};

export default NavBarDash;
