import React from 'react';

import image7 from "./image7.jpg";

const MyComponent = () => {
    return (
        <div>
            <div
                className="one_third gallery3 classic static filterable portfolio_type themeborder"
                style={{boxShadow: '0px 5px 15px 3px rgba(0, 0, 0, 0.3)', borderRadius: "5px"}}
            >
                <a className="tour_image" href="#">
                    <img src={image7} alt=""/>
                    <div className="tour_price ">$5,000</div>
                </a>
                <div className="portfolio_info_wrapper">
                    <a className="tour_link" href="#"><h4>French Autumn</h4></a>
                    <div className="tour_excerpt">
                        <p>City Tours, Urban</p>
                    </div>
                    <div className="tour_attribute_wrapper">
                        <div className="tour_attribute_rating">
                            <div className="br-theme-fontawesome-stars-o">
                                <div className="br-widget">
                                    <a href="javascript:;" className="br-selected"></a>
                                    <a href="javascript:;" className="br-selected"></a>
                                    <a href="javascript:;" className="br-selected"></a>
                                    <a href="javascript:;" className="br-selected"></a>
                                    <a href="javascript:;"></a>
                                </div>
                            </div>
                            <div className="tour_attribute_rating_count">4&nbsp;reviews</div>
                        </div>
                        <div className="tour_attribute_days">
                            <span className="ti-time"></span>5&nbsp;days
                        </div>
                    </div>
                    <br className="clear"/>
                </div>
            </div>
        </div>
    );
};

export default MyComponent;
