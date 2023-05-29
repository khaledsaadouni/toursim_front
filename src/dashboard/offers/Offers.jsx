import React, {useEffect, useState} from 'react';
import {useLocalState} from "../../utils/UseLocalStorage";
import formatDate from "../../utils/DateFormat";
import {Link, Navigate} from "react-router-dom";


const Offers = () => {

    const [jwt, setJwt] = useLocalState("", "jwt");
    const [user, setUser] = useLocalState(null, "user");
    const [offers, setOffers] = useState(null)
    const [shops, setShops] = useState(null)
    useEffect(() => {
        const asyncFn = async () => {
            try {
                await fetch(`/api/v1/offer/partner/${user.id}`, {
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
                        setOffers(data)
                    }).catch((message) => {
                    });
            } catch (error) {
            }
        };
        const asyncFn2 = async () => {
            try {
                await fetch(`/api/v1/artisan/all/${user.id}`, {
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
                        setShops(data)
                    }).catch((message) => {
                    });
            } catch (error) {
            }
        };

        asyncFn();
        asyncFn2();
    }, []);

    const handleDelteOffer = async (id, type) => {
        await fetch(`/api/v1/${type}/delete/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt}`
            },
            method: "DELETE",
        }).then((response) => {
            if (response.status === 200) {
                return Promise.all([response.json(), response.headers])
            } else {
                return Promise.reject("")
            }
        })
            .then(([data, header]) => {
                window.location.reload()
            }).catch((message) => {
            });
    }
    const handleDelteShop = async (id) => {
        await fetch(`/api/v1/artisan/delete/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt}`
            },
            method: "DELETE",
        }).then((response) => {
            if (response.status === 200) {
                return Promise.all([response.json(), response.headers])
            } else {
                return Promise.reject("")
            }
        })
            .then(([data, header]) => {
                window.location.reload()
            }).catch((message) => {
            });
    }
    const [redirect, setRedirect] = useState({'bool': false, 'id': -1, 'route': "editAccom"});


    const handleEdit = (id, type) => {
        if (type === "accomodation") {
            setRedirect({'bool': true, 'id': id, 'route': "editAccom"})
        } else if (type === "restoration") {
            setRedirect({'bool': true, 'id': id, 'route': "editResto"})
        } else if (type === "event") {
            setRedirect({'bool': true, 'id': id, 'route': "editEvent"})
        } else if (type === "shop") {
            setRedirect({'bool': true, 'id': id, 'route': "editShop"})
        }
    }


    return redirect.bool ? <Navigate to={`/dashboard/${redirect.route}/${redirect.id}`}/> : (
        <React.Fragment>
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                <div className="container-fluid py-4">
                    <div className="row">
                        <div className="col-12">
                            <div className="card my-4">
                                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                    <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                                        <div className="row">
                                            <div className="col">

                                                <h6 className="text-white text-capitalize ps-3">offers</h6>
                                            </div>
                                            <div className="col" style={{marginLeft: "1100px"}}>
                                                <Link to={"/dashboard/addOffer"}>
                                                    <button style={{
                                                        backgroundColor: "white",
                                                        borderRadius: "5rem",
                                                        color: "#bb3a41",
                                                        border: "0px solid",
                                                        boxShadow: "0px 3px 7px 3px rgba(0, 0, 0, 0.3)"
                                                    }}>

                                                        Add Offer

                                                    </button>
                                                </Link>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className="card-body px-0 pb-2">
                                    <div className="table-responsive p-0">
                                        <table className="table align-items-center mb-0">
                                            <thead>
                                            <tr>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Name</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Creation
                                                    Date
                                                </th>
                                                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Type</th>
                                                <th className="text-secondary opacity-7"></th>
                                                <th className="text-secondary opacity-7"></th>
                                            </tr>
                                            </thead>
                                            <tbody>

                                            {offers !== null ? offers.map((item, index) => (
                                                <tr>
                                                    <td>
                                                        <div className="d-flex px-2 py-1">
                                                            <div className="d-flex flex-column justify-content-center">
                                                                <h6 className="mb-0 text-sm"><Link
                                                                    to={`/${item.generic_Type}/${item.id}`}>{item.name} </Link>
                                                                </h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className="text-xs font-weight-bold mb-0">{formatDate(item.creationDate)}</p>
                                                    </td>
                                                    <td className="align-middle text-center text-sm">

                                                        <p className="text-xs font-weight-bold mb-0">{item.type}</p>
                                                    </td>
                                                    <td className="align-middle">
                                                        <a href=""
                                                           onClick={() => handleEdit(item.id, item.generic_Type)}
                                                           className="text-secondary font-weight-bold text-xs"
                                                           data-toggle="tooltip" data-original-title="Edit user">
                                                            <i className="bi bi-pen-fill"></i>
                                                        </a>
                                                    </td>
                                                    <td className="align-middle">
                                                        <a href=""
                                                           onClick={() => handleDelteOffer(item.id, item.generic_Type)}
                                                           className="text-secondary font-weight-bold text-xs"
                                                           data-toggle="tooltip" data-original-title="Edit user">
                                                            <i className="bi bi-trash3-fill" style={{color: "red"}}></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                            )) : null}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card my-4">
                                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                    <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                                        <div className="row">
                                            <div className="col">

                                                <h6 className="text-white text-capitalize ps-3">Shops</h6>
                                            </div>
                                            <div className="col" style={{marginLeft: "1100px"}}>
                                                <Link to={"/dashboard/addShop"}>
                                                    <button style={{
                                                        backgroundColor: "white",
                                                        borderRadius: "5rem",
                                                        color: "#bb3a41",
                                                        border: "0px solid",
                                                        boxShadow: "0px 3px 7px 3px rgba(0, 0, 0, 0.3)"
                                                    }}> Add Shop
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body px-0 pb-2">
                                    <div className="table-responsive p-0">
                                        <table className="table align-items-center justify-content-center mb-0">
                                            <thead>
                                            <tr>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Name</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Type</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Location</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Creation
                                                    Date
                                                </th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"></th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"></th>
                                                <th></th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {shops !== null ? shops.map((item, index) => (
                                                <tr>
                                                    <td>
                                                        <div className="d-flex px-2">
                                                            <div className="my-auto">
                                                                <Link to={`/shop/${item.id}`}><h6
                                                                    className="mb-0 text-sm">{item.commercial_name}</h6>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span className="text-xs font-weight-bold">{item.type}</span>
                                                    </td>
                                                    <td>
                                                        <span
                                                            className="text-xs font-weight-bold">{item.emplacement},{item.destination}</span>
                                                    </td>
                                                    <td>
                                                        <span
                                                            className="text-xs font-weight-bold"> {item.creationDate}</span>
                                                    </td>
                                                    <td className="align-middle">
                                                        <a href=""
                                                           onClick={() => handleEdit(item.id, "shop")}
                                                           className="text-secondary font-weight-bold text-xs"
                                                           data-toggle="tooltip" data-original-title="Edit user">
                                                            <i className="bi bi-pen-fill"></i>
                                                        </a>
                                                    </td>
                                                    <td className="align-middle">
                                                        <a href=""
                                                           onClick={() => handleDelteShop(item.id)}
                                                           className="text-secondary font-weight-bold text-xs"
                                                           data-toggle="tooltip" data-original-title="Edit user">
                                                            <i className="bi bi-trash3-fill" style={{color: "red"}}></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                            )) : null}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    );
};

export default Offers;
