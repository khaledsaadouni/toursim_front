import React, {useState} from 'react';
import Nav from "../navBar/Nav";
import {Link, Navigate} from "react-router-dom";
import {useLocalState} from "../utils/UseLocalStorage";

const Settings = () => {

    const [jwt, setJwt] = useLocalState("", "jwt");
    const [user, setUser] = useLocalState(null, "user");
    const [firstname, setFirstname] = useState(user.firstname);
    const [lastname, setLastname] = useState(user.lastname);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);
    const [birthday, setBirthday] = useState(user.birthday);
    const [error, setError] = useState("");
    const [redirect, setRedirect] = useState(false);


    const handle = async () => {
        const reqBody = {
            'id': user.id,
            'email': email,
            'lastname': lastname,
            'firstname': firstname,
            'role': user.role,
            'birthday': birthday,
            'phone': phone
        };
        await fetch("/api/v1/user/update", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt}`
            },
            method: "POST",
            body: JSON.stringify(reqBody)
        }).then((response) => {
            if (response.status === 200) {
                return Promise.all([response.json(), response.headers])
            } else {
                return Promise.reject("")
            }
        })
            .then(([data, header]) => {
                setUser(data);
                setRedirect(true)
            }).catch((message) => {
                setError("An error occured please try again!")
            });
    }
    return jwt === "" || redirect === true ? <Navigate to={redirect ? "/profile" : ""}/> : (
        <React.Fragment>

            <Nav></Nav>
            <div id="page_content_wrapper bg-gray-200 " className="hasbg ">

                <div className="main-content position-relative max-height-vh-100 h-100"
                     style={{marginTop: "50px", marginLeft: "25%"}}>
                    <div className="container-fluid px-2 px-md-4">

                        <div className="card card-body mx-3 mx-md-4 mt-n6"
                             style={{
                                 boxShadow: '0px 5px 15px 3px rgba(0, 0, 0, 0.3)',
                                 borderRadius: "5px",
                                 width: "800px"
                             }}>
                            <div className="row gx-4 mb-2">
                                <div className="col-auto">
                                    <div className="avatar avatar-xl position-relative">
                                        <img src="assets/img/bruce-mars.jpg" alt="profile_image"
                                             className="w-100 border-radius-lg shadow-sm"/>
                                    </div>
                                </div>
                                <div className="col-auto my-auto">
                                    <div className="h-100">
                                        Change Profile Picture
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
                                    <div className="nav-wrapper position-relative end-0">
                                        <ul className="nav nav-pills nav-fill p-1" role="tablist">
                                            <li className="nav-item">
                                                <div className="nav-link mb-0 px-0 py-1 " data-bs-toggle="tab"
                                                     href="javascript:;" role="tab" aria-selected="false">
                                                    <i className="bi bi-key-fill"></i>
                                                    <span className="ms-1"><Link
                                                        to={"/password"}>Change Password</Link></span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="row">
                                    <div>
                                        <div className="card card-plain h-100">
                                            <div className="card-header pb-0 p-3">
                                                <div className="row">
                                                    <div className="col-md-8 d-flex align-items-center">
                                                        <h6 className="mb-0">Edit Profile Information</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body p-3">
                                                <div className="horizontal gray-light my-4">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col">
                                                                <div className="input-group input-group-outline my-3">
                                                                    <label> Lastname</label>
                                                                    <input onChange={(e) => setLastname(e.target.value)}
                                                                           required
                                                                           value={lastname}
                                                                           placeholder="Lastname" type="text"
                                                                           className="form-control"/>
                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <div className="input-group input-group-outline my-3">

                                                                    <label> Firstname</label>
                                                                    <input
                                                                        onChange={(e) => setFirstname(e.target.value)}
                                                                        required
                                                                        value={firstname}
                                                                        placeholder="Firstname" type="text"
                                                                        className="form-control"
                                                                        maxLength="30"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="input-group input-group-outline my-3">
                                                            <label> Email</label>
                                                            <input value={email}
                                                                   onChange={(e) => setEmail(e.target.value)}
                                                                   placeholder="Email" type="email"
                                                                   className="form-control"/>
                                                        </div>
                                                        <div className="input-group input-group-outline mb-3">

                                                            <label> Phone</label>
                                                            <input value={phone}
                                                                   onChange={(e) => setPhone(e.target.value)} required
                                                                   placeholder="Phone"
                                                                   type="number" className="form-control"/>
                                                        </div>
                                                        <div className="input-group input-group-outline mb-3">
                                                            <label> Birthday </label>

                                                            <input value={birthday}
                                                                   onChange={(e) => setBirthday(e.target.value)}
                                                                   placeholder="Birthday"
                                                                   type="date" className="form-control"/>
                                                        </div>
                                                        <div className="text-center">
                                                            <button disabled={email === ""}
                                                                    onClick={handle}
                                                                    className="btn bg-gradient-primary w-100 my-4 mb-2">Save
                                                                Changes
                                                            </button>
                                                        </div>
                                                        <div className="input-group input-group-outline my-3"
                                                             hidden={error === ""}
                                                             style={{color: "#e55757", textAlign: "center"}}>
                                                            <label className="form-check-label mb-0 ms-3"
                                                                   htmlFor="rememberMe"
                                                                   style={{color: "#e55757", textAlign: "center"}}>
                                                                {error}
                                                            </label>
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

            </div>
        </React.Fragment>
    );
};

export default Settings;