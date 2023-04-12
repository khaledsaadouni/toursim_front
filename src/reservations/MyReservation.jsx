import React, {useEffect, useState} from 'react';
import {useLocalState} from "../utils/UseLocalStorage";
import {countCanceleddReservations, countConfirmedReservations, countPendingReservations} from "../utils/Count";
import Nav from "../navBar/Nav";
import {Navigate} from "react-router-dom";

const MyReservation = () => {
    const [reservations, setReservations] = useState(null);
    const [jwt, setJwt] = useLocalState("", "jwt");
    const [user, setUser] = useLocalState(null, "user");
    useEffect(() => {
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
                    } else {
                        return Promise.reject("")
                    }
                })
                    .then(([data, header]) => {
                        setReservations(data)
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
            } else {
                return Promise.reject("")
            }
        })
            .then(([data, header]) => {
                window.location.reload();
            }).catch((message) => {
            });
    }
    return jwt === "" && user === null ? <Navigate to={"/"}></Navigate> : (
        <React.Fragment>
            <Nav/>
            <div className="container-fluid py-4">
                <div className="row">
                    <div className="col mt-4">
                        <div className="card">
                            <div className="card-header pb-0 px-3">
                                <h6 className="mb-0">Reservations Information &nbsp; &nbsp;
                                    <span
                                        className={`badge bg-warning`}>{reservations != null ? countPendingReservations(reservations) : 0}</span> &nbsp;Pending&nbsp;
                                    <span
                                        className={`badge bg-success`}>{reservations != null ? countConfirmedReservations(reservations) : 0}</span>&nbsp; Confirmed &nbsp;
                                    <span
                                        className={`badge bg-danger`}>{reservations != null ? countCanceleddReservations(reservations) : 0}</span>&nbsp; Canceled &nbsp;
                                </h6>
                            </div>
                            <div className="card-body pt-4 p-3">
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
                                                    <span className="mb-2 text-xs">Number of Persons: <span
                                                        className="text-dark font-weight-bold ms-sm-2">{item.count_people} </span></span>) : null}
                                                {item.offer.generic_Type === "accomodation" ? (
                                                    <span className="mb-2 text-xs">Days Number: <span
                                                        className="text-dark font-weight-bold ms-sm-2"> {item.count_days} </span></span>) : null}
                                                <span className="mb-2 text-xs">Date: <span
                                                    className="text-dark font-weight-bold ms-sm-2">{item.date} </span></span>
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

export default MyReservation;
