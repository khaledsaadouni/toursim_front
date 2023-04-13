import React from 'react';
import image from "../offer.png"
import { Link } from "react-router-dom";

const Accomadation_Card = (props) => {
    const n = props.reviews;
    const elements = Array.from({ length: n }, (_, i) => i + 1);
    const n1 = 5 - props.reviews;
    const restelemnts = Array.from({ length: n1 }, (_, i) => i + 1);
    return (
        <React.Fragment>
            <div className="element grid classic4_cols animated2">

                <div
                    className="one_half gallery2 classic static filterable portfolio_type themeborder"
                    data-id="post-2">

                    <a className="tour_image">
                        <img src={props.photos.length === 0 ? image : props.photos[0]} alt="French Autumn" />

                        <div className="tour_price ">
                            {props.price} Dt
                        </div>
                    </a>

                    <div className="portfolio_info_wrapper">
                        <Link to={`/accomodation/${props.id}`} className="tour_link"><h4>{props.name}</h4></Link>
                        <div className="tour_excerpt">
                            <p>{props.emplacement !== "" ? (
                                <span>{props.emplacement}, </span>) : null} {props.destination}</p>
                        </div>
                        <div className="tour_attribute_wrapper">
                            <div className="tour_attribute_rating">
                                <div className="br-theme-fontawesome-stars-o">
                                    <div className="br-widget">
                                        {elements.map(() => <a href="javascript:;" className="br-selected"></a>)}
                                        {restelemnts.map(() => <a href="javascript:;"></a>)}
                                    </div>
                                </div>
                                <div className="tour_attribute_rating_count">
                                    {props.countreview} &nbsp; reviews
                                </div>
                            </div>

                            <div className="tour_attribute_days">
                                <i className="bi bi-person-fill"></i> {props.capacity}
                            </div>
                        </div>
                        <br className="clear" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Accomadation_Card;
