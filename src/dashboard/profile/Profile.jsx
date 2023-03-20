import React from 'react';

const Profile = () => {
    return (
        <React.Fragment>

            <div className="main-content position-relative max-height-vh-100 h-100">
                <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
                     id="navbarBlur" data-scroll="true">
                    <div className="container-fluid py-1 px-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                                <li className="breadcrumb-item text-sm"><a className="opacity-5 text-dark"
                                                                           href="javascript:;">Pages</a></li>
                                <li className="breadcrumb-item text-sm text-dark active" aria-current="page">Profile
                                </li>
                            </ol>
                            <h6 className="font-weight-bolder mb-0">Profile</h6>
                        </nav>
                        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                            <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                                <div className="input-group input-group-outline">
                                    <label className="form-label">Type here...</label>
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <ul className="navbar-nav  justify-content-end">
                                <li className="nav-item d-flex align-items-center">
                                    <a className="btn btn-outline-primary btn-sm mb-0 me-3" target="_blank"
                                       href="https://www.creative-tim.com/builder/material?ref=navbar-dashboard">Online
                                        Builder</a>
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    <a href="../pages/sign-in.html"
                                       className="nav-link text-body font-weight-bold px-0">
                                        <i className="fa fa-user me-sm-1"></i>
                                        <span className="d-sm-inline d-none">Sign In</span>
                                    </a>
                                </li>
                                <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                                    <a href="javascript:;" className="nav-link text-body p-0" id="iconNavbarSidenav">
                                        <div className="sidenav-toggler-inner">
                                            <i className="sidenav-toggler-line"></i>
                                            <i className="sidenav-toggler-line"></i>
                                            <i className="sidenav-toggler-line"></i>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item px-3 d-flex align-items-center">
                                    <a href="javascript:;" className="nav-link text-body p-0">
                                        <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
                                    </a>
                                </li>
                                <li className="nav-item dropdown pe-2 d-flex align-items-center">
                                    <a href="javascript:;" className="nav-link text-body p-0" id="dropdownMenuButton"
                                       data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fa fa-bell cursor-pointer"></i>
                                    </a>
                                    <ul className="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4"
                                        aria-labelledby="dropdownMenuButton">
                                        <li className="mb-2">
                                            <a className="dropdown-item border-radius-md" href="javascript:;">
                                                <div className="d-flex py-1">
                                                    <div className="my-auto">
                                                        <img src="assets/img/team-2.jpg"
                                                             className="avatar avatar-sm  me-3 "/>
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="text-sm font-weight-normal mb-1">
                                                            <span className="font-weight-bold">New message</span> from
                                                            Laur
                                                        </h6>
                                                        <p className="text-xs text-secondary mb-0">
                                                            <i className="fa fa-clock me-1"></i>
                                                            13 minutes ago
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a className="dropdown-item border-radius-md" href="javascript:;">
                                                <div className="d-flex py-1">
                                                    <div className="my-auto">
                                                        <img src="assets/img/small-logos/logo-spotify.svg"
                                                             className="avatar avatar-sm bg-gradient-dark  me-3 "/>
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="text-sm font-weight-normal mb-1">
                                                            <span className="font-weight-bold">New album</span> by
                                                            Travis Scott
                                                        </h6>
                                                        <p className="text-xs text-secondary mb-0">
                                                            <i className="fa fa-clock me-1"></i>
                                                            1 day
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item border-radius-md" href="javascript:;">
                                                <div className="d-flex py-1">
                                                    <div
                                                        className="avatar avatar-sm bg-gradient-secondary  me-3  my-auto">
                                                        <svg width="12px" height="12px" viewBox="0 0 43 36"
                                                             version="1.1">
                                                            <title>credit-card</title>
                                                            <g stroke="none" stroke-width="1" fill="none"
                                                               fill-rule="evenodd">
                                                                <g transform="translate(-2169.000000, -745.000000)"
                                                                   fill="#FFFFFF" fill-rule="nonzero">
                                                                    <g transform="translate(1716.000000, 291.000000)">
                                                                        <g transform="translate(453.000000, 454.000000)">
                                                                            <path className="color-background"
                                                                                  d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                                                                  opacity="0.593633743"></path>
                                                                            <path className="color-background"
                                                                                  d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="text-sm font-weight-normal mb-1">
                                                            Payment successfully completed
                                                        </h6>
                                                        <p className="text-xs text-secondary mb-0">
                                                            <i className="fa fa-clock me-1"></i>
                                                            2 days
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container-fluid px-2 px-md-4">
                    <div className="page-header min-height-300 border-radius-xl mt-4"
                         style={{backgroundColor: "black"}}>
                        <span className="mask  bg-gradient-primary  opacity-6"></span>
                    </div>
                    <div className="card card-body mx-3 mx-md-4 mt-n6">
                        <div className="row gx-4 mb-2">
                            <div className="col-auto">
                                <div className="avatar avatar-xl position-relative">
                                    <img src="assets/img/bruce-mars.jpg" alt="profile_image"
                                         className="w-100 border-radius-lg shadow-sm"/>
                                </div>
                            </div>
                            <div className="col-auto my-auto">
                                <div className="h-100">
                                    <h5 className="mb-1">
                                        Richard Davis
                                    </h5>
                                    <p className="mb-0 font-weight-normal text-sm">
                                        CEO / Co-Founder
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
                                <div className="nav-wrapper position-relative end-0">
                                    <ul className="nav nav-pills nav-fill p-1" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link mb-0 px-0 py-1 active " data-bs-toggle="tab"
                                               href="javascript:;" role="tab" aria-selected="true">
                                                <i className="material-icons text-lg position-relative">home</i>
                                                <span className="ms-1">App</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link mb-0 px-0 py-1 " data-bs-toggle="tab"
                                               href="javascript:;" role="tab" aria-selected="false">
                                                <i className="material-icons text-lg position-relative">email</i>
                                                <span className="ms-1">Messages</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link mb-0 px-0 py-1 " data-bs-toggle="tab"
                                               href="javascript:;" role="tab" aria-selected="false">
                                                <i className="material-icons text-lg position-relative">settings</i>
                                                <span className="ms-1">Settings</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="row">
                                <div className="col-12 col-xl-4">
                                    <div className="card card-plain h-100">
                                        <div className="card-header pb-0 p-3">
                                            <h6 className="mb-0">Platform Settings</h6>
                                        </div>
                                        <div className="card-body p-3">
                                            <h6 className="text-uppercase text-body text-xs font-weight-bolder">Account</h6>
                                            <ul className="list-group">
                                                <li className="list-group-item border-0 px-0">
                                                    <div className="form-check form-switch ps-0">
                                                        <input className="form-check-input ms-auto" type="checkbox"
                                                               id="flexSwitchCheckDefault" checked/>
                                                        <label
                                                            className="form-check-label text-body ms-3 text-truncate w-80 mb-0"
                                                            htmlFor="flexSwitchCheckDefault">Email me when someone
                                                            follows me</label>
                                                    </div>
                                                </li>
                                                <li className="list-group-item border-0 px-0">
                                                    <div className="form-check form-switch ps-0">
                                                        <input className="form-check-input ms-auto" type="checkbox"
                                                               id="flexSwitchCheckDefault1"/>
                                                        <label
                                                            className="form-check-label text-body ms-3 text-truncate w-80 mb-0"
                                                            htmlFor="flexSwitchCheckDefault1">Email me when someone
                                                            answers on my post</label>
                                                    </div>
                                                </li>
                                                <li className="list-group-item border-0 px-0">
                                                    <div className="form-check form-switch ps-0">
                                                        <input className="form-check-input ms-auto" type="checkbox"
                                                               id="flexSwitchCheckDefault2" checked/>
                                                        <label
                                                            className="form-check-label text-body ms-3 text-truncate w-80 mb-0"
                                                            htmlFor="flexSwitchCheckDefault2">Email me when someone
                                                            mentions me</label>
                                                    </div>
                                                </li>
                                            </ul>
                                            <h6 className="text-uppercase text-body text-xs font-weight-bolder mt-4">Application</h6>
                                            <ul className="list-group">
                                                <li className="list-group-item border-0 px-0">
                                                    <div className="form-check form-switch ps-0">
                                                        <input className="form-check-input ms-auto" type="checkbox"
                                                               id="flexSwitchCheckDefault3"/>
                                                        <label
                                                            className="form-check-label text-body ms-3 text-truncate w-80 mb-0"
                                                            htmlFor="flexSwitchCheckDefault3">New launches and
                                                            projects</label>
                                                    </div>
                                                </li>
                                                <li className="list-group-item border-0 px-0">
                                                    <div className="form-check form-switch ps-0">
                                                        <input className="form-check-input ms-auto" type="checkbox"
                                                               id="flexSwitchCheckDefault4" checked/>
                                                        <label
                                                            className="form-check-label text-body ms-3 text-truncate w-80 mb-0"
                                                            htmlFor="flexSwitchCheckDefault4">Monthly product
                                                            updates</label>
                                                    </div>
                                                </li>
                                                <li className="list-group-item border-0 px-0 pb-0">
                                                    <div className="form-check form-switch ps-0">
                                                        <input className="form-check-input ms-auto" type="checkbox"
                                                               id="flexSwitchCheckDefault5"/>
                                                        <label
                                                            className="form-check-label text-body ms-3 text-truncate w-80 mb-0"
                                                            htmlFor="flexSwitchCheckDefault5">Subscribe to
                                                            newsletter</label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-4">
                                    <div className="card card-plain h-100">
                                        <div className="card-header pb-0 p-3">
                                            <div className="row">
                                                <div className="col-md-8 d-flex align-items-center">
                                                    <h6 className="mb-0">Profile Information</h6>
                                                </div>
                                                <div className="col-md-4 text-end">
                                                    <a href="javascript:;">
                                                        <i className="fas fa-user-edit text-secondary text-sm"
                                                           data-bs-toggle="tooltip" data-bs-placement="top"
                                                           title="Edit Profile"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body p-3">
                                            <p className="text-sm">
                                                Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no.
                                                If two equally difficult paths, choose the one more painful in the short
                                                term (pain avoidance is creating an illusion of equality).
                                            </p>
                                            <div className="horizontal gray-light my-4">
                                                <ul className="list-group">
                                                    <li className="list-group-item border-0 ps-0 pt-0 text-sm"><strong
                                                        className="text-dark">Full Name:</strong> &nbsp; Alec M.
                                                        Thompson
                                                    </li>
                                                    <li className="list-group-item border-0 ps-0 text-sm"><strong
                                                        className="text-dark">Mobile:</strong> &nbsp; (44) 123 1234 123
                                                    </li>
                                                    <li className="list-group-item border-0 ps-0 text-sm"><strong
                                                        className="text-dark">Email:</strong> &nbsp; alecthompson@mail.com
                                                    </li>
                                                    <li className="list-group-item border-0 ps-0 text-sm"><strong
                                                        className="text-dark">Location:</strong> &nbsp; USA
                                                    </li>
                                                    <li className="list-group-item border-0 ps-0 pb-0">
                                                        <strong className="text-dark text-sm">Social:</strong> &nbsp;
                                                        <a className="btn btn-facebook btn-simple mb-0 ps-1 pe-2 py-0"
                                                           href="javascript:;">
                                                            <i className="fab fa-facebook fa-lg"></i>
                                                        </a>
                                                        <a className="btn btn-twitter btn-simple mb-0 ps-1 pe-2 py-0"
                                                           href="javascript:;">
                                                            <i className="fab fa-twitter fa-lg"></i>
                                                        </a>
                                                        <a className="btn btn-instagram btn-simple mb-0 ps-1 pe-2 py-0"
                                                           href="javascript:;">
                                                            <i className="fab fa-instagram fa-lg"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-4">
                                    <div className="card card-plain h-100">
                                        <div className="card-header pb-0 p-3">
                                            <h6 className="mb-0">Conversations</h6>
                                        </div>
                                        <div className="card-body p-3">
                                            <ul className="list-group">
                                                <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2 pt-0">
                                                    <div className="avatar me-3">
                                                        <img src="assets/img/kal-visuals-square.jpg" alt="kal"
                                                             className="border-radius-lg shadow"/>
                                                    </div>
                                                    <div
                                                        className="d-flex align-items-start flex-column justify-content-center">
                                                        <h6 className="mb-0 text-sm">Sophie B.</h6>
                                                        <p className="mb-0 text-xs">Hi! I need more information..</p>
                                                    </div>
                                                    <a className="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto"
                                                       href="javascript:;">Reply</a>
                                                </li>
                                                <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                                                    <div className="avatar me-3">
                                                        <img src="assets/img/marie.jpg" alt="kal"
                                                             className="border-radius-lg shadow"/>
                                                    </div>
                                                    <div
                                                        className="d-flex align-items-start flex-column justify-content-center">
                                                        <h6 className="mb-0 text-sm">Anne Marie</h6>
                                                        <p className="mb-0 text-xs">Awesome work, can you..</p>
                                                    </div>
                                                    <a className="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto"
                                                       href="javascript:;">Reply</a>
                                                </li>
                                                <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                                                    <div className="avatar me-3">
                                                        <img src="assets/img/ivana-square.jpg" alt="kal"
                                                             className="border-radius-lg shadow"/>
                                                    </div>
                                                    <div
                                                        className="d-flex align-items-start flex-column justify-content-center">
                                                        <h6 className="mb-0 text-sm">Ivanna</h6>
                                                        <p className="mb-0 text-xs">About files I can..</p>
                                                    </div>
                                                    <a className="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto"
                                                       href="javascript:;">Reply</a>
                                                </li>
                                                <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                                                    <div className="avatar me-3">
                                                        <img src="assets/img/team-4.jpg" alt="kal"
                                                             className="border-radius-lg shadow"/>
                                                    </div>
                                                    <div
                                                        className="d-flex align-items-start flex-column justify-content-center">
                                                        <h6 className="mb-0 text-sm">Peterson</h6>
                                                        <p className="mb-0 text-xs">Have a great afternoon..</p>
                                                    </div>
                                                    <a className="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto"
                                                       href="javascript:;">Reply</a>
                                                </li>
                                                <li className="list-group-item border-0 d-flex align-items-center px-0">
                                                    <div className="avatar me-3">
                                                        <img src="assets/img/team-3.jpg" alt="kal"
                                                             className="border-radius-lg shadow"/>
                                                    </div>
                                                    <div
                                                        className="d-flex align-items-start flex-column justify-content-center">
                                                        <h6 className="mb-0 text-sm">Nick Daniel</h6>
                                                        <p className="mb-0 text-xs">Hi! I need more information..</p>
                                                    </div>
                                                    <a className="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto"
                                                       href="javascript:;">Reply</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mt-4">
                                    <div className="mb-5 ps-3">
                                        <h6 className="mb-1">Projects</h6>
                                        <p className="text-sm">Architects design houses</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-3 col-md-6 mb-xl-0 mb-4">
                                            <div className="card card-blog card-plain">
                                                <div className="card-header p-0 mt-n4 mx-3">
                                                    <a className="d-block shadow-xl border-radius-xl">
                                                        <img src="assets/img/home-decor-1.jpg" alt="img-blur-shadow"
                                                             className="img-fluid shadow border-radius-xl"/>
                                                    </a>
                                                </div>
                                                <div className="card-body p-3">
                                                    <p className="mb-0 text-sm">Project #2</p>
                                                    <a href="javascript:;">
                                                        <h5>
                                                            Modern
                                                        </h5>
                                                    </a>
                                                    <p className="mb-4 text-sm">
                                                        As Uber works through a huge amount of internal management
                                                        turmoil.
                                                    </p>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <button type="button"
                                                                className="btn btn-outline-primary btn-sm mb-0">View
                                                            Project
                                                        </button>
                                                        <div className="avatar-group mt-2">
                                                            <a href="javascript:;"
                                                               className="avatar avatar-xs rounded-circle"
                                                               data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                               title="Elena Morison">
                                                                <img alt="Image placeholder"
                                                                     src="assets/img/team-1.jpg"/>
                                                            </a>
                                                            <a href="javascript:;"
                                                               className="avatar avatar-xs rounded-circle"
                                                               data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                               title="Ryan Milly">
                                                                <img alt="Image placeholder"
                                                                     src="assets/img/team-2.jpg"/>
                                                            </a>
                                                            <a href="javascript:;"
                                                               className="avatar avatar-xs rounded-circle"
                                                               data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                               title="Nick Daniel">
                                                                <img alt="Image placeholder"
                                                                     src="assets/img/team-3.jpg"/>
                                                            </a>
                                                            <a href="javascript:;"
                                                               className="avatar avatar-xs rounded-circle"
                                                               data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                               title="Peterson">
                                                                <img alt="Image placeholder"
                                                                     src="assets/img/team-4.jpg"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-6 mb-xl-0 mb-4">
                                            <div className="card card-blog card-plain">
                                                <div className="card-header p-0 mt-n4 mx-3">
                                                    <a className="d-block shadow-xl border-radius-xl">
                                                        <img src="assets/img/home-decor-2.jpg" alt="img-blur-shadow"
                                                             className="img-fluid shadow border-radius-lg"/>
                                                    </a>
                                                </div>
                                                <div className="card-body p-3">
                                                    <p className="mb-0 text-sm">Project #1</p>
                                                    <a href="javascript:;">
                                                        <h5>
                                                            Scandinavian
                                                        </h5>
                                                    </a>
                                                    <p className="mb-4 text-sm">
                                                        Music is something that every person has his or her own specific
                                                        opinion about.
                                                    </p>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <button type="button"
                                                                className="btn btn-outline-primary btn-sm mb-0">View
                                                            Project
                                                        </button>
                                                        <div className="avatar-group mt-2">
                                                            <a href="javascript:;"
                                                               className="avatar avatar-xs rounded-circle"
                                                               data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                               title="Nick Daniel">
                                                                <img alt="Image placeholder"
                                                                     src="assets/img/team-3.jpg"/>
                                                            </a>
                                                            <a href="javascript:;"
                                                               className="avatar avatar-xs rounded-circle"
                                                               data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                               title="Peterson">
                                                                <img alt="Image placeholder"
                                                                     src="assets/img/team-4.jpg"/>
                                                            </a>
                                                            <a href="javascript:;"
                                                               className="avatar avatar-xs rounded-circle"
                                                               data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                               title="Elena Morison">
                                                                <img alt="Image placeholder"
                                                                     src="assets/img/team-1.jpg"/>
                                                            </a>
                                                            <a href="javascript:;"
                                                               className="avatar avatar-xs rounded-circle"
                                                               data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                               title="Ryan Milly">
                                                                <img alt="Image placeholder"
                                                                     src="assets/img/team-2.jpg"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-6 mb-xl-0 mb-4">
                                            <div className="card card-blog card-plain">
                                                <div className="card-header p-0 mt-n4 mx-3">
                                                    <a className="d-block shadow-xl border-radius-xl">
                                                        <img src="assets/img/home-decor-3.jpg" alt="img-blur-shadow"
                                                             className="img-fluid shadow border-radius-xl"/>
                                                    </a>
                                                </div>
                                                <div className="card-body p-3">
                                                    <p className="mb-0 text-sm">Project #3</p>
                                                    <a href="javascript:;">
                                                        <h5>
                                                            Minimalist
                                                        </h5>
                                                    </a>
                                                    <p className="mb-4 text-sm">
                                                        Different people have different taste, and various types of
                                                        music.
                                                    </p>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <button type="button"
                                                                className="btn btn-outline-primary btn-sm mb-0">View
                                                            Project
                                                        </button>
                                                        <div className="avatar-group mt-2">
                                                            <a href="javascript:;"
                                                               className="avatar avatar-xs rounded-circle"
                                                               data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                               title="Peterson">
                                                                <img alt="Image placeholder"
                                                                     src="assets/img/team-4.jpg"/>
                                                            </a>
                                                            <a href="javascript:;"
                                                               className="avatar avatar-xs rounded-circle"
                                                               data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                               title="Nick Daniel">
                                                                <img alt="Image placeholder"
                                                                     src="assets/img/team-3.jpg"/>
                                                            </a>
                                                            <a href="javascript:;"
                                                               className="avatar avatar-xs rounded-circle"
                                                               data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                               title="Ryan Milly">
                                                                <img alt="Image placeholder"
                                                                     src="assets/img/team-2.jpg"/>
                                                            </a>
                                                            <a href="javascript:;"
                                                               className="avatar avatar-xs rounded-circle"
                                                               data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                               title="Elena Morison">
                                                                <img alt="Image placeholder"
                                                                     src="assets/img/team-1.jpg"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-md-6 mb-xl-0 mb-4">
                                            <div className="card card-blog card-plain">
                                                <div className="card-header p-0 mt-n4 mx-3">
                                                    <a className="d-block shadow-xl border-radius-xl">
                                                        <img
                                                            src="https://images.unsplash.com/photo-1606744824163-985d376605aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                                            alt="img-blur-shadow"
                                                            className="img-fluid shadow border-radius-xl"/>
                                                    </a>
                                                </div>
                                                <div className="card-body p-3">
                                                    <p className="mb-0 text-sm">Project #4</p>
                                                    <a href="javascript:;">
                                                        <h5>
                                                            Gothic
                                                        </h5>
                                                    </a>
                                                    <p className="mb-4 text-sm">
                                                        Why would anyone pick blue over pink? Pink is obviously a better
                                                        color.
                                                    </p>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <button type="button"
                                                                className="btn btn-outline-primary btn-sm mb-0">View
                                                            Project
                                                        </button>
                                                        <div className="avatar-group mt-2">
                                                            <a href="javascript:;"
                                                               className="avatar avatar-xs rounded-circle"
                                                               data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                               title="Peterson">
                                                                <img alt="Image placeholder"
                                                                     src="assets/img/team-4.jpg"/>
                                                            </a>
                                                            <a href="javascript:;"
                                                               className="avatar avatar-xs rounded-circle"
                                                               data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                               title="Nick Daniel">
                                                                <img alt="Image placeholder"
                                                                     src="assets/img/team-3.jpg"/>
                                                            </a>
                                                            <a href="javascript:;"
                                                               className="avatar avatar-xs rounded-circle"
                                                               data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                               title="Ryan Milly">
                                                                <img alt="Image placeholder"
                                                                     src="assets/img/team-2.jpg"/>
                                                            </a>
                                                            <a href="javascript:;"
                                                               className="avatar avatar-xs rounded-circle"
                                                               data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                               title="Elena Morison">
                                                                <img alt="Image placeholder"
                                                                     src="assets/img/team-1.jpg"/>
                                                            </a>
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
                </div>
                <footer className="footer py-4  ">
                    <div className="container-fluid">
                        <div className="row align-items-center justify-content-lg-between">
                            <div className="col-lg-6 mb-lg-0 mb-4">
                                <div className="copyright text-center text-sm text-muted text-lg-start">
                                    © <script>
                                    document.write(new Date().getFullYear())
                                </script>,
                                    made with <i className="fa fa-heart"></i> by
                                    <a href="https://www.creative-tim.com" className="font-weight-bold" target="_blank">Creative
                                        Tim</a>
                                    for a better web.
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                                    <li className="nav-item">
                                        <a href="https://www.creative-tim.com" className="nav-link text-muted"
                                           target="_blank">Creative Tim</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://www.creative-tim.com/presentation"
                                           className="nav-link text-muted" target="_blank">About Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://www.creative-tim.com/blog" className="nav-link text-muted"
                                           target="_blank">Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://www.creative-tim.com/license"
                                           className="nav-link pe-0 text-muted" target="_blank">License</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </React.Fragment>
    );
};

export default Profile;
