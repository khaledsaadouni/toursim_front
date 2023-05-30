import React from 'react';
import image from "../offer.png"
import {Link} from "react-router-dom";

const MyComponent = (props) => {
    const n = props.reviews;
    const elements = Array.from({ length: n }, (_, i) => i + 1);
    if (props.reviews === NaN) {
        alert("nan")
    }
    const n1 = 5 - props.reviews;
    const restelemnts = Array.from({ length: n1 }, (_, i) => i + 1);
    return (
        <React.Fragment>
            <div className="element grid classic4_cols animated4">

                <div
                    className="one_half gallery2 grid static filterable portfolio_type themeborder"
                    data-id="post-4"
                    style={{ backgroundImage: props.photos.length === 0 ? `url(${image})` : `url(${props.photos[0]})` }}
                >


                  {new Date() - new Date(props.date) > 0 ? (<div className="tour_label">Expired </div>) : null}

                    <div className="portfolio_info_wrapper">
                        <div className="tour_price has_discount">
                            {/*                    <span className="normal_price">*/}
                            {/*$3,000                      </span> */}
                            {props.price} Dt
                        </div>
                        <Link to={`/event/${props.id}`}><h4>{props.name}</h4></Link>
                        <h6 style={{color: "white"}}><i className="bi bi-calendar-date"></i> &nbsp; {props.date}</h6>

                        <h6 style={{color: "white"}}><i
                            className="bi bi-geo-alt-fill"></i> &nbsp; {props.emplacement !== "" ? (
                            <span>{props.emplacement}, </span>) : null} {props.destination}</h6>
                        <div className="tour_attribute_wrapper">
                            <div className="tour_attribute_rating">
                                <div className="br-theme-fontawesome-stars-o">
                                    <div className="br-widget">
                                        {elements.map(() => <a href="javascript:;" className="br-selected"></a>)}
                                        {restelemnts.map(() => <a href="javascript:;"></a>)}
                                    </div>
                                </div>
                                <div className="tour_attribute_rating_count">
                                    {props.countreview}&nbsp; reviews
                                </div>
                            </div>

                            <div className="tour_attribute_days">
                                <span className="ti-time"></span> {props.duration} Hr
                            </div>
                        </div>
                        <br className="clear" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default MyComponent;
