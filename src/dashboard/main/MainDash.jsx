import React, {useEffect, useState} from "react";
import {useLocalState} from "../../utils/UseLocalStorage";
import {
    get6latest,
    getAccomDates,
    getClient,
    getCount,
    getEventDates,
    getIncome,
    getNumber,
    getReserNumver,
    getRestaDates
} from "./functions";
import {
    ArcElement,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip
} from 'chart.js';
import {Bar, Line, Pie} from 'react-chartjs-2';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import './Calendar.css'

const MainDash = (props) => {
    const [loading, setLoading] = useState(true);
    const [reservations, setReservations] = useState(null);
    const [income, setIncome] = useState(null);
    const [clients, setClients] = useState(null);
    const [totalReservations, setTotalReservations] = useState(null);
    const [totalOffers, setTotalOffers] = useState(null);
    const [jwt, setJwt] = useLocalState("", "jwt");
    const [user, setUser] = useLocalState(null, "user");
    const [accom, setAccom] = useState(0);
    const [event, setEvent] = useState(0);
    const [restau, setRestau] = useState(0);
    const [dataSet, setDataSet] = useState([]);
    const [dataSet2, setDataSet2] = useState([]);
    const [acommDate, setAcommDate] = useState([]);
    const [restauDate, setRestauDate] = useState([]);
    const [eventDate, setEventDate] = useState([]);

    useEffect(() => {
        setLoading(false)
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
                        setLoading(true)
                        setIncome(getIncome(data))
                        setClients(getClient(data))
                        setTotalReservations(data.length)
                        setDataSet(getNumber(data))
                        setDataSet2(getReserNumver(data))
                        setReservations(get6latest(data))
                    }).catch((message) => {
                    });
            } catch (error) {
            }
        };
        const asyncFn3 = async () => {
            try {
                await fetch(`/api/v1/accomodation/partner/${user.id}`, {
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
                        setAcommDate(getAccomDates(data))
                    }).catch((message) => {
                    });
            } catch (error) {
            }
        };
        const asyncFn4 = async () => {
            try {
                await fetch(`/api/v1/restoration/partner/${user.id}`, {
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
                        setRestauDate(getRestaDates(data))
                    }).catch((message) => {
                    });
            } catch (error) {
            }
        };
        const asyncFn5 = async () => {
            try {
                await fetch(`/api/v1/event/partner/${user.id}`, {
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

                        console.log(data)
                        setEventDate(getEventDates(data))
                    }).catch((message) => {
                    });
            } catch (error) {
            }
        };
        const asyncFn2 = async () => {
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
                        setLoading(true)

                        console.log(data)
                        setTotalOffers(data.length)
                        setAccom(getCount(data, "accomodation"))
                        setRestau(getCount(data, "restoration"))
                        setEvent(getCount(data, "event"))

                    }).catch((message) => {
                    });
            } catch (error) {
            }
        };
        asyncFn();
        asyncFn2();
        asyncFn3();
        asyncFn4();
        asyncFn5();
    }, []);

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        ArcElement,
        Legend,
        PointElement,
        LineElement
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false,
                text: 'Chart.js Bar Chart',
            }
        },
    };

    const labels = ['Accommodations', 'Restaurants', 'Events'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Total number',
                data: [accom, restau, event],
                backgroundColor: 'rgba(239,204,203,0.96)',
            }
        ],
    };
    const options2 = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false,
                text: 'Chart.js Line Chart',
            },
        },
    };

    const data2 = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Total number',
                data: dataSet,
                backgroundColor: 'rgba(211,64,87,0.93)',
            }
        ],
    };
    const options3 = {
        plugins: {
            legend: {
                position: 'bottom', // Position legend on the right side
            }
        },
        // Other chart options...
    };
    const data3 = {
        labels: ['Accommodation', 'Restaurant', 'Event'],
        datasets: [
            {
                label: '# of Votes',
                data: dataSet2,
                backgroundColor: [
                    'rgba(211,64,87,0.93)',
                    'rgba(239,204,203,0.96)',
                    'rgba(163,129,130,0.93)'
                ],
                borderColor: [
                    'rgba(211,64,87,0.93)',
                    'rgba(239,204,203,0.96)',
                    'rgba(163,129,130,0.93)'
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <React.Fragment>


            <div
                className="container-fluid py-4">
                <div className="row" style={{marginTop: "25px"}}>
                    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                        <div className="card">
                            <div className="card-header p-3 pt-2">
                                <div
                                    style={{backgroundColor: "#a38182"}}
                                    className="icon icon-lg icon-shape shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                                    <i className="material-icons opacity-10">paid</i>
                                </div>
                                <div className="text-end pt-1">
                                    <p className="text-sm mb-0 text-capitalize">Total income</p>
                                    <h4 className="mb-0">{income} DT</h4>
                                </div>
                            </div>
                            {/*<div className="dark horizontal my-0">*/}
                            {/*    <div className="card-footer p-3">*/}
                            {/*        <p className="mb-0"><span*/}
                            {/*            className="text-success text-sm font-weight-bolder">+55% </span>than last*/}
                            {/*            week</p>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                        <div className="card">
                            <div className="card-header p-3 pt-2">
                                <div
                                    style={{backgroundColor: "#cecbda"}}
                                    className="icon icon-lg icon-shape shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                                    <i className="material-icons opacity-10">person</i>
                                </div>
                                <div className="text-end pt-1">
                                    <p className="text-sm mb-0 text-capitalize">Clients</p>
                                    <h4 className="mb-0"> {clients}</h4>
                                </div>
                            </div>
                            {/*<div className="dark horizontal my-0">*/}
                            {/*    <div className="card-footer p-3">*/}
                            {/*        <p className="mb-0"><span*/}
                            {/*            className="text-success text-sm font-weight-bolder">+3% </span>than last*/}
                            {/*            month</p>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                        <div className="card">
                            <div className="card-header p-3 pt-2">
                                <div
                                    style={{backgroundColor: "#F4e2e1"}}
                                    className="icon icon-lg icon-shape  shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                                    <i className="material-icons opacity-10">receipt</i>
                                </div>
                                <div className="text-end pt-1">
                                    <p className="text-sm mb-0 text-capitalize">Reservations</p>
                                    <h4 className="mb-0">{totalReservations}</h4>
                                </div>
                            </div>
                            {/*<div className="dark horizontal my-0">*/}
                            {/*    <div className="card-footer p-3">*/}
                            {/*        <p className="mb-0"><span*/}
                            {/*            className="text-danger text-sm font-weight-bolder">-2%</span> than yesterday*/}
                            {/*        </p>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6">
                        <div className="card">
                            <div className="card-header p-3 pt-2">
                                <div
                                    style={{backgroundColor: "#d34057"}}
                                    className="icon icon-lg icon-shape   shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                                    <i className="material-icons opacity-10">cases</i>
                                </div>
                                <div className="text-end pt-1">
                                    <p className="text-sm mb-0 text-capitalize">Offers</p>
                                    <h4 className="mb-0">{totalOffers}</h4>
                                </div>
                            </div>
                            {/*<div className="dark horizontal my-0">*/}
                            {/*    <div className="card-footer p-3">*/}
                            {/*        <p className="mb-0"><span*/}
                            {/*            className="text-success text-sm font-weight-bolder">+5% </span>than*/}
                            {/*            yesterday</p>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-4 col-md-6 mt-4 mb-4">
                        <div className="card z-index-2 ">
                            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                                <div style={{backgroundColor: "rgba(206,203,218,0.27)"}}
                                     className=" shadow-dark border-radius-lg py-3 pe-1">
                                    <div className="chart" style={{height: "210px"}}>
                                        <Bar options={options} data={data}/>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <h6 className="mb-0 ">Number of offers per type</h6>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-4 mb-3">
                        <div className="card z-index-2 ">
                            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                                <div style={{backgroundColor: "rgba(206,203,218,0.27)"}}
                                     className=" shadow-dark border-radius-lg py-3 pe-1">
                                    <div className="chart" style={{height: "210px"}}>
                                        <Line options={options2} data={data2}/>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <h6 className="mb-0 ">Reservations per month</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-4 mb-3">
                        <div className="card z-index-2 ">
                            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                                <div style={{backgroundColor: "rgba(206,203,218,0.27)"}}
                                     className=" shadow-dark border-radius-lg py-3 pe-1">
                                    <div className="chart" style={{height: "210px", paddingLeft: '100px'}}>
                                        <Pie options={options3} data={data3}/>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <h6 className="mb-0 ">Reservations per offer type</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                        <div className="card">
                            <div className="card-header pb-0">
                                <div className="row">
                                    <div className="col-lg-6 col-7">
                                        <h6>Calendar</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body px-0 pb-2">
                                <FullCalendar
                                    height="550px"

                                    plugins={[dayGridPlugin]}
                                    initialView="dayGridMonth"
                                    events={
                                        [...acommDate, ...restauDate, ...eventDate]
                                    }
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    );
};

export default MainDash;
