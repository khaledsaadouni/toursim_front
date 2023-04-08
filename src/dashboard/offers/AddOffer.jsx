import React, {useState} from 'react';
import {Navigate} from "react-router-dom";
import {useLocalState} from "../../utils/UseLocalStorage";

const AddOffer = () => {
    const [accom, setAccom] = useState(false)
    const [resto, setResto] = useState(false)
    const [event, setEvent] = useState(false)
    const showAccomForm = () => {
        setEvent(false)
        setResto(false)
        setAccom(true)
    }
    const showRestoForm = () => {
        setEvent(false)
        setResto(true)
        setAccom(false)
    }
    const showEventForm = () => {
        setEvent(true)
        setResto(false)
        setAccom(false)
    }
    const [checkedValues, setCheckedValues] = useState([]);

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
    const [inputs1, setInputs1] = useState([]);

    const handleInputChange1 = (index, event) => {
        const newInputs = [...inputs1];
        newInputs[index] = event.target.value;
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

    const [jwt, setJwt] = useLocalState("", "jwt");
    const [user, setUser] = useLocalState(null, "user");
    const [redirect, setRedirect] = useState(false);
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");
    const [capacity, setCapacity] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [state, setState] = useState("");
    const [menu, setMenu] = useState("");
    const [open, setOpen] = useState("");
    const [close, setClose] = useState("");
    const [duration, setDuration] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [googlemap, setGooglemap] = useState("");
    const handleAddAccom = async () => {
        const reqBody = {
            'name': name,
            'type': type,
            'price': price,
            'capacity': capacity,
            'description': description,
            'emplacement': location,
            'destination': state,
            'regulations': inputs1,
            'socialMediaLink': inputs,
            'comodityList': checkedValues,
            'google_map': googlemap

        };
        await fetch(`/api/v1/accomodation/add/${user.id}`, {
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
    const handleAddEvent = async () => {
        const reqBody = {
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
            'google_map': googlemap

        };
        await fetch(`/api/v1/event/add/${user.id}`, {
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
    const handleAddResto = async () => {
        const reqBody = {
            'name': name,
            'type': type,
            'capacity': capacity,
            'description': description,
            'menu': menu,
            'emplacement': location,
            'destination': state,
            'socialMediaLink': inputs,
            'opening': open.toString(),
            'closing': close.toString(),
            'google_map': googlemap

        };
        await fetch(`/api/v1/restoration/add/${user.id}`, {
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
                                            <h3 className="mb-0">Add Offer</h3>
                                        </div>
                                        <div className="card-body">

                                            <div className="input-group input-group-outline my-3">
                                                <label> Offer Type</label>
                                                <div className="col-4">


                                                    <label>
                                                        <input onClick={showAccomForm} type="radio" name="type"
                                                               value="accommodation"/>
                                                        Accommodation
                                                    </label>
                                                </div>
                                                <div className="col-3">
                                                    <label>
                                                        <input onClick={showEventForm} type="radio" name="type"
                                                               value="event"/>
                                                        Event
                                                    </label>
                                                </div>
                                                <div className="col-3">
                                                    <label>
                                                        <input onClick={showRestoForm} type="radio" name="type"
                                                               value="restaurant"/>
                                                        Restaurant
                                                    </label>
                                                </div>
                                            </div>
                                            <div hidden={accom === false}>
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
                                                                onChange={(event) => handleInputChange1(index, event)}
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
                                                    <label> Commodity </label>
                                                    <label>
                                                        <input
                                                            type="checkbox"
                                                            value="Pool"
                                                            checked={checkedValues.includes("Pool")}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        &nbsp; Pool
                                                    </label>
                                                    <label>
                                                        <input
                                                            type="checkbox"
                                                            value="Parking"
                                                            checked={checkedValues.includes("Parking")}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        &nbsp; Parking
                                                    </label>
                                                    <label>
                                                        <input
                                                            type="checkbox"
                                                            value="Tv"
                                                            checked={checkedValues.includes("Tv")}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        &nbsp; Tv
                                                    </label>
                                                    <label>
                                                        <input
                                                            type="checkbox"
                                                            value="AC"
                                                            checked={checkedValues.includes("AC")}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        &nbsp; AC
                                                    </label>
                                                    <label>
                                                        <input
                                                            type="checkbox"
                                                            value="Garden"
                                                            checked={checkedValues.includes("Garden")}
                                                            onChange={handleCheckboxChange}
                                                        />
                                                        &nbsp;Garden
                                                    </label>
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
                                                                onClick={handleAddAccom}>Save
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div hidden={event === false}>
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
                                                                onChange={(event) => handleInputChange1(index, event)}
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
                                            <div hidden={resto === false}>
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
                                                    <label> Menu </label>
                                                    <textarea
                                                        value={menu}
                                                        onChange={(event) => setMenu(event.target.value)}
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
                                                                onClick={handleAddResto}>Save
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

export default AddOffer;
