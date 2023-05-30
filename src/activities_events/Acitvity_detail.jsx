import React, {useEffect, useState} from 'react';
import image from "../avatar.jpg";
import Slider from "react-slick";
import calculateAverageRate from "../utils/ReviewStarsCounter";
import formatDate from "../utils/DateFormat";
import {Link, Navigate, useParams} from "react-router-dom";
import {useLocalState} from "../utils/UseLocalStorage";
import Nav from "../navBar/Nav";
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import "../index.css"

const EventDetail = () => {
    const {id} = useParams();
    const [offer, setOffer] = useState(null);
    const [n, setN] = useState(-1);
    const [elements, setElements] = useState([]);
    const [n1, setN1] = useState(-1);
    const [rate, setRate] = useState(-1);
    const [comment, setComment] = useState("");
    const [position, setPosition] = useState(null);
    const [jwt, setJwt] = useLocalState("", "jwt");
    const [errorMessage, setErrorMessage] = useState("");
    const [user, setUser] = useLocalState(null, "user");
    const renderDivs = (a) => {
        const divs = [];

        for (let i = 0; i < a; i++) {
            divs.push(<a href="javascript:;" className="br-selected"></a>);
        }

        return divs;
    };
    const renderDivs2 = (a) => {
        const divs = [];

        for (let i = 0; i < a; i++) {
            divs.push(<a href="javascript:;"></a>);
        }

        return divs;
    };
    useEffect(() => {
        const asyncFn = async () => {
            await fetch(`/api/v1/event/${id}`, {
                headers: {
                    "Content-Type": "application/json"
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
                    setOffer(data);
                    // extarction of the postion 
                    if (data != null && data.google_map != null) {
                        console.log("here")
                        const link = data.google_map;
                        const url = new URL(link);
                        const regex = /@(-?\d+\.\d+),(-?\d+\.\d+)/;
                        const match = url.href.match(regex);
                        if (match) {
                            const latitude = parseFloat(match[1]);
                            const longitude = parseFloat(match[2]);
                            setPosition([latitude, longitude]);
                            console.log("hoo", latitude, longitude);
                        } else {
                            console.log("Unable to extract latitude and longitude from link.");
                        }
                    }
                }).catch(() => {
                });
        };
        asyncFn();
    }, []);

    const handlePostReview = async () => {
        const reqBody = {
            'rate': rate,
            'comment': comment
        };
        await fetch(`/api/v1/review/add/${user !== null ? user.id : -1}/${offer !== null ? offer.id : -1}`, {
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
            .then(([data]) => {
                window.location.reload()
            }).catch(() => {
            });
    }
    const handleDeleteReview = async (id) => {
        const reqBody = {
            'rate': rate,
            'comment': comment
        };
        await fetch(`/api/v1/review/delete/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt}`
            },
            method: "DELETE",
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
            .then(([data]) => {
                window.location.reload()
            }).catch(() => {
            });
    }
    const [date, setDate] = useState();
    const [count_pep, setCount_pep] = useState();
    const [count_d, setCount_d] = useState();
    const [redirect, setRedirect] = useState(false);
    const handleReserve = async () => {

        const reqBody = {
            "date": offer.eventDate,
            "count_people": count_pep,
            'price': count_pep * offer.price
        };
        await fetch(`/api/v1/reservation/add/${user.id}/${offer !== null ? offer.id : -1}`, {
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

                return response.text().then(errorMessage => {
                    setErrorMessage(errorMessage)
                });
            }
        })
            .then(([data]) => {
                setRedirect(true)
            }).catch(() => {
            });
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const positionn = [51.505, -0.09]

    return redirect === true ? <Navigate to={"/reservations"}/> : (
        <React.Fragment>
            <Nav/>
            <div id="page_content_wrapper" className="hasbg " style={{paddingTop: "100px"}}>
                <div className="inner">
                    <div className="inner_wrapper">
                        <div className="sidebar_wrapper">

                            <div className="sidebar_top"></div>

                            <div className="sidebar">

                                <div className="content"
                                     style={{boxShadow: '0px 0px 10px 5px rgba(0, 0, 0, 0.3)', borderRadius: "5px"}}>

                                    <div style={{
                                        minHeight: "50px",
                                        background: "black",
                                        color: "white",
                                        lineHeight: "50px",
                                        padding: " 0 15px 0 15px",
                                        boxSizing: " border-box",
                                        borderTopLeftRadius: " 5px",
                                        borderTopRightRadius: " 5px"
                                    }}>
                                        <div className="single_tour_price">
                                            {/*<span className="normal_price">*/}
                                            {/*  $6,700*/}
                                            {/* </span>*/}
                                            {offer != null ? offer.price : null} DT
                                        </div>
                                        <div className="single_tour_per_person">
                                            Per Person
                                        </div>
                                    </div>

                                    <div className="single_tour_booking_wrapper themeborder contact_form7">

                                        <div role="form" className="wpcf7" id="wpcf7-f142-o1" lang="en-US" dir="ltr">


                                            <div className="screen-reader-response">

                                            </div>

                                            <div action="#" method="post" className="wpcf7-form"
                                                 noValidate="novalidate">
                                                <div hidden={jwt === "" && user === null}>
                                                    <p>
                                                        <p>
                                                            <label> Number of Persons </label>
                                                            <br/>
                                                            <span className="wpcf7-form-control-wrap text-237">
                                                            <input type="number"
                                                                   value={count_pep}
                                                                   onChange={(event) => setCount_pep(event.target.value)}
                                                                   className="form-control "
                                                                   placeholder="Persons"/>
                                                        </span>
                                                        </p>
                                                    </p>
                                                    <p>
                                                        <input type="submit" value="Book" onClick={handleReserve}
                                                               className="wpcf7-form-control wpcf7-submit"/>
                                                    </p>
                                                    <p style={{color: "#d34057"}}>
                                                        {errorMessage}
                                                    </p>
                                                </div>
                                                <div hidden={jwt !== "" && user !== null}>
                                                    <p>
                                                        <label> Register or sign in to make a reservation </label>
                                                        <br/>

                                                        <span className="wpcf7-form-control-wrap text-237"><div
                                                            className="text-center">
                                                              <Link
                                                                  to={"/sign/in"}> <button
                                                                  className="btn bg-gradient-primary w-100 my-4 mb-2">Sign in
                                                               </button>     </Link>
                                                           </div>
                                                  <p className="mt-4 text-sm text-center">
                                                      Don't have an account? &nbsp;
                                                      <Link to="/sign/up"
                                                            className="text-primary text-gradient font-weight-bold"
                                                      >Sign up</Link>
                                                     </p>
                                                    </span>
                                                    </p>
                                                </div>
                                                <div className="wpcf7-response-output wpcf7-display-none">
                                                    <div className="row">
                                                        <div className="col-3">
                                                            <img
                                                                src={offer !== null && offer.partner.photo != null ? offer.partner.photo : image}
                                                                style={{borderRadius: "10%"}}/>
                                                        </div>
                                                        <div className="col">
                                                            <div className="row">
                                                             <span>
                                                                 <i
                                                                     className="bi bi-person"></i>
                                                                 {offer !== null ? offer.partner.firstname : null} &nbsp; {offer !== null ? offer.partner.lastname : null}
                                                            </span>
                                                            </div>
                                                            <div className="row">
                                                               <span>
                                                                   <i
                                                                       className="bi bi-envelope"></i> {offer !== null ? offer.partner.email : null}
                                                               </span>
                                                            </div>
                                                            {offer !== null && offer.partner.phone != 0 ? (
                                                                <div className="row">
                                                              <span>
                                                                  <i
                                                                      className="bi bi-telephone"></i> {offer.partner.phone}
                                                            </span>
                                                                </div>) : null}
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <br className="clear"/>

                            <div className="sidebar_bottom"></div>
                        </div>

                        <div className="sidebar_content ">

                            <h1>{offer != null ? offer.name : null}</h1>
                            <h5><i
                                className="bi bi-geo-alt-fill"></i> &nbsp; {offer != null && offer.emplacement !== null ?
                                <span>{offer.emplacement},</span> : null} {offer != null ? offer.destination : null}
                            </h5>
                            <h6>
                                <i className="bi bi-calendar-date"></i> &nbsp;
                                {offer != null ? offer.eventDate : null}</h6>
                            <div className="single_tour_attribute_wrapper themeborder ">
                                <div className="one_fourth" style={{fontSize: "30px"}}>
                                    <i className="bi bi-lightning-charge"></i>
                                    <div className="tour_attribute_content">
                                        {offer != null ? offer.type : null}
                                    </div>
                                </div>

                                <div className="one_fourth" style={{fontSize: "30px"}}>
                                    <i className="bi bi-people-fill"></i>
                                    <div className="tour_attribute_content">
                                        &nbsp; {offer != null ? offer.capacity : null}
                                    </div>
                                </div>
                                <div className="one_fourth" style={{fontSize: "30px"}}>
                                    <i className="bi bi-hourglass-split"></i>
                                    <div className="tour_attribute_content">
                                        {offer != null ? offer.duration : null} &nbsp; Hours
                                    </div>
                                </div>

                            </div>

                            <br className="clear"/>
                            {offer !== null ? (
                                <Slider {...settings}
                                        style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    {offer.photo != null ? offer.photo.map((item, index) => (
                                        <div>
                                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                                <img style={{position: "relative"}} src={item} alt="image1"/>
                                            </div>
                                        </div>
                                    )) : null}


                                </Slider>
                            ) : null}

                            <div className="single_tour_content">
                                <h4 className="p1">Description</h4>
                                <p className="p1">{offer != null ? offer.description : null}</p>


                            </div>
                            <div className="single_tour_content">
                                <h4 className="p1">Regulations</h4>
                                {offer !== null ? (
                                    <ul>
                                        {offer.regulations != null ? offer.regulations.map((item, index) => (
                                            <li>
                                                <div className="single_tour_departure_title">{item}</div>
                                            </li>
                                        )) : null}

                                    </ul>
                                ) : null}
                            </div>

                            <h5>

                    <span>
                        <span>Location</span>
                        {offer != null && offer.google_map != null ?
                            <div>
                                <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <Marker position={position}>
                                        <Popup>
                                            A pretty CSS3 popup. <br/> Easily customizable.
                                        </Popup>
                                    </Marker>
                                </MapContainer>
                            </div> : null}
                    </span>
                            </h5>
                            <div className="fullwidth_comment_wrapper sidebar">

                                <h3 className="comment_title">Reviews</h3>
                                <div className="avg_comment_rating_wrapper themeborder">
                                    <div className="comment_rating_wrapper">
                                        <div
                                            className="comment_rating_label"> {offer !== null ? offer.reviews.length : null} Reviews
                                        </div>
                                        <div className="br-theme-fontawesome-stars-o">
                                            <div className="br-widget">

                                                {offer != null && offer.reviews != null ? (<div>
                                                    {renderDivs(calculateAverageRate(offer.reviews))} {renderDivs2(5 - calculateAverageRate(offer.reviews))}
                                                </div>) : null}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {offer !== null ? (
                                <div>
                                    {offer.reviews != null ? offer.reviews.map((item, index) => (
                                        <div>
                                            <div className="comment" id="comment-20">
                                                <div className="gravatar">
                                                    <img src={item.user.photo != null ? item.user.photo : image}
                                                         width="150" height="150"
                                                         alt="Marie Argeris"
                                                         className="avatar avatar-60 wp-user-avatar wp-user-avatar-60 alignnone photo"/>
                                                </div>
                                                <div className="right ">
                                                    <h7>{item.user.firstname} {item.user.lastname}</h7>
                                                    {item.rate !== -1 ? (<span>{item.rate}/10</span>) : null}
                                                    {user !== null && item.user.id === user.id ? (
                                                        <a rel='nofollow' className='comment-reply-link btn-danger'
                                                           href=""
                                                           onClick={() => handleDeleteReview(item.id)}> Delete </a>) : null}
                                                    <div className="comment_date">{formatDate(item.creationDate)}</div>
                                                    <div className="comment_text"/>
                                                    <p>
                                                        {item.comment}
                                                    </p>

                                                </div>
                                            </div>
                                            <br className="clear"/>
                                        </div>
                                    )) : null}
                                </div>) : null}
                        </div>
                        <br className="clear"/>
                    </div>
                    <br className="clear"/>
                </div>

                <div style={{height: "10px"}}></div>
                {jwt !== "" && user !== null ? (
                    <div id="respond" className="comment-respond">
                        <h3 id="reply-title" className="comment-reply-title">Write A Review </h3>
                        <div id="commentform" className="comment-form">

                            <p className="comment-form-rating">
                                <label htmlFor="accommodation_rating">Rate</label>
                                <span className="commentratingbox">
                                    <select id="accomodation_rating" name="accomodation_rating"
                                            onChange={(event) => setRate(event.target.value)}>
                                        <option value="-1"></option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                    &nbsp; /10 </span>
                            </p>


                            <p className="comment-form-comment">
                                <label>Comment</label>
                                <textarea id="comment" name="comment" cols="45" rows="8"
                                          onChange={(event) => setComment(event.target.value)}
                                          required="required"></textarea>
                            </p>
                            <p className="form-submit">
                                <input name="submit" type="submit" id="submit" className="submit" value="Post Comment"
                                       onClick={handlePostReview}/>
                            </p>
                        </div>
                    </div>

                ) : null}
            </div>

        </React.Fragment>
    );
};

export default EventDetail;
