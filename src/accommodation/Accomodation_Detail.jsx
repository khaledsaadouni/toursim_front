import React, {useEffect, useState} from 'react';
import Nav from "../navBar/Nav";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useParams} from "react-router-dom";
import image from "../avatar.jpg";
import formatDate from "../utils/DateFormat";
import {useLocalState} from "../utils/UseLocalStorage";
import calculateAverageRate from "../utils/ReviewStarsCounter";

const Acommodation_Detail = () => {
    const {id} = useParams();
    const [offer, setOffer] = useState(null);
    const [n, setN] = useState(-1);
    const [elements, setElements] = useState([]);
    const [n1, setN1] = useState(-1);
    const [rate, setRate] = useState(-1);
    const [comment, setComment] = useState("");

    const [jwt, setJwt] = useLocalState("", "jwt");

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
            await fetch(`/api/v1/accomodation/${id}`, {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "GET",
            }).then((response) => {
                if (response.status === 200) {
                    return Promise.all([response.json(), response.headers])
                } else {
                    return Promise.reject("")
                }
            })
                .then(([data]) => {
                    setOffer(data);
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
            } else {
                return Promise.reject("")
            }
        })
            .then(([data]) => {
                window.location.reload()
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
    return (
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
                                                <p>
                                                    <label> Reservation Date </label>
                                                    <br/>
                                                    <span className="wpcf7-form-control-wrap text-237">
                                                        <input type="date"
                                                               className="form-control "/>
                                                    </span>
                                                </p>
                                                <p>
                                                    <label> Number of Days </label>
                                                    <br/>
                                                    <span className="wpcf7-form-control-wrap text-237">
                                                        <input type="number"
                                                               className="form-control "
                                                               placeholder="Days"/>
                                                    </span>
                                                </p>
                                                <p>
                                                    <label> Number of Persons </label>
                                                    <br/>
                                                    <span className="wpcf7-form-control-wrap text-237">
                                                        <input type="number"
                                                               className="form-control "
                                                               placeholder="Persons"/>
                                                    </span>
                                                </p>
                                                <p>
                                                    <input type="submit" value="Book This Tour"
                                                           className="wpcf7-form-control wpcf7-submit"/>
                                                </p>
                                                <div className="wpcf7-response-output wpcf7-display-none">
                                                    <div className="row">
                                                        <div className="col-3"><img
                                                            src={offer !== null && offer.partner.photo != null ? offer.partner.photo : image}
                                                            style={{borderRadius: "100%"}}/></div>
                                                        <div className="col">
                                                            {offer !== null ? offer.partner.firstname : null} &nbsp; {offer !== null ? offer.partner.lastname : null}
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-3"></div>
                                                        <div className="col"><i
                                                            className="bi bi-envelope"></i> &nbsp;  {offer !== null ? offer.partner.email : null}
                                                        </div>
                                                    </div>
                                                    {offer !== null && offer.partner.phone != 0 ? (
                                                        <div className="row">
                                                            <div className="col-3"></div>
                                                            <div className="col"><i
                                                                className="bi bi-telephone"></i> &nbsp;  {offer.partner.phone}
                                                            </div>
                                                        </div>
                                                    ) : null}
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
                            <h5><i className="bi bi-geo-alt-fill"></i> {offer != null && offer.emplacement !== null ?
                                <span>{offer.emplacement},</span> : null} {offer != null ? offer.destination : null}
                            </h5>
                            <div className="single_tour_attribute_wrapper themeborder ">
                                <div className="one_fourth">
                                    <div className="tour_attribute_icon ti-home"></div>
                                    <div className="tour_attribute_content">
                                        {offer != null ? offer.type : null}
                                    </div>
                                </div>

                                <div className="one_fourth">
                                    <div className="tour_attribute_icon ti-user"></div>
                                    <div className="tour_attribute_content">
                                        {offer != null ? offer.capacity : null} &nbsp; Persons
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

                            <div class="single_tour_content">
                                <h4 class="p1">Description</h4>
                                <p class="p1">{offer != null ? offer.description : null}</p>


                            </div>
                            <div className="single_tour_content">
                                <h4 className="p1">Regulations</h4>
                                {offer !== null ? (
                                    <ul>
                                        {offer.regulations != null ? offer.regulations.map((item, index) => (
                                            <li>
                                                <div class="single_tour_departure_title">{item}</div>
                                            </li>
                                        )) : null}

                                    </ul>
                                ) : null}
                            </div>
                            <div className="single_tour_content">
                                <h4 className="p1">Commodity List</h4>
                                {offer !== null ? (
                                    <div>
                                        {offer.comodityList != null ? offer.comodityList.map((item, index) => (
                                            <div className="row">
                                                <div className="col-1" style={{fontSize: "35px"}}>
                                                    {item === "Pool" ? (<i className="fas fa-swimmer"></i>) : null}
                                                    {item === "AC" ? (<i className="fas fa-fan"></i>) : null}
                                                    {item === "Tv" ? (<i className="fas fa-tv"></i>) : null}
                                                    {item === "Parking" ? (<i className="fas fa-parking"></i>) : null}
                                                    {item === "Garden" ? (<i className="bi bi-flower3"></i>) : null}
                                                </div>
                                                <div className="col-2" style={{fontSize: "20px", marginTop: "10px"}}>
                                                    {item}</div>
                                            </div>
                                        )) : null}

                                    </div>
                                ) : null}
                            </div>
                            <div class="fullwidth_comment_wrapper sidebar">

                                <h3 class="comment_title">Reviews</h3>
                                <div class="avg_comment_rating_wrapper themeborder">
                                    <div class="comment_rating_wrapper">
                                        <div
                                            class="comment_rating_label"> {offer !== null ? offer.reviews.length : null} Reviews
                                        </div>
                                        <div class="br-theme-fontawesome-stars-o">
                                            <div class="br-widget">

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
    )
        ;
};

export default Acommodation_Detail;
