import React from 'react';

const MyComponent = () => {
    return (
        <React.Fragment>
            <div className="element grid classic4_cols animated4">

                <div
                    className="one_half gallery2 grid static filterable portfolio_type themeborder"
                    data-id="post-4"
                >
                    <a className="tour_image" href="#"></a>

                    <div className="tour_label">Sale</div>

                    <div className="portfolio_info_wrapper">
                        <div className="tour_price has_discount">
                                                <span className="normal_price">
                            $3,000                      </span> $2,500
                        </div>
                        <h4>Discover Japan</h4>
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

export default MyComponent;
