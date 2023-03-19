import React from 'react';

const Accomadation_Card = () => {
    return (
        <React.Fragment>
            <div className="element grid classic4_cols animated2">

                <div
                    className="one_half gallery2 classic static filterable portfolio_type themeborder"
                    data-id="post-2">

                    <a className="tour_image" href="#">
                        <img src="assets/upload/pexels-photo-211051-700x466.jpeg" alt="French Autumn"/>

                        <div className="tour_price ">
                            $5,000
                        </div>
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
                                <div className="tour_attribute_rating_count">
                                    4&nbsp; reviews
                                </div>
                            </div>

                            <div className="tour_attribute_days">
                                <span className="ti-time"></span> 5&nbsp;days
                            </div>
                        </div>
                        <br className="clear"/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Accomadation_Card;
