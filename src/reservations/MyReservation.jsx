import React, {useEffect, useState} from 'react';
import {useLocalState} from "../utils/UseLocalStorage";
import {countCanceleddReservations, countConfirmedReservations, countPendingReservations} from "../utils/Count";
import Nav from "../navBar/Nav";
import {Navigate} from "react-router-dom";
import Stripe from "react-stripe-checkout";
import L from "leaflet";
import ClipLoader from "react-spinners/ClipLoader";

const MyReservation = () => {
    const [reservations, setReservations] = useState(null);
    const [originalReservations, setOriginalReservations] = useState(null);
    const [loading, setLoading] = useState(true);
    const [jwt, setJwt] = useLocalState("", "jwt");
    const [user, setUser] = useLocalState(null, "user");
    const [partner, setPartner] = useLocalState(null, "partner");
    useEffect(() => {
        setLoading(false)
        const asyncFn = async () => {
            try {
                await fetch(`/api/v1/reservation/all/client/${user.id}`, {
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
                    .then(([data, header]) => {
                        setLoading(true)
                        setReservations(data)
                        setOriginalReservations(data)
                    }).catch((message) => {
                    });
            } catch (error) {
            }
        };
        asyncFn();
    }, []);

    const handleConfirm = async (id) => {
        await fetch(`/api/v1/reservation/confirm/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt}`
            },
            method: "POST",
        }).then((response) => {
            if (response.status === 200) {
                window.location.reload();
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
            }).catch((message) => {
            });
    }
    const handleCancel = async (id) => {
        await fetch(`/api/v1/reservation/cancel/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt}`
            },
            method: "POST",
        }).then((response) => {
            if (response.status === 200) {

                window.location.reload();
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
                window.location.reload();
            }).catch((message) => {
            });
    }
    const handleDelete = async (id) => {
        await fetch(`/api/v1/reservation/delete/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt}`
            },
            method: "DELETE",
        }).then((response) => {
            if (response.status === 200) {

                window.location.reload();
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
                window.location.reload();
            }).catch((message) => {
            });
    }

    async function handleToken(token, id, prix) {
        console.log(token);
        console.log("jwt :", jwt)
        console.log("id :", id)
        await fetch('/api/v1/payment/charge',
            {
                headers: {
                    token: token.id,
                    amount: prix,
                    Authorization: `Bearer ${jwt}`,
                    reservation: id
                },
                method: "POST",
            }).then((response) => {
            if (response.status === 200) {
                window.location.reload();
            } else if (response.status === 401) {
                alert("401")
            } else {
                alert("error")
            }
        })
            .then((data) => {
                window.location.reload();
            }).catch((message) => {
                console.log("error")
            });
    }

    const filterResservation = (event) => {
        if (event.target.value === "confirmed") {
            const filteredReservation = originalReservations.filter(offer => offer.state.toUpperCase() === "CONFIRMED");
            setReservations(filteredReservation)
        }
        if (event.target.value === "pending") {

            const filteredReservation = originalReservations.filter(offer => offer.state.toUpperCase() === "PENDING");
            setReservations(filteredReservation)

        }
        if (event.target.value === "canceled") {

            const filteredReservation = originalReservations.filter(offer => offer.state.toUpperCase() === "CANCELED");
            setReservations(filteredReservation)
        }
        if (event.target.value === "all") {

            setReservations(originalReservations)
        }


    }
    return jwt === "" && user === null ? <Navigate to={"/"}></Navigate> : (
        <React.Fragment>
            <Nav/>
            <div className="container-fluid py-4" style={{width: "1000px"}}>
                <div className="row">

                    <div className="col mt-4">
                        <div className="card">
                            <div className="card-header pb-0 px-3">
                                <h6 className="mb-0">Reservations Information &nbsp; &nbsp;
                                    <span
                                        className={`badge bg-warning`}>{originalReservations != null ? countPendingReservations(originalReservations) : 0}</span> &nbsp;Pending&nbsp;
                                    <span
                                        className={`badge bg-success`}>{originalReservations != null ? countConfirmedReservations(originalReservations) : 0}</span>&nbsp; Confirmed &nbsp;
                                    <span
                                        className={`badge bg-danger`}>{originalReservations != null ? countCanceleddReservations(originalReservations) : 0}</span>&nbsp; Canceled &nbsp;
                                    <span style={{paddingLeft: "100px"}}>
                                    <select id="sort_by" name="sort_by" onChange={(event) => filterResservation(event)}>
                                        <option value="all"> All reservations </option>
                                        <option value="confirmed"> Confirmed </option>
                                        <option value="pending"> Pending
                                        </option>
                                        <option value="canceled"> Canceled
                                        </option>
                                    </select></span>
                                    &nbsp;
                                    <span className="ti-exchange-vertical"></span>
                                </h6>

                            </div>
                            <div className="card-body pt-4 p-3">
                                <div hidden={loading} style={{width: '50px', margin: 'auto', display: 'block'}}>
                                    <ClipLoader color="#bb3a41" size={100}/>
                                </div>
                                <ul className="list-group">
                                    {reservations != null ? reservations.map((item, index) => (
                                        <li className="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">

                                            <div className="d-flex flex-column">
                                                <h6 className="mb-3 ">{item.offer.name} &nbsp; &nbsp;
                                                    <span
                                                        className={`badge bg-${item.state === "Pending" ? "warning" : item.state === "Confirmed" ? "success" : "danger"}`}>{item.state}</span>
                                                </h6>
                                                <h6 className="mb-3 text-sm">Total Price:&nbsp; {item.price} &nbsp; DT
                                                </h6>
                                                {item.offer.generic_Type !== "accomodation" && item.count_people !== null ? (
                                                    <h6 className="mb-2 text-xs">Number of Persons: <span
                                                        className="text-dark font-weight-bold ms-sm-2">{item.count_people} </span>
                                                    </h6>) : null}

                                                <h6 className="mb-2 text-xs">Date: <span
                                                    className="text-dark font-weight-bold ms-sm-2">{item.date} </span>
                                                </h6>
                                                {item.offer.generic_Type === "accomodation" ? (
                                                    <h6 className="mb-2 text-xs">Check Out Date: <span
                                                        className="text-dark font-weight-bold ms-sm-2"> {item.checkout} </span>
                                                    </h6>) : null}
                                                {item.state == "Confirmed" ?

                                                    <div className="App">
                                                        {item.payed == 0 ?
                                                            < Stripe
                                                                stripeKey="pk_test_51N44NmGazYrIprITtnTMjPY6OBzJorEUmjj0ULZNqWpLcolM98zYMWMRsZETEC0LnCgJMaLcjy9ny3LBuAb6nnCk00srw2JeR7"
                                                                token={(token) => handleToken(token, item.id, item.price)}/> :
                                                            <h5 style={{
                                                                width: "100px",
                                                                border: "1px solid black",
                                                                borderRadius: "5px",
                                                                textAlign: "center"
                                                            }}>Payed <i className="bi bi-check-lg"></i></h5>
                                                        }
                                                    </div> : null}
                                            </div>
                                            <div className="ms-auto text-end">
                                                <button className="btn btn-link text-danger text-gradient px-3 mb-0"
                                                        onClick={() => handleDelete(item.id)}
                                                >
                                                    <i className="bi bi-trash3"></i>Delete
                                                </button>
                                            </div>
                                        </li>
                                    )) : null}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
let DefaultIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
    iconSize: [35, 50],
})
L.Marker.prototype.options.icon = DefaultIcon;
export default MyReservation;
