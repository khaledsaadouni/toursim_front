import React, {useEffect, useState} from 'react';
import {useLocalState} from "../../utils/UseLocalStorage";


const Offers = () => {

    const [jwt, setJwt] = useLocalState("", "jwt");
    const [user, setUser] = useLocalState(null, "user");
    const [offers, setOffers] = useState(null)
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

        asyncFn();
    }, []);
    return (
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
                                                <button style={{
                                                    backgroundColor: "white",
                                                    borderRadius: "5rem",
                                                    color: "#bb3a41",
                                                    border: "0px solid",
                                                    boxShadow: "0px 3px 7px 3px rgba(0, 0, 0, 0.3)"
                                                }}> Add Offer
                                                </button>
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
                                                                <h6 className="mb-0 text-sm">{item.name}</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className="text-xs font-weight-bold mb-0">{item.creationDate}</p>
                                                    </td>
                                                    <td className="align-middle text-center text-sm">

                                                        <p className="text-xs font-weight-bold mb-0">{item.type}</p>
                                                    </td>
                                                    <td className="align-middle">
                                                        <a href="javascript:;"
                                                           className="text-secondary font-weight-bold text-xs"
                                                           data-toggle="tooltip" data-original-title="Edit user">
                                                            <i className="bi bi-pen-fill"></i>
                                                        </a>
                                                    </td>
                                                    <td className="align-middle">
                                                        <a href="javascript:;"
                                                           className="text-secondary font-weight-bold text-xs"
                                                           data-toggle="tooltip" data-original-title="Edit user">
                                                            <i className="bi bi-trash3-fill"></i>
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
                                                <button style={{
                                                    backgroundColor: "white",
                                                    borderRadius: "5rem",
                                                    color: "#bb3a41",
                                                    border: "0px solid",
                                                    boxShadow: "0px 3px 7px 3px rgba(0, 0, 0, 0.3)"
                                                }}> Add Shop
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body px-0 pb-2">
                                    <div className="table-responsive p-0">
                                        <table className="table align-items-center justify-content-center mb-0">
                                            <thead>
                                            <tr>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Project</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Budget</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Status</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">Completion</th>
                                                <th></th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-flex px-2">
                                                        <div>
                                                            <img src="assets/img/small-logos/logo-asana.svg"
                                                                 className="avatar avatar-sm rounded-circle me-2"
                                                                 alt="spotify"/>
                                                        </div>
                                                        <div className="my-auto">
                                                            <h6 className="mb-0 text-sm">Asana</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="text-sm font-weight-bold mb-0">$2,500</p>
                                                </td>
                                                <td>
                                                    <span className="text-xs font-weight-bold">working</span>
                                                </td>
                                                <td className="align-middle text-center">
                                                    <div className="d-flex align-items-center justify-content-center">
                                                        <span className="me-2 text-xs font-weight-bold">60%</span>
                                                        <div>
                                                            <div className="progress">
                                                                <div className="progress-bar bg-gradient-info"
                                                                     role="progressbar" aria-valuenow="60"
                                                                     aria-valuemin="0" aria-valuemax="100"
                                                                     style={{width: "60% "}}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="align-middle">
                                                    <button className="btn btn-link text-secondary mb-0">
                                                        <i className="fa fa-ellipsis-v text-xs"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex px-2">
                                                        <div>
                                                            <img src="assets/img/small-logos/github.svg"
                                                                 className="avatar avatar-sm rounded-circle me-2"
                                                                 alt="invision"/>
                                                        </div>
                                                        <div className="my-auto">
                                                            <h6 className="mb-0 text-sm">Github</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="text-sm font-weight-bold mb-0">$5,000</p>
                                                </td>
                                                <td>
                                                    <span className="text-xs font-weight-bold">done</span>
                                                </td>
                                                <td className="align-middle text-center">
                                                    <div className="d-flex align-items-center justify-content-center">
                                                        <span className="me-2 text-xs font-weight-bold">100%</span>
                                                        <div>
                                                            <div className="progress">
                                                                <div className="progress-bar bg-gradient-success"
                                                                     role="progressbar" aria-valuenow="100"
                                                                     aria-valuemin="0" aria-valuemax="100"
                                                                     style={{width: "100% "}}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="align-middle">
                                                    <button className="btn btn-link text-secondary mb-0"
                                                            aria-haspopup="true" aria-expanded="false">
                                                        <i className="fa fa-ellipsis-v text-xs"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex px-2">
                                                        <div>
                                                            <img src="assets/img/small-logos/logo-atlassian.svg"
                                                                 className="avatar avatar-sm rounded-circle me-2"
                                                                 alt="jira"/>
                                                        </div>
                                                        <div className="my-auto">
                                                            <h6 className="mb-0 text-sm">Atlassian</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="text-sm font-weight-bold mb-0">$3,400</p>
                                                </td>
                                                <td>
                                                    <span className="text-xs font-weight-bold">canceled</span>
                                                </td>
                                                <td className="align-middle text-center">
                                                    <div className="d-flex align-items-center justify-content-center">
                                                        <span className="me-2 text-xs font-weight-bold">30%</span>
                                                        <div>
                                                            <div className="progress">
                                                                <div className="progress-bar bg-gradient-danger"
                                                                     role="progressbar" aria-valuenow="30"
                                                                     aria-valuemin="0" aria-valuemax="30"
                                                                     style={{width: "30%"}}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="align-middle">
                                                    <button className="btn btn-link text-secondary mb-0"
                                                            aria-haspopup="true" aria-expanded="false">
                                                        <i className="fa fa-ellipsis-v text-xs"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex px-2">
                                                        <div>
                                                            <img src="assets/img/small-logos/bootstrap.svg"
                                                                 className="avatar avatar-sm rounded-circle me-2"
                                                                 alt="webdev"/>
                                                        </div>
                                                        <div className="my-auto">
                                                            <h6 className="mb-0 text-sm">Bootstrap</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="text-sm font-weight-bold mb-0">$14,000</p>
                                                </td>
                                                <td>
                                                    <span className="text-xs font-weight-bold">working</span>
                                                </td>
                                                <td className="align-middle text-center">
                                                    <div className="d-flex align-items-center justify-content-center">
                                                        <span className="me-2 text-xs font-weight-bold">80%</span>
                                                        <div>
                                                            <div className="progress">
                                                                <div className="progress-bar bg-gradient-info"
                                                                     role="progressbar" aria-valuenow="80"
                                                                     aria-valuemin="0" aria-valuemax="80"
                                                                     style={{width: " 80%"}}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="align-middle">
                                                    <button className="btn btn-link text-secondary mb-0"
                                                            aria-haspopup="true" aria-expanded="false">
                                                        <i className="fa fa-ellipsis-v text-xs"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex px-2">
                                                        <div>
                                                            <img src="assets/img/small-logos/logo-slack.svg"
                                                                 className="avatar avatar-sm rounded-circle me-2"
                                                                 alt="slack"/>
                                                        </div>
                                                        <div className="my-auto">
                                                            <h6 className="mb-0 text-sm">Slack</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="text-sm font-weight-bold mb-0">$1,000</p>
                                                </td>
                                                <td>
                                                    <span className="text-xs font-weight-bold">canceled</span>
                                                </td>
                                                <td className="align-middle text-center">
                                                    <div className="d-flex align-items-center justify-content-center">
                                                        <span className="me-2 text-xs font-weight-bold">0%</span>
                                                        <div>
                                                            <div className="progress">
                                                                <div className="progress-bar bg-gradient-success"
                                                                     role="progressbar" aria-valuenow="0"
                                                                     aria-valuemin="0" aria-valuemax="0"
                                                                     style={{width: "0%"}}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="align-middle">
                                                    <button className="btn btn-link text-secondary mb-0"
                                                            aria-haspopup="true" aria-expanded="false">
                                                        <i className="fa fa-ellipsis-v text-xs"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex px-2">
                                                        <div>
                                                            <img src="assets/img/small-logos/devto.svg"
                                                                 className="avatar avatar-sm rounded-circle me-2"
                                                                 alt="xd"/>
                                                        </div>
                                                        <div className="my-auto">
                                                            <h6 className="mb-0 text-sm">Devto</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="text-sm font-weight-bold mb-0">$2,300</p>
                                                </td>
                                                <td>
                                                    <span className="text-xs font-weight-bold">done</span>
                                                </td>
                                                <td className="align-middle text-center">
                                                    <div className="d-flex align-items-center justify-content-center">
                                                        <span className="me-2 text-xs font-weight-bold">100%</span>
                                                        <div>
                                                            <div className="progress">
                                                                <div className="progress-bar bg-gradient-success"
                                                                     role="progressbar" aria-valuenow="100"
                                                                     aria-valuemin="0" aria-valuemax="100"
                                                                     style={{width: "100%"}}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="align-middle">
                                                    <button className="btn btn-link text-secondary mb-0"
                                                            aria-haspopup="true" aria-expanded="false">
                                                        <i className="fa fa-ellipsis-v text-xs"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="footer py-4  ">
                        <div className="container-fluid">
                            <div className="row align-items-center justify-content-lg-between">
                                <div className="col-lg-6 mb-lg-0 mb-4">
                                    <div className="copyright text-center text-sm text-muted text-lg-start">
                                        © <script>
                                        document.write(new Date().getFullYear())
                                    </script>,
                                        made with <i className="fa fa-heart"></i> by
                                        <a href="https://www.creative-tim.com" className="font-weight-bold"
                                           target="_blank">Creative Tim</a>
                                        for a better web.
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                                        <li className="nav-item">
                                            <a href="https://www.creative-tim.com" className="nav-link text-muted"
                                               target="_blank">Creative Tim</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="https://www.creative-tim.com/presentation"
                                               className="nav-link text-muted" target="_blank">About Us</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="https://www.creative-tim.com/blog" className="nav-link text-muted"
                                               target="_blank">Blog</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="https://www.creative-tim.com/license"
                                               className="nav-link pe-0 text-muted" target="_blank">License</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </main>
        </React.Fragment>
    );
};

export default Offers;
