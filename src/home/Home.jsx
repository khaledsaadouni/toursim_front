import React, { useState, useEffect } from 'react';
import "./Home.css"
import image7 from "./image7.jpg"
import NavBar from "../navBar/NavBar";
import image1 from "./Map-Marker-300x300.png"
import image2 from "./Worldwide-Location-300x300.png"
import image3 from "./Hot-Air-Balloon-300x300.png"
import { Link } from "react-router-dom";
import { useLocalState } from "../utils/UseLocalStorage";

const MyComponent = () => {
    const [jwt, setJwt] = useLocalState("", "jwt");
    const [user, setUser] = useLocalState(null, "user");
    useEffect(() => {

        const queryParams = new URLSearchParams(window.location.search);
        const token = queryParams.get('token');
        const newuser = queryParams.get('user');
        if (!jwt && !user && token && newuser) {
            const userObj = {};
            userObj.id = parseInt(newuser.substring(newuser.indexOf('id=') + 3, newuser.indexOf(',')), 10);
            userObj.lastname = newuser.substring(newuser.indexOf('lastname=') + 9, newuser.indexOf(',', newuser.indexOf('lastname=')));
            userObj.firstname = newuser.substring(newuser.indexOf('firstname=') + 10, newuser.indexOf(',', newuser.indexOf('firstname=')));
            userObj.phone = parseInt(newuser.substring(newuser.indexOf('phone=') + 6, newuser.indexOf(',', newuser.indexOf('phone='))), 10);
            userObj.photo = newuser.substring(newuser.indexOf('photo=') + 6, newuser.indexOf(',', newuser.indexOf('photo=')));
            userObj.email = newuser.substring(newuser.indexOf('email=') + 6, newuser.indexOf(',', newuser.indexOf('email=')));
            userObj.birthday = newuser.substring(newuser.indexOf('birthday=') + 9, newuser.indexOf(',', newuser.indexOf('birthday=')));
            userObj.role = newuser.substring(newuser.indexOf('role=') + 5, newuser.indexOf(')', newuser.indexOf('role=')));
            console.log("obj", userObj);
            setJwt(token);
            setUser(userObj);
        }
    }, []);

    return (
        <React.Fragment>
            <div id="wrapper" className="hasbg transparent">
                <NavBar />
                <div className="ppb_wrapper  ">
                    <div className="one withsmallpadding ppb_tour_search_youtube parallax withbg " style={{
                        textAlign: "center",
                        height: "800px",
                        color: "#ffffff",
                        backgroundImage: `url(${image7})`
                    }}>

                        <div className="overlay_background"
                            style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}></div>
                        <div className="center_wrapper">
                            <div className="inner_content">
                                <div className="standard_wrapper">
                                    <h2 className="ppb_title" style={{ color: "#ffffff" }}>What do you want to do?</h2>
                                    <div className="page_tagline" style={{ color: "#ffffff" }}>Trips, experiences, and
                                        places.
                                        All in
                                        one service.
                                    </div>


                                    <div className="row gy-4 mt-5 justify-content-center" data-aos="zoom-in"
                                        data-aos-delay="250">
                                        <div className="col-xl-2 col-md-4"
                                            style={{ border: "2px solid", borderColor: "white", marginRight: "10px" }}>
                                            <Link to={"/accomodations"}>
                                                <div className="icon-box" style={{ fontSize: "70px", color: "white" }}>
                                                    <i className="ri-home-4-line"></i>
                                                    <h5 style={{ color: "white" }}>Accommodations</h5>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-xl-2 col-md-4"
                                            style={{ border: "2px solid", borderColor: "white", marginRight: "10px" }}>
                                            <Link to={"/restaurants"}>
                                                <div className="icon-box" style={{ fontSize: "70px", color: "white" }}>
                                                    <i className="ri-restaurant-2-line"></i>
                                                    <h4 style={{ color: "white" }}>Restaurants</h4>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-xl-2 col-md-4"
                                            style={{ border: "2px solid", borderColor: "white", marginRight: "10px" }}>
                                            <Link to={"/events_activities"}>
                                                <div className="icon-box" style={{ fontSize: "70px", color: "white" }}>
                                                    <i className="ri-calendar-event-line"></i>
                                                    <h5 style={{ color: "white" }}>Events & Activities</h5>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-xl-2 col-md-4"
                                            style={{ border: "2px solid", borderColor: "white" }}>
                                            <Link to={"/shops"}>
                                                <div className="icon-box" style={{ fontSize: "70px", color: "white" }}>
                                                    <i className="ri-store-2-line"></i>
                                                    <h4 style={{ color: "white" }}>Shops</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="banner--fadeBottom"></div>
                    </div>

                </div>

                {/*{ mostlikedoffers!==null? (*/}
                {/*<div className="one withsmallpadding ppb_header "*/}
                {/*     style={{textAlign: "center", padding: "0px 0 0px 0", marginTop: "10px", marginBottom: "50px"}}>*/}

                {/*    <div className="standard_wrapper">*/}
                {/*        <div className="page_content_wrapper">*/}
                {/*            <div className="inner">*/}
                {/*                <div style={{margin: "auto", width: "100%"}}>*/}
                {/*                    <h2 className="ppb_title">Most Liked Offers</h2>*/}
                {/*                    <div className="page_tagline">Best offers from us</div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div> ):null} { mostlikedoffers!==null? (*/}
                {/*<div className="ppb_tour_classic one nopadding " style={{marginBottom: "50px"}}>*/}
                {/*    <div className="page_content_wrapper page_main_content sidebar_content full_width fixed_column">*/}
                {/*        <div className="standard_wrapper">*/}
                {/*            <div id="1567589134228149190"*/}
                {/*                 className="portfolio_filter_wrapper gallery classic three_cols"*/}
                {/*                 data-columns="3">*/}

                {/*                {mostlikedoffers !== null ? offers.map((item, index) => (*/}
                {/*                    <div className="element grid classic3_cols animated1">*/}
                {/*                        <Trip_Card  capacity={item.capacity} name={item.name} price={item.price} destination={item.destination} emplacement={item.emplacement}/>*/}
                {/*                    </div>)) : null}*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div> ):null}*/}

                {/*{ offers!==null? (*/}
                {/*<div className="one withsmallpadding ppb_header "*/}
                {/*     style={{textAlign: "center", padding: "0px 0 0px 0", marginTop: "10px", marginBottom: "50px"}}>*/}

                {/*    <div className="standard_wrapper">*/}
                {/*        <div className="page_content_wrapper">*/}
                {/*            <div className="inner">*/}
                {/*                <div style={{margin: "auto", width: "100%"}}>*/}
                {/*                    <h2 className="ppb_title">Most Recent Offers</h2>*/}
                {/*                    <div className="page_tagline">Latest fresh offers</div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>):null}*/}
                {/*{ offers!==null? (*/}
                {/*<div className="ppb_tour_classic one nopadding " style={{marginBottom: "50px"}}>*/}
                {/*    <div className="page_content_wrapper page_main_content sidebar_content full_width fixed_column">*/}
                {/*        <div className="standard_wrapper">*/}
                {/*            <div id="1567589134228149190"*/}
                {/*                 className="portfolio_filter_wrapper gallery classic three_cols"*/}
                {/*                 data-columns="3">*/}

                {/*                {offers !== null ? offers.map((item, index) => (*/}
                {/*                    <div className="element grid classic3_cols animated1">*/}
                {/*                        <Trip_Card capacity={item.capacity} name={item.name} price={item.price} destination={item.destination} emplacement={item.emplacement}   />*/}
                {/*                    </div>)) : null}*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>):null}*/}
                <div className="one withsmallpadding ppb_header "
                    style={{ textAlign: "center", padding: "0px 0 0px 0", marginBottom: "40px" }}>
                    <div className="standard_wrapper">
                        <div className="page_content_wrapper">
                            <div className="inner">
                                <div style={{ margin: "auto", width: "100%" }}>
                                    <h2 className="ppb_title">Why Choose Us</h2>
                                    <div className="page_tagline">Here are reasons you should plan trip with us
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="standard_wrapper">
                    <div className="one_third withsmallpadding ppb_text"
                        style={{ textAlign: "center", padding: "0px 0 0px 0", marginBottom: "70px" }}>
                        <div className="standard_wrapper">
                            <div className="page_content_wrapper">
                                <div className="inner">
                                    <div style={{ margin: "auto", width: "100%" }}>
                                        <p><img className="alignnone wp-image-3106 size-medium"
                                            src={image1} width="150" height="150"
                                            alt="" />
                                        </p>
                                        <h4 className="p1"><span className="s1"><b>Handpicked Accommodations</b></span>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="standard_wrapper">
                    <div className="one_third withsmallpadding ppb_text"
                        style={{ textAlign: "center", padding: "0px 0 0px 0", marginBottom: "70px" }}>
                        <div className="standard_wrapper">
                            <div className="page_content_wrapper">
                                <div className="inner">
                                    <div style={{ margin: "auto", width: "100%" }}>
                                        <p><img className="alignnone wp-image-3107 size-medium"
                                            src={image2} width="150"
                                            height="150"
                                            alt="" /></p>
                                        <h4 className="p1"><span className="s1"><b>World Class Service</b></span></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="standard_wrapper">
                    <div className="one_third last withsmallpadding ppb_text"
                        style={{ textAlign: "center", padding: "0px 0 0px 0", marginBottom: "70px" }}>
                        <div className="standard_wrapper">
                            <div className="page_content_wrapper">
                                <div className="inner">
                                    <div style={{ margin: "auto", width: "100%" }}>
                                        <p><img className="alignnone wp-image-3108 size-medium"
                                            src={image3} width="140" height="140"
                                            alt="" />
                                        </p>
                                        <h4 className="p1"><span className="s1"><b>Best Price Guarantee</b></span></h4>
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

export default MyComponent;
