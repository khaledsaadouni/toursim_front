import React, {useEffect, useState} from 'react';
import {useLocalState} from "../utils/UseLocalStorage";
import {Link, Navigate} from "react-router-dom";
import {Switch} from "@mui/material";
import ClipLoader from "react-spinners/ClipLoader";

const REGISTER_URL = "/api/v1/auth/authenticate"
const In = () => {
    const [error, setError] = useState("");
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [jwt, setJwt] = useLocalState("", "jwt");
    const [user, setUser] = useLocalState(null, "user");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const token = queryParams.get('token');

        const newuser = queryParams.get('user');

        if (!jwt && !user && token && newuser) {
            const userObj = {};
            userObj.id = parseInt(newuser.substring(newuser.indexOf('id=') + 3, newuser.indexOf(',')), 10);
            userObj.lastname = newuser.substring(newuser.indexOf('lastname=') + 9, newuser.indexOf(',', newuser.indexOf('lastname=')));
            userObj.firstname = newuser.substring(newuser.indexOf('firstname=') + 10, newuser.indexOf(',', newuser.indexOf('firstname=')));
            userObj.phone = parseInt(newuser.substring(newuser.indexOf('phone=') + 6, newuser.indexOf(',', newuser.indexOf('phone='))), 10);
            userObj.photo = newuser.substring(newuser.indexOf('photo=') + 6, newuser.indexOf(',', newuser.indexOf('photo=')));
            userObj.email = newuser.substring(newuser.indexOf('email=') + 6, newuser.indexOf(',', newuser.indexOf('email=')));
            userObj.birthday = newuser.substring(newuser.indexOf('birthday=') + 9, newuser.indexOf(',', newuser.indexOf('birthday=')));
            userObj.role = newuser.substring(newuser.indexOf('role=') + 5, newuser.indexOf(')', newuser.indexOf('role=')));
            console.log("obj", userObj);
            setJwt(token);
            console.log(jwt)
            setUser(userObj);
            console.log(user)
        }
    }, []);

    const handleLoginFacebook = async () => {
        window.location.href = 'http://localhost:8080/oauth2/authorization/facebook?redirect_uri=http://localhost:3000/';

    }
    const handleLoginGoogle = async () => {
        window.location.href = `http://localhost:8080/oauth2/authorization/google?redirect_uri=http://localhost:3000/`;
    }
    const handle = async () => {
        setLoading(false)
        if (pwd === "" || email === "") {
            setError("Please enter email and password")
        }
        const reqBody = {
            'email': email,
            'password': pwd
        };
        await fetch(REGISTER_URL, {
            headers: {
                "Content-Type": "application/json"
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
                setLoading(true)
                setJwt(data.token);
                setUser(data.user);
            }).catch((message) => {
                setError("Email or password is incorrect. Please try again!")
                setLoading(true)
            });
    }

    return jwt !== "" && user !== null ?
        <Navigate to={(user.role === "Partner" || user.role === "Admin") ? "/dashboard/main" : "/"} /> : (
            <React.Fragment>
                <div className="container my-auto">
                    <div className="row">
                        <div className="col-lg-4 col-md-8 col-12 mx-auto">
                            <div className="card z-index-0 fadeIn3 fadeInBottom">
                                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                    <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                                        <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">Sign
                                            in</h4>
                                        <div className="row mt-3">
                                            <div className="col-2 text-center ms-auto">
                                                <a className="btn btn-link px-3" onClick={handleLoginFacebook}>
                                                    <i className="fa fa-facebook text-white text-lg"></i>
                                                </a>
                                            </div>
                                            <div className="col-2 text-center me-auto">
                                                <a className="btn btn-link px-3" onClick={handleLoginGoogle}>
                                                    <i className="fa fa-google text-white text-lg"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="card-body">
                                    <div className="input-group input-group-outline my-3">

                                        <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email"
                                            className="form-control" />
                                    </div>
                                    <div className="input-group input-group-outline mb-3">
                                        <input
                                            placeholder="Password"
                                            onChange={(e) => {
                                                setPwd(e.target.value);
                                            }}
                                            type="password" className="form-control" />
                                    </div>
                                    <div className="form-check form-switch d-flex align-items-center mb-3">

                                        <Switch color="default" />
                                        <label className="form-check-label mb-0 ms-3" htmlFor="rememberMe">Remember
                                            me</label>
                                    </div>

                                    <div className="text-center">
                                        <button disabled={pwd === "" || email === ""} onClick={handle}
                                                className="btn bg-gradient-primary w-100 my-4 mb-2">Sign in
                                        </button>
                                    </div>
                                    <div className="input-group input-group-outline my-3"
                                         hidden={error === ""}
                                         style={{color: "#e55757", textAlign: "center"}}>
                                        <label className="form-check-label mb-0 ms-3" htmlFor="rememberMe"
                                               style={{color: "#e55757", textAlign: "center"}}>
                                            {error}
                                        </label>
                                    </div>
                                    <div hidden={loading} style={{width: '50px', margin: 'auto', display: 'block'}}>
                                        <ClipLoader color="#bb3a41" size={30}/>
                                    </div>
                                    <p className="mt-4 text-sm text-center">
                                        Don't have an account? &nbsp;
                                        <Link to="/sign/up"
                                              className="text-primary text-gradient font-weight-bold"
                                        >Sign up</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
};

export default In;
