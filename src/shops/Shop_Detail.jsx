import React, {useEffect, useState} from 'react';
import Nav from "../navBar/Nav";
import image from "../avatar.jpg";
import Slider from "react-slick";
import {useParams} from "react-router-dom";
import {useLocalState} from "../utils/UseLocalStorage";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

const ShopDetail = () => {
    const {id} = useParams();
    const [offer, setOffer] = useState(null);
    const [rate, setRate] = useState(-1);
    const [comment, setComment] = useState("");

    const [jwt, setJwt] = useLocalState("", "jwt");
    const [position, setPosition] = useState(null);
    const [user, setUser] = useLocalState(null, "user");
    useEffect(() => {
        const asyncFn = async () => {
            await fetch(`/api/v1/artisan/${id}`, {
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
    const [date, setDate] = useState();
    const [count_pep, setCount_pep] = useState();
    const [count_d, setCount_d] = useState();
    const [redirect, setRedirect] = useState(false);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <React.Fragment>
            <Nav></Nav>
            <div id="page_content_wrapper" className="hasbg " style={{paddingTop: "100px"}}>
                <div className="inner">
                    <div className="inner_wrapper">
                        <div className="sidebar_wrapper">

                            <div className="sidebar_top"></div>
                            <div className="sidebar">

                                <div className="content"
                                     style={{
                                         boxShadow: '0px 0px 10px 5px rgba(0, 0, 0, 0.3)',
                                         borderRadius: "5px"
                                     }}>

                                    <div className="single_tour_booking_wrapper themeborder contact_form7">

                                        <div role="form" className="wpcf7" id="wpcf7-f142-o1" lang="en-US"
                                             dir="ltr">


                                            <div action="#" method="post" className="wpcf7-form"
                                                 noValidate="novalidate">
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

                            <h1>{offer != null ? offer.commercial_name : null}</h1>
                            <h5><i className="bi bi-geo-alt-fill"></i> {offer != null && offer.emplacement !== null ?
                                <span>{offer.emplacement !== "" ? (
                                    <span>{offer.emplacement}, </span>) : null}</span> : null} {offer != null ? offer.destination : null}
                            </h5>
                            <div className="single_tour_attribute_wrapper themeborder ">
                                <div className="one_fourth" style={{fontSize: "30px"}}>
                                    <i className="bi bi-shop"></i>
                                    <div className="tour_attribute_content">
                                        {offer != null ? offer.type : null}
                                    </div>
                                </div>

                                <div className="one_fourth" style={{fontSize: "30px"}}>
                                    <i className="bi bi-clock-fill"></i>
                                    <div className="tour_attribute_content">
                                        {offer != null ? offer.opening_hour : null}-{offer != null ? offer.closing_hour : null}
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
                            <h5>

                                <span>
                                    <span>Location</span>
                                    {offer != null && offer.google_map != null ? <div>
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
                            {/*<div className="single_tour_content">*/}
                            {/*    <h4 className="p1">Articals</h4>*/}

                            {/*</div>*/}
                        </div>


                        <br className="clear"/>


                    </div>
                    <br className="clear"/>
                </div>
            </div>


        </React.Fragment>
    );
};

export default ShopDetail;
