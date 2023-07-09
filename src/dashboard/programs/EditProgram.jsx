import React, {useEffect, useState} from 'react';
import {useLocalState} from "../../utils/UseLocalStorage";
import {Navigate, useParams} from "react-router-dom";
import ClipLoader from 'react-spinners/ClipLoader';

const EditProgram = () => {

    const {id} = useParams();
    const [jwt, setJwt] = useLocalState("", "jwt");
    const [user, setUser] = useLocalState(null, "user");

    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [loading, setLoading] = useState(true);
    const [redirect, setRedirect] = useState(false);
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");
    const [capacity, setCapacity] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [state, setState] = useState("");
    const [regulations, setRegulations] = useState([]);
    const [idAccom, setIdAccom] = useState(-1);
    const [inputs1, setInputs1] = useState([]);
    const [inputs2, setInputs2] = useState([]);
    const [error, setError] = useState("");
    const [file, setFile] = useState(null);
    const [checkedValues, setCheckedValues] = useState([]);
    const [googlemap, setGooglemap] = useState("");
    const [allow, setAllow] = useState(false);
    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            setCheckedValues([...checkedValues, value]);
        } else {
            const index = checkedValues.indexOf(value);
            const newCheckedValues = [...checkedValues];
            newCheckedValues.splice(index, 1);
            setCheckedValues(newCheckedValues);
        }

        console.log(checkedValues)
    };
    const [inputs, setInputs] = useState([]);

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

    const handleDeleteInput2 = (index) => {
        const newInputs = [...inputs2];
        newInputs.splice(index, 1);
        setInputs2(newInputs);
    };
    const [inputs3, setInputs3] = useState([]);

    const handleInputNameChange3 = (index, event) => {
        const newInputs = [...inputs3];
        newInputs[index] = {...newInputs[index], "name": event.target.value};
        console.log(newInputs);
        setInputs3(newInputs);
    };
    const handleInputStartChange3 = (index, event) => {
        const newInputs = [...inputs3];
        const date = event.target.value + ":00"
        newInputs[index] = {...newInputs[index], "start": date};
        console.log(newInputs);
        setInputs3(newInputs);
    };
    const handleInputEndChange3 = (index, event) => {
        const newInputs = [...inputs3];
        const date = event.target.value + ":00"
        newInputs[index] = {...newInputs[index], "end": date};
        console.log(newInputs);
        setInputs3(newInputs);
    };

    const handleAddInput3 = () => {
        setInputs3([...inputs3, ""]);
    };
    const handleDeleteInput3 = (index) => {
        const newInputs = [...inputs3];
        newInputs.splice(index, 1);
        setInputs3(newInputs);
    };
    useEffect(() => {
        const asyncfn = async () => {
            await fetch(`/api/v1/program/${id}`, {
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
                    setPrice(data.price)
                    setCapacity(data.capacity)
                    setDescription(data.description)
                    setLocation(data.emplacement)
                    setState(data.destination)
                    setInputs2(data.photo)
                    setInputs3(data.activities)
                    setStart(data.startDate)
                    setEnd(data.endDate)
                    console.log(data)
                    // for (let e of inputs3){
                    //     e.start=e.start.substring(0, 5);
                    //     e.end=e.end.substring(0, 5);
                    // }
                }).catch(() => {
                });

        };
        asyncfn()
    }, [id, jwt]);

    const handleAddAccom = async () => {
        const reqBody = {
            'id': id,
            'name': name,
            'price': price,
            'photo': inputs2,
            'capacity': capacity,
            'description': description,
            'emplacement': location,
            'destination': state,
            'google_map': googlemap,
            'startDate': start,
            'endDate': end,
            'activities': inputs3

        };
        await fetch(`/api/v1/program/update`, {
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
    const handleFileChange = (event) => {
        setError("")
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {

        const formData = new FormData();
        formData.append("file", file);
        if (file != null) {
            setLoading(false)
            await fetch(`/api/v1/photo/${id}/prog${user.email}/program`, {
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
                    setLoading(true)
                    setError("")
                    window.location.reload();
                }).catch(() => {
                    setLoading(true)
                    setError("File's size is too big , Please Try Again")
                });
        } else {
            setError("Please select a file")
        }
    };

    return redirect ? <Navigate to={"/dashboard/programs"}/> : (
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
                                            <h3 className="mb-0">Edit Program </h3>
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
                                                                           color: "black",
                                                                           width: "400px"
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
                                                    <label> Name </label>
                                                    <input type="text"
                                                           value={name}
                                                           onChange={(event) => setName(event.target.value)}
                                                           className="form-control"/>
                                                </div>
                                                <div className="input-group input-group-outline my-3">
                                                    <label> Start Date </label>
                                                    <input type="date"
                                                           value={start}
                                                           onChange={(event) => setStart(event.target.value)}
                                                           className="form-control"/>
                                                </div>
                                                <div className="input-group input-group-outline my-3">
                                                    <label> End Date </label>
                                                    <input type="date"
                                                           value={end}
                                                           onChange={(event) => setEnd(event.target.value)}
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
                                                    <label> Activities </label>

                                                    {inputs3.map((value, index) => (
                                                        <div className="input-group input-group-outline my-3"
                                                             key={index}>
                                                            <div className="row">
                                                                <div className="col"> Activity:</div>
                                                                <div className="col">
                                                                    <input
                                                                        style={{width: "150px"}}
                                                                        className="form-control"
                                                                        value={value.name}
                                                                        onChange={(event) => handleInputNameChange3(index, event)}
                                                                    />
                                                                </div>
                                                                <div className="col">Start:</div>
                                                                <div className="col"><input
                                                                    type="time"

                                                                    className="form-control"
                                                                    value={value.start}
                                                                    onChange={(event) => handleInputStartChange3(index, event)}
                                                                /></div>
                                                                <div className="col">End:</div>
                                                                <div className="col"><input
                                                                    type="time"

                                                                    className="form-control"
                                                                    value={value.end}
                                                                    onChange={(event) => handleInputEndChange3(index, event)}
                                                                /></div>
                                                                <div className="col">
                                                                    <button style={{
                                                                        backgroundColor: "white",
                                                                        border: "0px solid",
                                                                        color: "red"
                                                                    }} onClick={() => handleDeleteInput3(index)}>X
                                                                    </button>
                                                                </div>
                                                            </div>


                                                        </div>
                                                    ))}
                                                    <div className="row">
                                                        <button className="btn btn-primary" onClick={handleAddInput3}>+
                                                        </button>
                                                    </div>
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
        </React.Fragment>
    );
};

export default EditProgram;
