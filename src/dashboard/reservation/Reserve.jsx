import React, {useEffect, useState} from 'react';
import {countCanceleddReservations, countConfirmedReservations, countPendingReservations} from "../../utils/Count";
import {useLocalState} from "../../utils/UseLocalStorage";
import {Link, Navigate} from "react-router-dom";

const Reserve = () => {
    const [reservations, setReservations] = useState(null);
    const [jwt, setJwt] = useLocalState("", "jwt");
    const [user, setUser] = useLocalState(null, "user");
    useEffect(() => {
        const asyncFn = async () => {
            try {
                await fetch(`/api/v1/reservation/all/partner/${user.id}`, {
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
    return jwt === "" && user === null ? <Navigate to={"/"}/> : (

        <React.Fragment>

            <div className="container-fluid py-4">
                <div className="row">
                    <div className="col mt-4">
                        <div className="card">
                            <div className="card-header pb-0 px-3">
                                <h6 className="mb-0">My Reservations  &nbsp; &nbsp;
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
                                                <h6 className="mb-3 text-sm">
                                                    <Link to={`/${item.offer.generic_Type}/${item.offer.id}`}>
                                                        <span>{item.offer.name}</span> </Link>  &nbsp; &nbsp;
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
                                                <span className="mb-2 text-xs">Client Fullname: <span
                                                    className="text-dark font-weight-bold ms-sm-2">{item.user.firstname} &nbsp;{item.user.lastname} </span></span>
                                                <span className="mb-2 text-xs">Client Email: <span
                                                    className="text-dark font-weight-bold ms-sm-2">{item.user.email} </span></span>
                                                <span className="mb-2 text-xs">Client Phone: <span
                                                    className="text-dark font-weight-bold ms-sm-2">{item.user.phone} </span></span>
                                            </div>
                                            {item.state === "Canceled" ? null : (
                                                <div className="ms-auto text-end">
                                                    {item.state === "Pending" ? (
                                                        <button
                                                            className="btn btn-link text-dark text-gradient px-3 mb-0"
                                                            onClick={() => handleConfirm(item.id)}
                                                        >
                                                            <i className="bi bi-check-lg"></i> Confirm</button>) : null}
                                                    <button className="btn btn-link text-danger text-gradient px-3 mb-0"
                                                            onClick={() => handleCancel(item.id)}
                                                    >
                                                        <i className="bi bi-x"></i>Cancel
                                                    </button>

                                                    <button className="btn btn-link text-danger text-gradient px-3 mb-0"
                                                            onClick={() => handleDelete(item.id)}
                                                    >
                                                        <i className="bi bi-trash3"></i>Delete
                                                    </button>

                                                </div>
                                            )}
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

export default Reserve;
