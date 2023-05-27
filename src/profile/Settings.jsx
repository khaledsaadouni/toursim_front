import React, { useState } from 'react';
import { Link, Navigate } from "react-router-dom";
import { useLocalState } from "../utils/UseLocalStorage";

const Settings = () => {

    const [jwt, setJwt] = useLocalState("", "jwt");
    const [user, setUser] = useLocalState(null, "user");
    const [firstname, setFirstname] = useState(user.firstname);
    const [lastname, setLastname] = useState(user.lastname);
    const [commercial_name, setCommercial_name] = useState(user.commercial_name);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);
    const [publicKey, setpublicKey] = useState(user.publicKey);
    const [secretKey, setsecretKey] = useState(user.publicKey);
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
            'phone': phone,
            'photo': user.photo,
            'commercial_name': commercial_name,
            'secretKey': secretKey,
            'publicKey': publicKey
        };
        await fetch(`/api/v1/${user.role === "Partner" ? "partner" : "user"}/update`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt}`
            },
            method: "POST",
            body: JSON.stringify(reqBody)
        }).then((response) => {
            if (response.status === 200) {
                return Promise.all([response.json(), response.headers])
            } else if (response.status === 401) {
                localStorage.removeItem('jwt');
                localStorage.removeItem('user');
                window.location.reload();
            } else {
                return Promise.reject("")
            }
        })
            .then(([data, header]) => {
                setUser(data);
                window.location.reload();
            }).catch((message) => {
                setError("An error occured please try again!")
            });
    }
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {

        const formData = new FormData();
        formData.append("file", file);

        await fetch(`/api/v1/photo/${user.id}/profilepicture${user.email}/profil`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            },
            method: "POST",
            body: formData
        }).then((response) => {
            if (response.status === 200) {
                return Promise.all([response.json(), response.headers])
            } else if (response.status === 401) {
                localStorage.removeItem('jwt');
                localStorage.removeItem('user');
                window.location.reload();
            } else {
                return Promise.reject("")
            }
        })
            .then(([data, header]) => {
                setUser(data);
                setError("")
                window.location.reload();
            }).catch((message) => {
                setError("File's size is too big , Please Try Again")
            });
    };

    return jwt === "" || redirect === true ?
        <Navigate to={redirect ? (user.role != "Client" ? "/dashboard/profile" : "/profile/main") : ""} /> : (
            <React.Fragment>

                <div id="page_content_wrapper  " className="hasbg " style={{ marginTop: "70px" }}>

                    <div className="main-content position-relative max-height-vh-100 h-100"
                        style={{ marginTop: "50px", marginLeft: "25%" }}>
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
                                            <img src={user.photo} alt="profile_image"
                                                className="w-100 border-radius-lg shadow-sm" />
                                        </div>
                                    </div>
                                    <div className="col-auto my-auto">
                                        <div className="h-100">
                                            <div className="row">
                                                <div className="col">
                                                    <input type="file" className="form-control"
                                                        style={{ backgroundColor: "#eeeeee", color: "black" }}
                                                        onChange={handleFileChange} />
                                                </div>
                                                <div className="col">
                                                    <button type="submit" className="form-control"
                                                        style={{ backgroundColor: "#eeeeee", color: "black" }}
                                                        onClick={handleUpload}>Upload
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="h-100" style={{ color: "darkred" }} hidden={error === ""}>
                                            {error}
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
                                                            to={"/profile/password"}>Change Password</Link></span>
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
                                                                            className="form-control" />
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
                                                                            maxLength="30" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {user.role === "Partner" ? (
                                                                <div className="input-group input-group-outline my-3">
                                                                    <label> commercial_name</label>
                                                                    <input value={commercial_name}
                                                                        onChange={(e) => setCommercial_name(e.target.value)}
                                                                        placeholder="Commercial Name" type="text"
                                                                        className="form-control" />
                                                                </div>) : null}

                                                            <div className="input-group input-group-outline my-3">
                                                                <label> Email</label>
                                                                <input value={email}
                                                                    onChange={(e) => setEmail(e.target.value)}
                                                                    placeholder="Email" type="email"
                                                                    className="form-control" />
                                                            </div>
                                                            <div className="input-group input-group-outline mb-3">

                                                                <label> Phone</label>
                                                                <input value={phone}
                                                                    onChange={(e) => setPhone(e.target.value)} required
                                                                    placeholder="Phone"
                                                                    type="number" className="form-control" />
                                                            </div>
                                                            <div className="input-group input-group-outline mb-3">
                                                                <label> Birthday </label>

                                                                <input value={birthday}
                                                                    onChange={(e) => setBirthday(e.target.value)}
                                                                    placeholder="Birthday"
                                                                    type="date" className="form-control" />
                                                            </div>
                                                            {user.role === "Partner" ? (
                                                                <div>
                                                                    <br></br>
                                                                    <h6 style={{ color: "grey" }}>Add your stripe account  parameter</h6>
                                                                    <div className="input-group input-group-outline my-3">
                                                                        <label> Public key : </label>
                                                                        <input value={publicKey}
                                                                            onChange={(e) => setpublicKey(e.target.value)}
                                                                            placeholder="Public key" type="text"
                                                                            className="form-control" />
                                                                    </div>
                                                                    <div className="input-group input-group-outline my-3">
                                                                        <label> Private key : </label>
                                                                        <input value={secretKey}
                                                                            onChange={(e) => setsecretKey(e.target.value)}
                                                                            placeholder="Private key" type="password"
                                                                            className="form-control" />
                                                                    </div>
                                                                </div>) : null}
                                                            <div className="text-center">
                                                                <button disabled={email === ""}
                                                                    onClick={handle}
                                                                    className="btn bg-gradient-primary w-100 my-4 mb-2">Save
                                                                    Changes
                                                                </button>
                                                            </div>
                                                            <div className="input-group input-group-outline my-3"
                                                                hidden={error === ""}
                                                                style={{ color: "#e55757", textAlign: "center" }}>
                                                                <label className="form-check-label mb-0 ms-3"
                                                                    htmlFor="rememberMe"
                                                                    style={{ color: "#e55757", textAlign: "center" }}>
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
