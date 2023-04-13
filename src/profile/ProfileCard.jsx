import React from 'react';
import {Link, Navigate} from "react-router-dom";
import {useLocalState} from "../utils/UseLocalStorage";
import image from "../avatar.jpg";

const ProfileCard = () => {

    const [jwt, setJwt] = useLocalState("", "jwt");
    const [user, setUser] = useLocalState(null, "user");
    const handleDelete = async () => {
        await fetch(`/api/v1/${user.role === "Partner" ? "partner" : "user"}/delete/${user.id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt}`
            },
            method: "DELETE",
        });
        localStorage.removeItem('jwt');
        localStorage.removeItem('user');
        window.location.reload()

    }
    return jwt === "" ? <Navigate to="/"/> : (
        <React.Fragment>

            <div id="page_content_wrapper " className="hasbg " style={{marginTop: "100px"}}>

                <div className="main-content position-relative max-height-vh-100 h-100" style={{marginTop: "50px"}}>
                    <div className="container-fluid px-2 px-md-4">

                        <div className="card card-body mx-3 mx-md-4 mt-n6"
                             style={{boxShadow: '0px 5px 15px 3px rgba(0, 0, 0, 0.3)', borderRadius: "5px"}}>
                            <div className="row gx-4 mb-2">
                                <div className="col-auto">
                                    <div className="avatar avatar-xl position-relative">
                                        <img src={user.photo === null ? image : user.photo} alt="profile_image"
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
                            </div>
                            <div className="row">
                                <div className="row">
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
                                                        {user.role === "Partner" && user.commercial_name !== null ? (
                                                            <li className="list-group-item border-0 ps-0 text-sm">
                                                                <strong
                                                                    className="text-dark">Commercial Name:
                                                                </strong> &nbsp; {user.commercial_name}
                                                            </li>) : null}
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
                                                            <Link style={{color: "white"}}
                                                                  to={user.role !== "Client" ? "/dashboard/settings" : "/profile/settings"}>
                                                                <button
                                                                    className=" btn bg-gradient-primary w-100 my-4 mb-2"> Edit
                                                                    Informations
                                                                </button>
                                                            </Link>
                                                        </li>
                                                        <li className="list-group-item border-0 ps-0 text-sm">
                                                            <button
                                                                onClick={handleDelete}
                                                                className=" btn btn-outline-danger w-100 my-4 mb-2">
                                                                Delete Account
                                                            </button>

                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {user.role === "Partner" ? (
                                        <div className="col-12 col-xl-4">
                                            <div className="card card-plain h-100">
                                                <div className="card-header pb-0 p-3">
                                                    <h6 className="mb-0">Payement Method</h6>
                                                </div>
                                                <div className="card-body p-3">

                                                    <div className="row">
                                                        <div className="col">
                                                            <div className="row">
                                                                <div className="col-xl-9 mb-xl-0 mb-4">
                                                                    <div className="card bg-transparent shadow-xl">
                                                                        <div
                                                                            className="overflow-hidden position-relative border-radius-xl">
                                                                            <img
                                                                                src="../assets/img/illustrations/pattern-tree.svg"
                                                                                className="position-absolute opacity-2 start-0 top-0 w-100 z-index-1 h-100"
                                                                                alt="pattern-tree"/>
                                                                            <span
                                                                                className="mask bg-gradient-dark opacity-10"></span>
                                                                            <div
                                                                                className="card-body position-relative z-index-1 p-3">
                                                                                <i className="material-icons text-white p-2">wifi</i>
                                                                                <h5 className="text-white mt-4 mb-5 pb-2">{user.rib}</h5>
                                                                                <div className="d-flex">
                                                                                    <div
                                                                                        className="ms-auto w-20 d-flex align-items-end justify-content-end">
                                                                                        <img className="w-60 mt-2"
                                                                                             src="/assets/img/logos/mastercard.png"
                                                                                             alt="logo"/>
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
                                        </div>) : null}
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
