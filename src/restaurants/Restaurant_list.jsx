import React from 'react';
import image from "../offer.png"
import {Link} from "react-router-dom";

const Restaurant_list = (props) => {
    const n = props.reviews;
    const elements = Array.from({length: n}, (_, i) => i + 1);
    if (props.reviews === NaN) {
        alert("nan")
    }
    const n1 = 5 - props.reviews;
    const restelemnts = Array.from({length: n1}, (_, i) => i + 1);
    return (
        <React.Fragment>
            <div className="tour_list_wrapper floatleft">
                <div className="one_third">
                    <a className="tour_image" href="#">
                        <img src={props.photos.length === 0 ? image : props.photos[0]} alt="French Autumn"/>

                        {/*<div className="tour_price ">*/}
                        {/*    Promo*/}
                        {/*</div>*/}

                    </a>
                </div>

                <div className="two_third last">
                    <a className="tour_link" href="#"><h3><Link to={`/restoration/${props.id}`}>{props.name}</Link></h3>
                    </a>
                    <div className="tour_list_excerpt">
                        {props.description}
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
                                {props.countreview}&nbsp; reviews
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Restaurant_list;
