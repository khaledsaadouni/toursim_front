import React from 'react';

import image7 from "../offer.png";

const MyComponent = (props) => {
    return (
        <div>
            <div
                className="one_third gallery3 classic static filterable portfolio_type themeborder"
                style={{boxShadow: '0px 5px 15px 3px rgba(0, 0, 0, 0.3)', borderRadius: "5px"}}
            >
                <a className="tour_image" href="#">
                    <img src={image7} height="50px" width="50px"/>
                    <div className="tour_price ">{props.price} Dt</div>
                </a>
                <div className="portfolio_info_wrapper">
                    <a className="tour_link" href="#"><h4>{props.name}</h4></a>
                    <div className="tour_excerpt">
                        <p>{props.emplacement}, {props.destination}</p>
                    </div>

                    <br className="clear"/>
                </div>
            </div>
        </div>
    );
};

export default MyComponent;
