import React from 'react';
import {Link, Navigate} from "react-router-dom";
import {useLocalState} from "../utils/UseLocalStorage";

const ProfileCard = () => {

    const [jwt, setJwt] = useLocalState("", "jwt");
    const [user, setUser] = useLocalState(null, "user");
    return jwt === "" ? <Navigate to="/"/> : (
        <React.Fragment>

            <div id="page_content_wrapper bg-gray-200 " className="hasbg " style={{marginTop: "100px"}}>

                <div className="main-content position-relative max-height-vh-100 h-100" style={{marginTop: "50px"}}>
                    <div className="container-fluid px-2 px-md-4">

                        <div className="card card-body mx-3 mx-md-4 mt-n6"
                             style={{boxShadow: '0px 5px 15px 3px rgba(0, 0, 0, 0.3)', borderRadius: "5px"}}>
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
                                            {user.firstname} {user.lastname}
                                        </h5>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
                                    <div className="nav-wrapper position-relative end-0">
                                        <ul className="nav nav-pills nav-fill p-1" role="tablist">
                                            <li className="nav-item">
                                                <div className="nav-link mb-0 px-0 py-1 " data-bs-toggle="tab"
                                                     href="javascript:;" role="tab" aria-selected="false">
                                                    <i className="bi bi-heart-fill"></i>
                                                    <span className="ms-1"><Link
                                                        to={"/settings"}>Favorites</Link></span>
                                                </div>
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
                                                                   id="flexSwitchCheckDefault1"/>
                                                            <label
                                                                className="form-check-label text-body ms-3 text-truncate w-80 mb-0"
                                                                htmlFor="flexSwitchCheckDefault">Email me when
                                                                someone follows me</label>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item border-0 px-0">
                                                        <div className="form-check form-switch ps-0">
                                                            <input className="form-check-input ms-auto" type="checkbox"
                                                                   id="flexSwitchCheckDefault1"/>
                                                            <label
                                                                className="form-check-label text-body ms-3 text-truncate w-80 mb-0"
                                                                htmlFor="flexSwitchCheckDefault1">Email me when
                                                                someone answers on my post</label>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item border-0 px-0">
                                                        <div className="form-check form-switch ps-0">
                                                            <input className="form-check-input ms-auto" type="checkbox"
                                                                   id="flexSwitchCheckDefault1"/>
                                                            <label
                                                                className="form-check-label text-body ms-3 text-truncate w-80 mb-0"
                                                                htmlFor="flexSwitchCheckDefault2">Email me when
                                                                someone mentions me</label>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <h6 className="text-uppercase text-body text-xs font-weight-bolder mt-4">Application</h6>
                                                <ul className="list-group">
                                                    <li className="list-group-item border-0 px-0">
                                                        <div className="form-check form-switch ps-0">
                                                            <input className="form-check-input ms-auto" type="checkbox"
                                                                   id="flexSwitchCheckDefault1"/>
                                                            <label
                                                                className="form-check-label text-body ms-3 text-truncate w-80 mb-0"
                                                                htmlFor="flexSwitchCheckDefault3">New launches and
                                                                projects</label>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item border-0 px-0">
                                                        <div className="form-check form-switch ps-0">
                                                            <input className="form-check-input ms-auto" type="checkbox"
                                                                   id="flexSwitchCheckDefault1"/>
                                                            <label
                                                                className="form-check-label text-body ms-3 text-truncate w-80 mb-0"
                                                                htmlFor="flexSwitchCheckDefault4">Monthly product
                                                                updates</label>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item border-0 px-0 pb-0">
                                                        <div className="form-check form-switch ps-0">
                                                            <input className="form-check-input ms-auto" type="checkbox"
                                                                   id="flexSwitchCheckDefault1"/>
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
                                                </div>
                                            </div>
                                            <div className="card-body p-3">
                                                <div className="horizontal gray-light my-4">
                                                    <ul className="list-group">
                                                        {user.email !== null ? (
                                                            <li className="list-group-item border-0 ps-0 text-sm">
                                                                <strong
                                                                    className="text-dark">Email:
                                                                </strong> &nbsp; {user.email}
                                                            </li>) : null}
                                                        {user.phone !== 0 ? (
                                                            <li className="list-group-item border-0 ps-0 text-sm">
                                                                <strong
                                                                    className="text-dark">Mobile:</strong> &nbsp; {user.phone}
                                                            </li>) : null}
                                                        {user.birthday !== null ? (
                                                            <li className="list-group-item border-0 ps-0 text-sm">
                                                                <strong
                                                                    className="text-dark">Birthday:</strong> &nbsp; {user.birthday}
                                                            </li>) : null}
                                                        <li className="list-group-item border-0 ps-0 text-sm">
                                                            <Link style={{color: "white"}} to={"/settings"}>
                                                                <button className="btn btn-primary"> Edit Informations
                                                                </button>
                                                            </Link>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-xl-4">
                                        <div className="card card-plain h-100">
                                            <div className="card-header pb-0 p-3">
                                                <h6 className="mb-0">My Recent Reservations</h6>
                                            </div>
                                            <div className="card-body p-3">
                                                <ul className="list-group">
                                                    <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2 pt-0">
                                                        <div className="avatar me-3">
                                                            <img src=".assets/img/kal-visuals-square.jpg" alt="kal"
                                                                 className="border-radius-lg shadow"/>
                                                        </div>
                                                        <div
                                                            className="d-flex align-items-start flex-column justify-content-center">
                                                            <h6 className="mb-0 text-sm">Sophie B.</h6>
                                                            <p className="mb-0 text-xs">Hi! I need more
                                                                information..</p>
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
                                                            <p className="mb-0 text-xs">Hi! I need more
                                                                information..</p>
                                                        </div>
                                                        <a className="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto"
                                                           href="javascript:;">Reply</a>
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
        </React.Fragment>
    );
};

export default ProfileCard;
