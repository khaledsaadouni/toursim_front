import React, {useEffect, useState} from 'react';
import {useLocalState} from "../../utils/UseLocalStorage";
import {Navigate, useParams} from "react-router-dom";
import ClipLoader from 'react-spinners/ClipLoader';

const EditEvent = () => {

    const {id} = useParams();
    const [jwt, setJwt] = useLocalState("", "jwt");
    const [user, setUser] = useLocalState(null, "user");
    const [redirect, setRedirect] = useState(false);
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");
    const [capacity, setCapacity] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [state, setState] = useState("");
    const [idAccom, setIdAccom] = useState(-1);
    const [duration, setDuration] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [inputs, setInputs] = useState([]);
    const [inputs1, setInputs1] = useState([]);
    const [googlemap, setGooglemap] = useState("");
    const handleInputChange = (index, event) => {
        const newInputs = [...inputs];
        newInputs[index] = event.target.value;
        setInputs(newInputs);
    };

    const handleAddInput = () => {
        setInputs([...inputs, ""]);
    };
    const handleDeleteInput = (index) => {
        const newInputs = [...inputs];
        newInputs.splice(index, 1);
        setInputs(newInputs);

    };

    const handleInputChange1 = (index, value) => {
        const newInputs = [...inputs1];
        newInputs[index] = value;
        setInputs1(newInputs);
    };

    const handleAddInput1 = () => {
        setInputs1([...inputs1, ""]);
    };
    const handleDeleteInput1 = (index) => {
        const newInputs = [...inputs1];
        newInputs.splice(index, 1);
        setInputs1(newInputs);
    };
    const [inputs2, setInputs2] = useState([]);
    const handleDeleteInput2 = (index) => {
        const newInputs = [...inputs2];
        newInputs.splice(index, 1);
        setInputs2(newInputs);
    };
    useEffect(() => {
        const asyncfn = async () => {
            await fetch(`/api/v1/event/${id}`, {
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
                    setName(data.name)
                    setType(data.type)
                    setPrice(data.price)
                    setCapacity(data.capacity)
                    setDescription(data.description)
                    setDuration(data.duration)
                    setEventDate(data.eventDate)
                    setLocation(data.emplacement)
                    setState(data.destination)
                    setInputs1(data.regulations)
                    setInputs(data.socialMediaLink)
                    setInputs2(data.photo)
                    setGooglemap(data.google_map)
                }).catch(() => {
                });

        };
        asyncfn()
    }, [id, jwt]);

    const handleAddEvent = async () => {
        const reqBody = {
            'id': idAccom,
            'name': name,
            'type': type,
            'price': price,
            'capacity': capacity,
            'description': description,
            'emplacement': location,
            'destination': state,
            'regulations': inputs1,
            'socialMediaLink': inputs,
            'duration': duration,
            'eventDate': eventDate,
            'photo': inputs2,
            'google_map': googlemap

        };
        await fetch(`/api/v1/event/update`, {
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
            .then(() => {
                setRedirect(true)
            }).catch(() => {
            });
    }

    const [error, setError] = useState("");
    const [file, setFile] = useState(null);
    const handleFileChange = (event) => {
        setError("")
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {

        const formData = new FormData();
        formData.append("file", file);
        if (file != null) {
            setLoading(false)
            await fetch(`/api/v1/photo/${id}/restoration${user.email}/event`, {
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
                    setLoading(true)
                    window.location.reload();
                }).catch(() => {

                    setLoading(true)
                    setError("File's size is too big , Please Try Again")
                });
        } else {
            setError("Please select a file")
        }
    };

    return redirect ? <Navigate to={"/dashboard/offers"}/> : (
        <React.Fragment>

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
                                            <h3 className="mb-0">Edit Event</h3>
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
                                                            <div className="col">
                                                                <div hidden={loading} style={{
                                                                    width: '50px',
                                                                    margin: 'auto',
                                                                    display: 'block'
                                                                }}>
                                                                    <ClipLoader color="#bb3a41" size={30}/>
                                                                </div>
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
                                                                <div className="input-group input-group-outline my-3"
                                                                     key={index}>
                                                                    <img src={value} style={{
                                                                        height: "150px",
                                                                        width: "75px",
                                                                        objectFit: "contain"
                                                                    }} alt={`event  ${index}`}/>
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
                                                    <label> Name </label>
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
                                                    <label> Price (Dt)</label>
                                                    <input type="number"
                                                           value={price}
                                                           onChange={(event) => setPrice(event.target.value)}
                                                           className="form-control"/>
                                                </div>
                                                <div className="input-group input-group-outline my-3">
                                                    <label> Capacity </label>
                                                    <input type="number"
                                                           value={capacity}
                                                           onChange={(event) => setCapacity(event.target.value)}
                                                           className="form-control"/>
                                                </div>
                                                <div className="input-group input-group-outline my-3">
                                                    <label> Duration (hours)</label>
                                                    <input type="number"
                                                           value={duration}
                                                           onChange={(event) => setDuration(event.target.value)}
                                                           className="form-control"/>
                                                </div>
                                                <div className="input-group input-group-outline my-3">
                                                    <label> Event Date </label>
                                                    <input type="date"
                                                           value={eventDate}
                                                           onChange={(event) => setEventDate(event.target.value)}
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
                                                    <label> Regulations</label>

                                                    {inputs1.map((value, index) => (
                                                        <div className="input-group input-group-outline my-3"
                                                             key={index}>
                                                            <input
                                                                className="form-control"
                                                                value={value}
                                                                onChange={(event) => handleInputChange1(index, event.target.value)}
                                                            />
                                                            <button style={{
                                                                backgroundColor: "white",
                                                                border: "0px solid",
                                                                color: "red"
                                                            }} onClick={() => handleDeleteInput1(index)}>X
                                                            </button>
                                                        </div>
                                                    ))}
                                                    <div className="row">
                                                        <button className="btn btn-primary"
                                                                onClick={handleAddInput1}>+
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="input-group input-group-outline my-3">
                                                    <label> Social Media Links </label>

                                                    {inputs.map((value, index) => (
                                                        <div className="input-group input-group-outline my-3"
                                                             key={index}>
                                                            <input
                                                                className="form-control"
                                                                value={value}
                                                                onChange={(event) => handleInputChange(index, event)}
                                                            />
                                                            <button style={{
                                                                backgroundColor: "white",
                                                                border: "0px solid",
                                                                color: "red"
                                                            }} onClick={() => handleDeleteInput(index)}>X
                                                            </button>
                                                        </div>
                                                    ))}
                                                    <div className="row">
                                                        <button className="btn btn-primary" onClick={handleAddInput}>+
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="input-group input-group-outline my-3">
                                                    <div className="row">
                                                        <button className="btn btn-primary"
                                                                onClick={handleAddEvent}>Save
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
        </React.Fragment>
    );
};

export default EditEvent;
