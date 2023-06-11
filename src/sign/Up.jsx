import React, {useEffect, useRef, useState} from 'react';
import {FormControlLabel, Radio, RadioGroup, Switch} from "@mui/material";
import "./sign.css"
import {useLocalState} from "../utils/UseLocalStorage";
import {Link, Navigate} from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import logo from "../logo_withoutbg.png";

const GET_TOKEN_URL = "/api/v1/auth/oAuth2Token"
const REGISTER_URL = "/api/v1/auth/register"
const REGISTER_URL_P = "/api/v1/auth/registerPartner"
const Up = () => {
    const [showForm, setShowForm] = useState(false);
    const [loading, setLoading] = useState(true);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [birthday, setBirthday] = useState("");
    const [pwd, setPwd] = useState("");
    const [validPwd, setValidPwd] = useState(false);
    const [matchPwd, setMatchPwd] = useState("");
    const [validMatch, setValidMatch] = useState(false);
    const inputRef = useRef(null);
    const [error, setError] = useState("");
    const [error2, setError2] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [com, setCom] = useState("");
    const [address, setAddress] = useState("");
    const [jwt, setJwt] = useLocalState("", "jwt");
    const [user, setUser] = useLocalState(null, "user");
    const [expirationDate, SetExpirationDate] = useLocalState(null, "expirationDate");

    const client = () => {
        setShowForm(false);
    }
    const partner = () => {
        setShowForm(true);
    }
    useEffect(() => {
        setValidPwd(pwd);
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    const handle1 = async () => {
        setLoading(false)
        const reqBody = {
            'email': email,
            'password': pwd,
            'lastname': lastname,
            'firstname': firstname,
            'role': 'Client',
            'birthday': birthday,
            'phone': phone
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
                return response.text().then(errorMessage => {
                    if (errorMessage === "Email already exists") {
                        setErrorEmail(errorMessage)
                    } else {
                        setError("An error occured, please try again.")
                    }
                });
            }
        })
            .then(([data, header]) => {
                setLoading(true)
                setJwt(data.token);
                setUser(data.user);
            }).catch((message) => {
                setLoading(true)
            });
    }

    const handle2partner = async () => {
        setLoading(false)
        const reqBody2 = {
            'email': email,
            'password': pwd,
            'lastname': lastname,
            'firstname': firstname,
            'role': 'Partner',
            'birthday': birthday,
            'phone': phone,
            'commercial_name': com,
            'address': address
        };
        await fetch(REGISTER_URL_P, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(reqBody2)
        }).then((response) => {
            if (response.status === 200) {
                return Promise.all([response.json(), response.headers])
            } else {
                return response.text().then(errorMessage => {
                    if (errorMessage === "Email already exists") {
                        setErrorEmail(errorMessage)
                    } else {
                        setError("An error occured, please try again.")
                    }
                });
            }
        })
            .then(([data, header]) => {
                setLoading(true)
                setJwt(data.token);
                setUser(data.user);
            }).catch((message) => {
                setLoading(true)
            });
    }
    const getToken = async () => {
        try {
            await fetch(GET_TOKEN_URL, {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "GET",
            }).then((response) => {
                if (response.status === 200) {
                    return Promise.all([response.json(), response.headers])
                } else {
                    return Promise.reject("")
                }
            })
                .then(([data, header]) => {
                    console.log(data)
                    setJwt(data.token);
                    setUser(data.user);
                    const currentDate = new Date();
                    SetExpirationDate(new Date(currentDate.getTime() + 24 * 60 * 60 * 1000));
                }).catch((message) => {
                });
        } catch (error) {
        }
    };
    const handleLoginFacebook = async () => {
        const response = await fetch('http://localhost:8080/oauth2/authorization/facebook?redirect_uri=http://localhost:3000/');
        const data = await response.json();
        const {token, user} = data;
        console.log(`Token: ${token}`);
        console.log(`User: ${JSON.stringify(user)}`);
    }
    const handleLoginGoogle = async () => {
        window.location.href = `http://localhost:8080/oauth2/authorization/google?redirect_uri=http://localhost:3000/`;
    }

    return jwt && user !== null ?
        <Navigate to={(user.role === "Partner" || user.role === "Admin") ? "/dashboard/main" : "/"} /> : (
            <React.Fragment>

                <div className="header_style_wrapper">


                    <div className="top_bar hasbg">
                        <div className="standard_wrapper">
                            {/*Begin logo */}
                            <div id="logo_wrapper">


                                <div id="menu_wrapper">
                                    <div id="nav_wrapper">

                                        <div id="logo_transparent" className="logo_container">
                                            <div className="logo_align">
                                                <Link to={"/"}>
                                                    <a id="custom_logo_transparent" className="logo_wrapper default"
                                                       href="">
                                                        <img src={logo}
                                                             alt="" width="250px"
                                                             height="30px"/>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                        {/*End logo  */}
                                        <div className="nav_wrapper_inner">
                                            <div id="menu_border_wrapper">
                                                <div className="menu-main-menu-container">
                                                    <ul id="main_menu" className="nav" style={{
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center"
                                                    }}>


                                                        <li className="menu-item  " style={{
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            alignItems: "center"
                                                        }}>
                                                            <Link
                                                                to={"/sign/in"}>
                                                                <button className="     nav-outline-secondary">

                                                                    Sign in


                                                                </button>
                                                            </Link>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/*End main nav */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="container my-auto" style={{paddingTop: "100px"}}>
                    <div className="row">
                        <div className="col-lg-4 col-md-8 col-12 mx-auto">
                            <div className="card z-index-0 fadeIn3 fadeInBottom">
                                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                    <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                                        <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">Sign
                                            up</h4>
                                        <div className="row mt-3" hidden={showForm}>
                                            {/*<div className="col-2 text-center ms-auto">*/}
                                            {/*    <a className="btn btn-link px-3" onClick={handleLoginFacebook}>*/}
                                            {/*        <i className="fa fa-facebook text-white text-lg"></i>*/}
                                            {/*    </a>*/}
                                            {/*</div>*/}
                                            <div className="col text-center  ">
                                                <a className="btn btn-link px-3" onClick={handleLoginGoogle}>
                                                    <i className="fa fa-google text-white text-lg"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div style={{
                                        display: "flex",
                                        textAlign: "center",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}>
                                        <RadioGroup name="use-radio-group" defaultValue="client">
                                            <div className="row">
                                                <div className="col">
                                                    <FormControlLabel value="client" label="Client"
                                                        control={<Radio onChange={client}
                                                            style={{ color: "#A38182" }} />} />
                                                </div>
                                                <div className="col">
                                                    <FormControlLabel value="partner" label="Partner"
                                                        control={<Radio onChange={partner}
                                                            style={{ color: "#A38182" }} />} />
                                                </div>
                                            </div>
                                        </RadioGroup>

                                    </div>
                                    <div role="form" className="text-start" hidden={showForm}>
                                        <div className="row">
                                            <div className="col">
                                                <div className="input-group input-group-outline my-3">
                                                    <input onChange={(e) => setLastname(e.target.value)} required
                                                        placeholder="Lastname" type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="input-group input-group-outline my-3">
                                                    <input onChange={(e) => setFirstname(e.target.value)} required
                                                        placeholder="Firstname" type="text" className="form-control"
                                                        maxlength="30" />
                                                </div>
                                            </div>
                                        </div>


                                        <div className="input-group input-group-outline my-3">
                                            <input
                                                style={{ borderColor: errorEmail && "red" }}
                                                onChange={(e) => {
                                                    setEmail(e.target.value);
                                                    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;
                                                    if (!regex.test(email)) {
                                                        setErrorEmail("Please enter a valid email")
                                                    } else {
                                                        setErrorEmail("")
                                                    }
                                                }} required placeholder="Email"
                                                type="email" className="form-control" />
                                        </div>
                                        <div className="input-group input-group-outline mb-3">
                                            <input
                                                style={{borderColor: error === "Password must contain at least 6 characters, 1 uppercase and 1 number" && "red"}}
                                                placeholder="Password"
                                                type="password"
                                                onChange={(e) => {
                                                    setPwd(e.target.value);
                                                    const regex = /^(?=.*[A-Z])(?=.*\d).{5,}$/;
                                                    if (!regex.test(pwd)) {
                                                        setError("Password must contain at least 6 characters, 1 uppercase and 1 number")
                                                    } else {
                                                        setError("")
                                                    }
                                                }}
                                                value={pwd}
                                                ref={inputRef}
                                                required
                                                minLength="6"
                                                aria-invalid={validPwd ? "false" : "true"}
                                                aria-describedby="pwdnote"
                                                className="form-control" />
                                        </div>
                                        <div className="input-group input-group-outline mb-3">
                                            <input placeholder="Confirm Password"
                                                onChange={(e) => setMatchPwd(e.target.value)}
                                                value={matchPwd}
                                                required
                                                style={{ borderColor: (!((validMatch && matchPwd) || matchPwd === "")) && "red" }}
                                                aria-invalid={validMatch ? "false" : "true"}
                                                aria-describedby="confirmnote"
                                                type="password" className="form-control" />
                                        </div>
                                        <div className="row">
                                            <div className="col">

                                                <input onChange={(e) => setPhone(e.target.value)} required
                                                    placeholder="Phone"
                                                    type="number" className="form-control" />
                                            </div>
                                            <div className="col">
                                                <input onChange={(e) => setBirthday(e.target.value)} placeholder="Birthday"
                                                    type="date" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="form-check form-switch d-flex align-items-center mb-3">
                                            <Switch color="default" />
                                            <label className="form-check-label mb-0 ms-3" htmlFor="rememberMe">Remember
                                                me</label>
                                        </div>
                                        <div className="input-group input-group-outline my-3"
                                            hidden={error === "" && errorEmail === ""}
                                            style={{ color: "#e55757", textAlign: "center" }}>
                                            <label className="form-check-label mb-0 ms-3" htmlFor="rememberMe"
                                                style={{ color: "#e55757", textAlign: "center" }}>
                                                {error}
                                            </label>
                                        </div>
                                        <div className="input-group input-group-outline my-3"
                                            hidden={errorEmail === ""}
                                            style={{ color: "#e55757", textAlign: "center" }}>
                                            <label className="form-check-label mb-0 ms-3" htmlFor="rememberMe"
                                                style={{ color: "#e55757", textAlign: "center" }}>
                                                {errorEmail}
                                            </label>
                                        </div>
                                        <div className="input-group input-group-outline my-3"
                                            hidden={error2 === ""}
                                            style={{ color: "#e55757", textAlign: "center" }}>
                                            <label className="form-check-label mb-0 ms-3" htmlFor="rememberMe"
                                                   style={{color: "#e55757", textAlign: "center"}}>
                                                {error2}
                                            </label>
                                        </div>
                                        <div className="text-center">
                                            <button onClick={handle1}
                                                    disabled={(!((validMatch && matchPwd) || matchPwd === "")) || email === "" || error !== "" || errorEmail !== "" || firstname === "" || lastname === "" || pwd === "" || phone === ""}
                                                    className="btn bg-gradient-primary w-100 my-4 mb-2">Sign Up
                                            </button>
                                        </div>
                                        <div hidden={loading} style={{width: '50px', margin: 'auto', display: 'block'}}>
                                            <ClipLoader color="#bb3a41" size={30}/>
                                        </div>
                                    </div>

                                    <div role="form" className="text-start" hidden={!showForm}>

                                        <div className="input-group input-group-outline my-3">
                                            <input onChange={(e) => setCom(e.target.value)} required
                                                placeholder="Commercial Name" type="text" className="form-control"
                                                maxLength="30" />
                                        </div>
                                        <div className="input-group input-group-outline my-3">
                                            <input onChange={(e) => setAddress(e.target.value)} required
                                                placeholder="Address" type="text" className="form-control"
                                                maxLength="30" />
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="input-group input-group-outline my-3">
                                                    <input onChange={(e) => setLastname(e.target.value)} required
                                                        placeholder="Lastname" type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="input-group input-group-outline my-3">
                                                    <input onChange={(e) => setFirstname(e.target.value)} required
                                                        placeholder="Firstname" type="text" className="form-control"
                                                        maxLength="30" />
                                                </div>
                                            </div>
                                        </div>


                                        <div className="input-group input-group-outline my-3">
                                            <input
                                                style={{borderColor: errorEmail && "red"}}
                                                onChange={(e) => {
                                                    setEmail(e.target.value);
                                                    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;
                                                    if (!regex.test(email)) {
                                                        setErrorEmail("Please enter a valid email")
                                                    } else {
                                                        setErrorEmail("")
                                                    }
                                                }} required placeholder="Email"
                                                type="email" className="form-control" />
                                        </div>
                                        <div className="input-group input-group-outline mb-3">
                                            <input style={{borderColor: error && "red"}} placeholder="Password"
                                                   type="password"
                                                   onChange={(e) => {
                                                       setPwd(e.target.value);
                                                       const regex = /^(?=.*[A-Z])(?=.*\d).{5,}$/;
                                                       if (!regex.test(pwd)) {
                                                           setError("Password must contain at least 6 characters, 1 uppercase and 1 number")
                                                       } else {
                                                           setError("")
                                                       }
                                                   }}
                                                   value={pwd}
                                                   ref={inputRef}
                                                   required
                                                   minLength="6"
                                                   aria-invalid={validPwd ? "false" : "true"}
                                                   aria-describedby="pwdnote"
                                                   className="form-control"/>
                                        </div>
                                        <div className="input-group input-group-outline mb-3">
                                            <input placeholder="Confirm Password"
                                                   onChange={(e) => setMatchPwd(e.target.value)}
                                                   value={matchPwd}
                                                   required
                                                   style={{borderColor: (!((validMatch && matchPwd) || matchPwd === "")) && "red"}}
                                                   aria-invalid={validMatch ? "false" : "true"}
                                                   aria-describedby="confirmnote"
                                                   type="password" className="form-control"/>
                                        </div>
                                        <div className="row">
                                            <div className="col">

                                                <input onChange={(e) => setPhone(e.target.value)} required
                                                    placeholder="Phone"
                                                    type="number" className="form-control" />
                                            </div>
                                            <div className="col">
                                                <input onChange={(e) => setBirthday(e.target.value)} placeholder="Birthday"
                                                    type="date" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="form-check form-switch d-flex align-items-center mb-3">
                                            <Switch color="default" />
                                            <label className="form-check-label mb-0 ms-3" htmlFor="rememberMe">Remember
                                                me</label>
                                        </div>
                                        <div className="input-group input-group-outline my-3"
                                            hidden={error === "" && errorEmail === ""}
                                            style={{ color: "#e55757", textAlign: "center" }}>
                                            <label className="form-check-label mb-0 ms-3" htmlFor="rememberMe"
                                                style={{ color: "#e55757", textAlign: "center" }}>
                                                {error}
                                            </label>
                                        </div>
                                        <div className="input-group input-group-outline my-3"
                                            hidden={errorEmail === ""}
                                            style={{ color: "#e55757", textAlign: "center" }}>
                                            <label className="form-check-label mb-0 ms-3" htmlFor="rememberMe"
                                                style={{ color: "#e55757", textAlign: "center" }}>
                                                {errorEmail}
                                            </label>
                                        </div>
                                        <div className="input-group input-group-outline my-3"
                                            hidden={error2 === ""}
                                            style={{ color: "#e55757", textAlign: "center" }}>
                                            <label className="form-check-label mb-0 ms-3" htmlFor="rememberMe"
                                                style={{ color: "#e55757", textAlign: "center" }}>
                                                {error2}
                                            </label>
                                        </div>
                                        <div className="text-center">
                                            <button onClick={handle2partner}
                                                    disabled={(!((validMatch && matchPwd) || matchPwd === "")) || email === "" || error !== "" || errorEmail !== "" || firstname === "" || lastname === "" || pwd === "" || phone === ""}
                                                    className="btn bg-gradient-primary w-100 my-4 mb-2">Sign Up
                                            </button>
                                        </div>

                                        <div hidden={loading} style={{width: '50px', margin: 'auto', display: 'block'}}>
                                            <ClipLoader color="#bb3a41" size={30}/>
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

export default Up;
