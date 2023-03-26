import React, {useEffect, useRef, useState} from 'react';
import {useLocalState} from "../utils/UseLocalStorage";
import {Navigate} from "react-router-dom";
import Nav from "../navBar/Nav";

const Password = () => {
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

    const inputRef = useRef(null);
    const [jwt, setJwt] = useLocalState("", "jwt");
    const [user, setUser] = useLocalState(null, "user");
    const [error, setError] = useState("");
    const [redirect, setRedirect] = useState(false);

    const handle = async () => {
        const reqBody = {
            'id': user.id,
            'password': pwd
        };
        await fetch("/api/v1/user/updatePassword", {
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
                setRedirect(true);

            }).catch((message) => {
                setError("An error occured please try again!")
            });
    }
    return jwt === "" || redirect === true ? <Navigate to="/"/> : (
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

                            <div className="row">
                                <div className="row">
                                    <div>
                                        <div className="card card-plain h-100">
                                            <div className="card-header pb-0 p-3">
                                                <div className="row">
                                                    <div className="col-md-8 d-flex align-items-center">
                                                        <h6 className="mb-0">Change Password</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body p-3">
                                                <div className="horizontal gray-light my-4">
                                                    <div className="card-body">

                                                        <div className="input-group input-group-outline mb-3">
                                                            <label htmlFor="">Password</label>
                                                            <input style={{borderColor: error && "red"}}
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
                                                                   onFocus={() => setPwdFocus(true)}
                                                                   onBlur={() => setPwdFocus(false)}
                                                                   className="form-control"/>
                                                        </div>

                                                        <label htmlFor="">Confirm Password</label>
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
                                                        <div className="text-center">
                                                            <button disabled={pwd === ""}
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

export default Password;
