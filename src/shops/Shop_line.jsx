import React from 'react';
import image from "../offer.png";
import {Link} from "react-router-dom";

const Shope_Line = (props) => {
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
                    </a>
                </div>

                <div className="two_third last">
                    <a className="tour_link" href="#"><h3><Link to={`/shop/${props.id}`}>{props.name}</Link></h3></a>
                    <h5>{props.emplacemnt !== null ? (
                        <span>{props.emplacemnt},</span>) : null} {props.destination} </h5>
                    <div className="tour_list_excerpt">
                        {props.description}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Shope_Line;
