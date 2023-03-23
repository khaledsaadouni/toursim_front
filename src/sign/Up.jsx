import React, {useEffect, useRef, useState} from 'react';
import {FormControlLabel, Radio, RadioGroup, Switch} from "@mui/material";
import "./sign.css"
import {useLocalState} from "../utils/UseLocalStorage";
import {Navigate} from "react-router-dom";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
const REGISTER_URL = "/api/v1/auth/register"
const Up = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [birthday, setBirthday] = useState("");
    const [pwd, setPwd] = useState("");
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);
    const [matchPwd, setMatchPwd] = useState("");
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    useEffect(() => {
        setValidPwd(pwd);
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [pwd, matchPwd])
    const validate_pwd = (input) => {
        setPwd(input)
        const regex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
        if (!regex.test(pwd)) {
            setError("erreura qad rassek")
        }
    };

    const [showForm, setShowForm] = useState(false);
    const client = () => {
        setShowForm(false);
    }
    const partner = () => {
        setShowForm(true);
    }
    const inputRef = useRef(null);
    const [error, setError] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [jwt, setJwt] = useLocalState("", "jwt");
    const handle1 = async () => {

        if (pwd === "" || email === "") {
            setError("Please enter email and password")
        }
        const reqBody = {
            'email': email,
            'password': pwd,
            'lastname': lastname,
            'firstname': firstname,
            'role': 'Client',
            'birthday': birthday.toString(),
            'phone': phone
        };
        console.log(errorEmail)
        console.log(error)
        console.log("error")
        console.log("2")
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
                setJwt(data.token);
            }).catch((message) => {
                setError("Email already exist!")
            });
    }

    return jwt ? <Navigate to="/"/> : (
        <React.Fragment>
            <div className="container my-auto">
                <div className="row">
                    <div className="col-lg-4 col-md-8 col-12 mx-auto">
                        <div className="card z-index-0 fadeIn3 fadeInBottom">
                            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                                    <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">Sign
                                        up</h4>
                                    <div className="row mt-3">
                                        <div className="col-2 text-center ms-auto">
                                            <a className="btn btn-link px-3" href="javascript:;">
                                                <i className="fa fa-facebook text-white text-lg"></i>
                                            </a>
                                        </div>
                                        <div className="col-2 text-center me-auto">
                                            <a className="btn btn-link px-3" href="javascript:;">
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
                                                                                  style={{color: "#A38182"}}/>}/>
                                            </div>
                                            <div className="col">
                                                <FormControlLabel value="partner" label="Partner"
                                                                  control={<Radio onChange={partner}
                                                                                  style={{color: "#A38182"}}/>}/>
                                            </div>
                                        </div>
                                    </RadioGroup>

                                </div>
                                <div role="form" className="text-start" hidden={showForm}>
                                    <div className="row">
                                        <div className="col">
                                            <div className="input-group input-group-outline my-3">
                                                <input onChange={(e) => setLastname(e.target.value)} required
                                                       placeholder="Lastname" type="text" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="input-group input-group-outline my-3">
                                                <input onChange={(e) => setFirstname(e.target.value)} required
                                                       placeholder="Firstname" type="text" className="form-control"
                                                       maxlength="30"/>
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
                                            type="email" className="form-control"/>
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
                                               onFocus={() => setPwdFocus(true)}
                                               onBlur={() => setPwdFocus(false)}
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
                                               onFocus={() => setMatchFocus(true)}
                                               onBlur={() => setMatchFocus(false)}
                                               type="password" className="form-control"/>
                                    </div>
                                    <div className="row">
                                        <div className="col">

                                            <input onChange={(e) => setPhone(e.target.value)} required
                                                   placeholder="Phone"
                                                   type="number" className="form-control"/>
                                        </div>
                                        <div className="col">
                                            <input onChange={(e) => setBirthday(e.target.value)} placeholder="Birthday"
                                                   type="date" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-check form-switch d-flex align-items-center mb-3">
                                        <Switch color="default"/>
                                        <label className="form-check-label mb-0 ms-3" htmlFor="rememberMe">Remember
                                            me</label>
                                    </div>
                                    <div className="input-group input-group-outline my-3"
                                         hidden={error === "" && errorEmail === ""}
                                         style={{color: "#e55757", textAlign: "center"}}>
                                        <label className="form-check-label mb-0 ms-3" htmlFor="rememberMe"
                                               style={{color: "#e55757", textAlign: "center"}}>
                                            {error}
                                        </label>
                                    </div>
                                    <div className="input-group input-group-outline my-3"
                                         hidden={errorEmail === ""}
                                         style={{color: "#e55757", textAlign: "center"}}>
                                        <label className="form-check-label mb-0 ms-3" htmlFor="rememberMe"
                                               style={{color: "#e55757", textAlign: "center"}}>
                                            {errorEmail}
                                        </label>
                                    </div>
                                    <div className="text-center">
                                        <button onClick={handle1}
                                                disabled={email === "" || firstname === "" || lastname === "" || pwd === "" || phone === ""}
                                                className="btn bg-gradient-primary w-100 my-4 mb-2">Sign Up
                                        </button>
                                    </div>

                                </div>


                                <div role="form" className="text-start" hidden={!showForm}>
                                    <div className="input-group input-group-outline my-3">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control"/>
                                    </div>
                                    <div className="input-group input-group-outline mb-3">
                                        <label className="form-label">s</label>
                                        <input type="password" className="form-control"/>
                                    </div>
                                    <div className="form-check form-switch d-flex align-items-center mb-3">
                                        <input className="form-check-input" type="checkbox" id="rememberMe"
                                               checked/>
                                        <label className="form-check-label mb-0 ms-3" htmlFor="rememberMe">Remember
                                            me</label>
                                    </div>
                                    <div className="text-center">
                                        <button type="button"
                                                className="btn bg-gradient-primary w-100 my-4 mb-2">Sign in
                                        </button>
                                    </div>
                                    <p className="mt-4 text-sm text-center">
                                        Don't have an account?
                                        <a href="../pages/sign-up.html"
                                           className="text-primary text-gradient font-weight-bold">Sign up</a>
                                    </p>
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
