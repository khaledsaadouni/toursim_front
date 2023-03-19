import React from 'react';

const Restaurant_list = () => {
    return (
        <React.Fragment>
            <div className="tour_list_wrapper floatleft">
                <div className="one_third">
                    <a className="tour_image" href="#">
                        <img src="assets/upload/pexels-photo-211051-500x500.jpeg" alt="French Autumn"/>

                        <div className="tour_price ">
                            Promo
                        </div>

                    </a>
                </div>

                <div className="two_third last">
                    <a className="tour_link" href="#"><h3>French Autumn</h3></a>
                    <div className="tour_list_excerpt">
                        Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic
                        fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3
                        wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth
                        art party deep v chillwave.
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
                </div>
            </div>
        </React.Fragment>
    );
};

export default Restaurant_list;
