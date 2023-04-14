import React, {useEffect, useState} from 'react';
import {useLocalState} from "../../utils/UseLocalStorage";
import {Navigate, useParams} from "react-router-dom";

const EditShop = () => {

    const {id} = useParams();
    const [idAccom, setIdAccom] = useState(-1);
    const [jwt, setJwt] = useLocalState("", "jwt");
    const [user, setUser] = useLocalState(null, "user");
    const [redirect, setRedirect] = useState(false);
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [state, setState] = useState("");
    const [open, setOpen] = useState("");
    const [close, setClose] = useState("");
    const [inputs2, setInputs2] = useState([]);
    const handleDeleteInput2 = (index) => {
        const newInputs = [...inputs2];
        newInputs.splice(index, 1);
        setInputs2(newInputs);
    };
    useEffect(() => {
        const asyncfn = async () => {
            await fetch(`/api/v1/artisan/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwt}`
                },
                method: "GET",
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
                .then(([data]) => {
                    setIdAccom(data.id)
                    setName(data.commercial_name)
                    setType(data.type)
                    setOpen(data.opening_hour)
                    setClose(data.closing_hour)
                    setDescription(data.description)
                    setLocation(data.emplacement)
                    setState(data.destination)
                    setInputs2(data.photo)
                    setGooglemap(data.google_map)
                }).catch(() => {
                });

        };
        asyncfn()
    }, [id, jwt]);
    const handleAddAccom = async () => {
        const reqBody = {
            'id': idAccom,
            'commercial_name': name,
            'type': type,
            'description': description,
            'emplacement': location,
            'destination': state,
            'closing_hour': close,
            'opening_hour': open,
            'google_map': googlemap,
            'photo': inputs2


        };
        await fetch(`/api/v1/artisan/update`, {
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
            .then(() => {
                setRedirect(true)
            }).catch(() => {
            });
    }

    const [file, setFile] = useState(null);
    const [error, setError] = useState("");
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };
    const [googlemap, setGooglemap] = useState("");

    const handleUpload = async () => {

        const formData = new FormData();
        formData.append("file", file);

        await fetch(`/api/v1/photo/${id}/artisan${user.email}/shop`, {
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
            .then(() => {
                setError("")
                window.location.reload();
            }).catch(() => {
                setError("File's size is too big , Please Try Again")
            });
    };
    return redirect ? <Navigate to={"/dashboard/offers"}/> : (
        <React.Fragment>

            <div>

                <div id="page_content_wrapper  " className="hasbg " style={{marginTop: "70px"}}>

                    <div className="main-content position-relative max-height-vh-100 h-100"
                         style={{marginTop: "50px", marginLeft: "25%"}}>
                        <div className="container-fluid px-2 px-md-4">

                            <div className="card card-body mx-3 mx-md-4 mt-n6"
                                 style={{
                                     boxShadow: '0px 5px 15px 3px rgba(0, 0, 0, 0.3)',
                                     borderRadius: "5px",
                                     width: "800px"
                                 }}>
                                <div className="card card-plain h-100">
                                    <div className="card-body p-3">
                                        <div className="horizontal gray-light my-4">
                                            <div className="col-md-8 d-flex align-items-center">
                                                <h3 className="mb-0">Edit Shop</h3>
                                            </div>
                                            <div className="card-body">
                                                <div>
                                                    <div className="input-group input-group-outline my-3">
                                                        <div className="h-100">
                                                            <div className="row">
                                                                <div className="col">
                                                                    <input type="file" className="form-control"
                                                                           style={{
                                                                               backgroundColor: "#eeeeee",
                                                                               color: "black"
                                                                           }}
                                                                           onChange={handleFileChange}/>
                                                                </div>
                                                                <div className="col">
                                                                    <button type="submit" className="form-control"
                                                                            style={{
                                                                                backgroundColor: "#eeeeee",
                                                                                color: "black"
                                                                            }}
                                                                            onClick={handleUpload}>Upload
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className="h-100" style={{color: "darkred"}}
                                                                 hidden={error === ""}>
                                                                {error}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="input-group input-group-outline my-3">
                                                        <label> Photos </label>
                                                        <div className="row">

                                                            {inputs2.map((value, index) => (
                                                                <div className="col">
                                                                    <div
                                                                        className="input-group input-group-outline my-3"
                                                                        key={index}>
                                                                        <img src={value} style={{
                                                                            height: "150px",
                                                                            width: "75px",
                                                                            objectFit: "contain"
                                                                        }} alt="accom"/>
                                                                        <button style={{
                                                                            backgroundColor: "white",
                                                                            border: "0px solid",
                                                                            color: "red"
                                                                        }} onClick={() => handleDeleteInput2(index)}>X
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="input-group input-group-outline my-3">
                                                        <label> Commercial Name </label>
                                                        <input type="text"
                                                               value={name}
                                                               onChange={(event) => setName(event.target.value)}
                                                               className="form-control"/>
                                                    </div>
                                                    <div className="input-group input-group-outline my-3">
                                                        <label> Type </label>
                                                        <input type="text"

                                                               value={type}
                                                               onChange={(event) => setType(event.target.value)}
                                                               className="form-control"/>
                                                    </div>
                                                    <div className="input-group input-group-outline my-3">
                                                        <label> Description </label>
                                                        <textarea

                                                            value={description}
                                                            onChange={(event) => setDescription(event.target.value)}
                                                            className="form-control"/>
                                                    </div>
                                                    <div className="input-group input-group-outline my-3">
                                                        <label> Opening Hour </label>
                                                        <input type="time"
                                                               value={open}
                                                               onChange={(event) => setOpen(event.target.value)}
                                                               className="form-control"/>
                                                    </div>
                                                    <div className="input-group input-group-outline my-3">
                                                        <label> Closing Hour </label>
                                                        <input type="time"
                                                               value={close}
                                                               onChange={(event) => setClose(event.target.value)}
                                                               className="form-control"/>
                                                    </div>
                                                    <div className="input-group input-group-outline my-3">
                                                        <label> Location </label>
                                                        <input type="text"

                                                               value={location}
                                                               onChange={(event) => setLocation(event.target.value)}
                                                               className="form-control"/>
                                                    </div>
                                                    <div className="input-group input-group-outline my-3">
                                                        <label> Google Map Link</label>
                                                        <input type="text"

                                                               value={googlemap}
                                                               onChange={(event) => setGooglemap(event.target.value)}
                                                               className="form-control"/>
                                                    </div>
                                                    <div className="input-group input-group-outline my-3">
                                                        <label> State </label>
                                                        <select id="size" name="State"

                                                                value={state}
                                                                onChange={(event) => setState(event.target.value)}
                                                                className="form-control">
                                                            <option value="Ariana">Ariana</option>
                                                            <option value="Beja">Beja</option>
                                                            <option value="Ben Arous"> Ben Arous</option>
                                                            <option value="Bizerte">Bizerte</option>
                                                            <option value="Gabes"> Gabes</option>
                                                            <option value="Gafsa">Gafsa</option>
                                                            <option value="Jendouba">Jendouba</option>
                                                            <option value="Kairouan">Kairouan</option>
                                                            <option value="Kasserine">Kasserine</option>
                                                            <option value="Kebili">Kebili</option>
                                                            <option value="Kef">Kef</option>
                                                            <option value="Mahdia">Mahdia</option>
                                                            <option value="Manouba">Manouba</option>
                                                            <option value="Medenine">Medenine</option>
                                                            <option value="Monastir">Monastir</option>
                                                            <option value="Nabeul">Nabeul</option>
                                                            <option value="Sfax"> Sfax</option>
                                                            <option value="Sidi Bouzid"> Sidi Bouzid</option>
                                                            <option value="Siliana"> Siliana</option>
                                                            <option value="Sousse">Sousse</option>
                                                            <option value="Tataouine">Tataouine</option>
                                                            <option value="Tozeur">Tozeur</option>
                                                            <option value="Tunis">Tunis</option>
                                                            <option value="Zaghouan">Zaghouan</option>
                                                        </select>
                                                    </div>
                                                    <div className="input-group input-group-outline my-3">
                                                        <div className="row">
                                                            <button className="btn btn-primary"
                                                                    onClick={handleAddAccom}>Save
                                                            </button>
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

export default EditShop;
