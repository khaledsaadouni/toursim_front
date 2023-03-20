import React from 'react';
import Nav from "../navBar/Nav";
import image from "../home/image7.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Acommodation_Detail = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <React.Fragment>
            <Nav/>


            <div id="page_content_wrapper" className="hasbg " style={{paddingTop: "100px"}}>
                <div className="inner">
                    <div className="inner_wrapper">
                        <div className="sidebar_wrapper">

                            <div className="sidebar_top"></div>

                            <div className="sidebar">

                                <div className="content"
                                     style={{boxShadow: '0px 0px 10px 5px rgba(0, 0, 0, 0.3)', borderRadius: "5px"}}>

                                    <div style={{
                                        minHeight: "50px",
                                        background: "black",
                                        color: "white",
                                        lineHeight: "50px",
                                        padding: " 0 15px 0 15px",
                                        boxSizing: " border-box",
                                        borderTopLeftRadius: " 5px",
                                        borderTopRightRadius: " 5px"
                                    }}>
                                        <div className="single_tour_price">
                                                     <span className="normal_price">
                                                       $6,700
                                                      </span>
                                            $6,200
                                        </div>
                                        <div className="single_tour_per_person">
                                            Per Person
                                        </div>
                                    </div>

                                    <div className="single_tour_booking_wrapper themeborder contact_form7">

                                        <div role="form" className="wpcf7" id="wpcf7-f142-o1" lang="en-US" dir="ltr">


                                            <div className="screen-reader-response">

                                            </div>

                                            <form action="#" method="post" className="wpcf7-form"
                                                  noValidate="novalidate">

                                                <p>
                                                    <label> Full Name
                                                        <br/>
                                                        <span className="wpcf7-form-control-wrap your-name"><input
                                                            type="text" name="your-name" value="" size="40"
                                                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                            aria-required="true" aria-invalid="false"
                                                            placeholder="John Doe"/></span> </label>
                                                </p>
                                                <p>
                                                    <label> Email Address
                                                        <br/>
                                                        <span className="wpcf7-form-control-wrap your-email"><input
                                                            type="email" name="your-email" value="" size="40"
                                                            className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                                            aria-required="true" aria-invalid="false"
                                                            placeholder="sample@yourcompany.com"/></span> </label>
                                                </p>
                                                <p>
                                                    <label> Phone Number
                                                        <br/>
                                                        <span className="wpcf7-form-control-wrap tel-729"><input
                                                            type="tel"
                                                            name="tel-729"
                                                            value=""
                                                            size="40"
                                                            className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel"
                                                            aria-required="true"
                                                            aria-invalid="false"/></span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label> Tour Date
                                                        <br/>
                                                        <span className="wpcf7-form-control-wrap menu-419">
                                                        <select name="menu-419"
                                                                className="wpcf7-form-control wpcf7-select wpcf7-validates-as-required"
                                                                aria-required="true" aria-invalid="false">
                                                            <option
                                                                value="10-18 January 2017">10-18 January 2017</option>
                                                            <option
                                                                value="23-31 January 2017">23-31 January 2017</option>
                                                            <option
                                                                value="7-15 February 2017">7-15 February 2017</option>
                                                            <option
                                                                value="18-26 February 2017">18-26 February 2017</option>
                                                        </select>
                                                    </span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label> Number of Person
                                                        <br/>
                                                        <span className="wpcf7-form-control-wrap text-237">
                                                        <input type="text" name="text-237" value="" size="40"
                                                               className="wpcf7-form-control wpcf7-text"
                                                               aria-invalid="false" placeholder="1 person"/>
                                                    </span>
                                                    </label>
                                                    <span className="wpcf7-form-control-wrap dynamictourtitle">
                                                    <input type="hidden" name="dynamictourtitle"
                                                           value="Grand Switzerland" size="40"
                                                           className="wpcf7-form-control wpcf7dtx-dynamictext wpcf7-dynamichidden"
                                                           aria-invalid="false"/>
                                                </span>
                                                    <span className="wpcf7-form-control-wrap dynamictoururl">
                                                    <input type="hidden" name="dynamictoururl" value="#" size="40"
                                                           className="wpcf7-form-control wpcf7dtx-dynamictext wpcf7-dynamichidden"
                                                           aria-invalid="false"/>
                                                </span>
                                                </p>
                                                <p>
                                                    <input type="submit" value="Book This Tour"
                                                           className="wpcf7-form-control wpcf7-submit"/>
                                                </p>
                                                <div className="wpcf7-response-output wpcf7-display-none"></div>
                                            </form>
                                        </div>
                                        <div className="single_tour_view_wrapper themeborder">
                                            <div className="single_tour_view_desc">
                                                This tour&#039;s been viewed&nbsp;544&nbsp;times in the past week
                                            </div>

                                            <div className="single_tour_view_icon ti-alarm-clock"></div>
                                        </div>
                                        <br className="clear"/>
                                        <a id="single_tour_share_button" href="javascript:;"
                                           className="button ghost themeborder" style={{marginBottom: "20px"}}><span
                                            className="ti-email"></span>Share
                                            this
                                            tour</a>
                                    </div>


                                    <ul className="sidebar_widget">
                                        <li id="text-3" className="  widget_text">

                                        </li>
                                        <li id="grandtour_tour_posts-11" className="widget Grandtour_Tour_Posts">
                                            <h2 className="widgettitle"></h2>
                                            <div
                                                className="one gallery1 grid static filterable portfolio_type themeborder"
                                                style={{backgroundColor: "black"}}>
                                                <a className="tour_image" href="#"></a>
                                                <div className="portfolio_info_wrapper">
                                                    <div className="tour_price ">
                                                        $6,000
                                                    </div>
                                                    <h5>Swiss Alps Trip</h5>
                                                    <div className="tour_attribute_wrapper">
                                                        <div className="tour_attribute_rating">
                                                            <div className="br-theme-fontawesome-stars-o">
                                                                <div className="br-widget">
                                                                    <a href="javascript:;"
                                                                       className="br-selected"></a>
                                                                    <a href="javascript:;"
                                                                       className="br-selected"></a>
                                                                    <a href="javascript:;"
                                                                       className="br-selected"></a>
                                                                    <a href="javascript:;"
                                                                       className="br-selected"></a>
                                                                    <a href="javascript:;"></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <br className="clear"/>
                                            <div
                                                className="one gallery1 grid static filterable portfolio_type themeborder"
                                                style={{backgroundColor: "black"}}>
                                                <a className="tour_image" href="#"></a>
                                                <div className="portfolio_info_wrapper">
                                                    <div className="tour_price ">
                                                        $5,900
                                                    </div>
                                                    <h5>Seoul Your Soul</h5>
                                                    <div className="tour_attribute_wrapper">
                                                        <div className="tour_attribute_rating">
                                                            <div className="br-theme-fontawesome-stars-o">
                                                                <div className="br-widget">
                                                                    <a href="javascript:;"
                                                                       className="br-selected"></a>
                                                                    <a href="javascript:;"
                                                                       className="br-selected"></a>
                                                                    <a href="javascript:;"
                                                                       className="br-selected"></a>
                                                                    <a href="javascript:;"
                                                                       className="br-selected"></a>
                                                                    <a href="javascript:;"></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <br className="clear"/>
                                        </li>
                                    </ul>

                                    <div className="single_tour_users_online_wrapper themeborder">
                                        <div className="single_tour_users_online_icon">
                                            <span className="ti-info-alt"></span>
                                        </div>
                                        <div className="single_tour_users_online_content">
                                            <strong>131</strong> traveler(s) are considering our tours right now!
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <br className="clear"/>

                            <div className="sidebar_bottom"></div>
                        </div>

                        <div className="sidebar_content ">

                            <h1>Swiss Alps Trip</h1>
                            <div className="single_tour_attribute_wrapper themeborder ">
                                <div className="one_fourth">
                                    <div className="tour_attribute_icon ti-time"></div>
                                    <div className="tour_attribute_content">
                                        3&nbsp;days
                                    </div>
                                </div>

                                <div className="one_fourth">
                                    <div className="tour_attribute_icon ti-id-badge"></div>
                                    <div className="tour_attribute_content">
                                        Age 12+
                                    </div>
                                </div>

                                <div className="one_fourth">
                                    <div className="tour_attribute_icon ti-calendar"></div>
                                    <div className="tour_attribute_content">
                                        Sep,&nbsp;Oct,&nbsp;Nov,&nbsp;Dec
                                    </div>
                                </div>

                                <div className="one_fourth last">
                                    <div className="tour_attribute_icon ti-user"></div>
                                    <div className="tour_attribute_content">
                                        Availability 50
                                    </div>
                                </div>

                            </div>

                            <br className="clear"/>
                            <Slider {...settings} style={{paddingTop: "30px"}}>
                                <div>
                                    <img src={image} alt="image1"/>
                                </div>
                                <div>
                                    <img src={image} alt="image1"/>
                                </div>
                                <div>
                                    <img src={image} alt="image1"/>
                                </div>
                            </Slider>


                            <div class="single_tour_content">
                                <h4 class="p1">Description</h4>
                                <p class="p1">Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic
                                    fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard
                                    Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave.
                                    Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack,
                                    elit bespoke vinyl art party Pitchfork selfies master cleanse.</p>


                            </div>

                            <ul class="single_tour_departure_wrapper themeborder">
                                <li>
                                    <div class="single_tour_departure_title">Departure</div>
                                    <div class="single_tour_departure_content">San Francisco International Airport</div>
                                </li>

                                <li>
                                    <div class="single_tour_departure_title">Departure Time</div>
                                    <div class="single_tour_departure_content">Please arrive by 10:20 AM for a prompt
                                        departure at 10:50 AM
                                    </div>
                                </li>

                                <li>
                                    <div class="single_tour_departure_title">Return Time</div>
                                    <div class="single_tour_departure_content">Approximately 8:30 PM</div>
                                </li>

                                <li>
                                    <div class="single_tour_departure_title">Included</div>
                                    <div class="single_tour_departure_content">
                                        <div class="one_half ">
                                            <span class="ti-check"></span>Airfare
                                        </div>
                                        <div class="one_half last">
                                            <span class="ti-check"></span>Local transportation
                                        </div>
                                        <div class="one_half ">
                                            <span class="ti-check"></span>5 Star Accomodation
                                        </div>
                                        <div class="one_half last">
                                            <span class="ti-check"></span>Professional Guide
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div class="single_tour_departure_title">Not Included</div>
                                    <div class="single_tour_departure_content">
                                        <div class="one_half ">
                                            <span class="ti-close"></span>Departure Taxes
                                        </div>
                                        <div class="one_half last">
                                            <span class="ti-close"></span>Entry Fees
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div class="single_tour_departure_title">Maps</div>
                                    <div class="single_tour_departure_content">
                                    </div>
                                </li>
                            </ul>

                            <div class="fullwidth_comment_wrapper sidebar">

                                <h3 class="comment_title">4 Reviews</h3>
                                <div class="avg_comment_rating_wrapper themeborder">
                                    <div class="comment_rating_wrapper">
                                        <div class="comment_rating_label">Accomodation</div>
                                        <div class="br-theme-fontawesome-stars-o">
                                            <div class="br-widget">
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;"></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="comment_rating_wrapper">
                                        <div class="comment_rating_label">Destination</div>
                                        <div class="br-theme-fontawesome-stars-o">
                                            <div class="br-widget">
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;"></a>
                                                <a href="javascript:;"></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="comment_rating_wrapper">
                                        <div class="comment_rating_label">Meals</div>
                                        <div class="br-theme-fontawesome-stars-o">
                                            <div class="br-widget">
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;"></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="comment_rating_wrapper">
                                        <div class="comment_rating_label">Transport</div>
                                        <div class="br-theme-fontawesome-stars-o">
                                            <div class="br-widget">
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;"></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="comment_rating_wrapper">
                                        <div class="comment_rating_label">Value For Money</div>
                                        <div class="br-theme-fontawesome-stars-o">
                                            <div class="br-widget">
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;"></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="comment_rating_wrapper">
                                        <div class="comment_rating_label">Overall</div>
                                        <div class="br-theme-fontawesome-stars-o">
                                            <div class="br-widget">
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <a name="comments"></a>

                                    <div class="comment" id="comment-20">
                                        <div class="gravatar">
                                            <img src="upload/author1-100x100.jpg" width="60" height="60"
                                                 alt="Jack Dawson"
                                                 class="avatar avatar-60 wp-user-avatar wp-user-avatar-60 alignnone photo"/>
                                        </div>

                                        <div class="right ">

                                            <h7>Jack Dawson</h7>

                                            <div class="comment_date">December 15, 2016 at 3:02 pm</div>
                                            <a rel='nofollow' class='comment-reply-link' href='#'
                                               aria-label='Reply to Jack Dawson'>Reply</a>
                                            <div class="comment_text"/>
                                            <p>Et leggings fanny pack, elit bespoke vinyl art party Pitchfork selfies
                                                master cleanse Kickstarter seitan retro. Drinking vinegar stumptown yr
                                                pop-up artisan sunt. Deep v cliche lomo biodiesel Neutra selfies. Shorts
                                                fixie consequat flexitarian four loko tempor duis single-origin coffee.
                                                Banksy, elit small batch freegan sed.</p>
                                            <div class="comment_rating_wrapper">
                                                <div class="comment_rating_label">Accomodation</div>
                                                <div class="br-theme-fontawesome-stars-o">
                                                    <div class="br-widget">
                                                        <a href="javascript:;" class="br-selected"></a>
                                                        <a href="javascript:;" class="br-selected"></a>
                                                        <a href="javascript:;" class="br-selected"></a>
                                                        <a href="javascript:;" class="br-selected"></a>
                                                        <a href="javascript:;"></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="comment_rating_wrapper">
                                                <div class="comment_rating_label">Destination</div>
                                                <div class="br-theme-fontawesome-stars-o">
                                                    <div class="br-widget">
                                                        <a href="javascript:;" class="br-selected"></a>
                                                        <a href="javascript:;" class="br-selected"></a>
                                                        <a href="javascript:;" class="br-selected"></a>
                                                        <a href="javascript:;"></a>
                                                        <a href="javascript:;"></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="comment_rating_wrapper">
                                                <div class="comment_rating_label">Meals</div>
                                                <div class="br-theme-fontawesome-stars-o">
                                                    <div class="br-widget">
                                                        <a href="javascript:;" class="br-selected"></a>
                                                        <a href="javascript:;" class="br-selected"></a>
                                                        <a href="javascript:;" class="br-selected"></a>
                                                        <a href="javascript:;" class="br-selected"></a>
                                                        <a href="javascript:;" class="br-selected"></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="comment_rating_wrapper">
                                                <div class="comment_rating_label">Transport</div>
                                                <div class="br-theme-fontawesome-stars-o">
                                                    <div class="br-widget">
                                                        <a href="javascript:;" class="br-selected"></a>
                                                        <a href="javascript:;" class="br-selected"></a>
                                                        <a href="javascript:;" class="br-selected"></a>
                                                        <a href="javascript:;" class="br-selected"></a>
                                                        <a href="javascript:;"></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="comment_rating_wrapper">
                                                <div class="comment_rating_label">Value For Money</div>
                                                <div class="br-theme-fontawesome-stars-o">
                                                    <div class="br-widget">
                                                        <a href="javascript:;" class="br-selected"></a>
                                                        <a href="javascript:;" class="br-selected"></a>
                                                        <a href="javascript:;" class="br-selected"></a>
                                                        <a href="javascript:;" class="br-selected"></a>
                                                        <a href="javascript:;"></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="comment_rating_wrapper">
                                                <div class="comment_rating_label">Overall</div>
                                                <div class="br-theme-fontawesome-stars-o">
                                                    <div class="br-widget">
                                                        <a href="javascript:;" class="br-selected"></a>
                                                        <a href="javascript:;" class="br-selected"></a>
                                                        <a href="javascript:;" class="br-selected"></a>
                                                        <a href="javascript:;" class="br-selected"></a>
                                                        <a href="javascript:;" class="br-selected"></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br class="clear"/>


                                <div class="comment" id="comment-21">
                                    <div class="gravatar">
                                        <img src="upload/me-100x100.jpg" width="60" height="60" alt="Anna Kornikova"
                                             class="avatar avatar-60 wp-user-avatar wp-user-avatar-60 alignnone photo"/>
                                    </div>

                                    <div class="right ">

                                        <h7>Anna Kornikova</h7>

                                        <div class="comment_date">December 15, 2016 at 3:02 pm</div>
                                        <a rel='nofollow' class='comment-reply-link' href='#'
                                           aria-label='Reply to Anna Kornikova'>Reply</a>
                                        <div class="comment_text"/>
                                        <p>Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan
                                            sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips
                                            proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod
                                            Pinterest in do umami readymade swag. Selfies iPhone Kickstarter, drinking
                                            vinegar jean vinegar stumptown yr pop-up artisan sunt. Craft beer elit
                                            seitan exercitation, photo booth,</p>
                                        <div class="comment_rating_wrapper">
                                            <div class="comment_rating_label">Accomodation</div>
                                            <div class="br-theme-fontawesome-stars-o">
                                                <div class="br-widget">
                                                    <a href="javascript:;" class="br-selected"></a>
                                                    <a href="javascript:;" class="br-selected"></a>
                                                    <a href="javascript:;" class="br-selected"></a>
                                                    <a href="javascript:;" class="br-selected"></a>
                                                    <a href="javascript:;" class="br-selected"></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="comment_rating_wrapper">
                                            <div class="comment_rating_label">Destination</div>
                                            <div class="br-theme-fontawesome-stars-o">
                                                <div class="br-widget">
                                                    <a href="javascript:;" class="br-selected"></a>
                                                    <a href="javascript:;" class="br-selected"></a>
                                                    <a href="javascript:;" class="br-selected"></a>
                                                    <a href="javascript:;"></a>
                                                    <a href="javascript:;"></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="comment_rating_wrapper">
                                            <div class="comment_rating_label">Meals</div>
                                            <div class="br-theme-fontawesome-stars-o">
                                                <div class="br-widget">
                                                    <a href="javascript:;" class="br-selected"></a>
                                                    <a href="javascript:;" class="br-selected"></a>
                                                    <a href="javascript:;" class="br-selected"></a>
                                                    <a href="javascript:;" class="br-selected"></a>
                                                    <a href="javascript:;"></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="comment_rating_wrapper">
                                            <div class="comment_rating_label">Transport</div>
                                            <div class="br-theme-fontawesome-stars-o">
                                                <div class="br-widget">
                                                    <a href="javascript:;" class="br-selected"></a>
                                                    <a href="javascript:;" class="br-selected"></a>
                                                    <a href="javascript:;" class="br-selected"></a>
                                                    <a href="javascript:;"></a>
                                                    <a href="javascript:;"></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="comment_rating_wrapper">
                                            <div class="comment_rating_label">Value For Money</div>
                                            <div class="br-theme-fontawesome-stars-o">
                                                <div class="br-widget">
                                                    <a href="javascript:;" class="br-selected"></a>
                                                    <a href="javascript:;" class="br-selected"></a>
                                                    <a href="javascript:;" class="br-selected"></a>
                                                    <a href="javascript:;" class="br-selected"></a>
                                                    <a href="javascript:;" class="br-selected"></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="comment_rating_wrapper">
                                            <div class="comment_rating_label">Overall</div>
                                            <div class="br-theme-fontawesome-stars-o">
                                                <div class="br-widget">
                                                    <a href="javascript:;" class="br-selected"></a>
                                                    <a href="javascript:;" class="br-selected"></a>
                                                    <a href="javascript:;" class="br-selected"></a>
                                                    <a href="javascript:;" class="br-selected"></a>
                                                    <a href="javascript:;"></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br class="clear"/>
                            <div class="comment" id="comment-22">
                                <div class="gravatar">
                                    <img src="upload/avatar-100x100.png" width="60" height="60" alt="Marie Argeris"
                                         class="avatar avatar-60 wp-user-avatar wp-user-avatar-60 alignnone photo"/>
                                </div>

                                <div class="right ">

                                    <h7>Marie Argeris</h7>

                                    <div class="comment_date">December 15, 2016 at 3:02 pm</div>
                                    <a rel='nofollow' class='comment-reply-link' href='#'
                                       aria-label='Reply to Marie Argeris'>Reply</a>
                                    <div class="comment_text"/>
                                    <p>Statement buttons cover-up tweaks patch pockets perennial lapel collar flap chest
                                        pockets topline stitching cropped jacket. Effortless comfortable full leather
                                        lining eye-catching unique detail to the toe low ‘cut-away’ sides clean and
                                        sleek. Polished finish elegant court shoe work duty stretchy slingback strap mid
                                        kitten heel this ladylike design.</p>
                                    <div class="comment_rating_wrapper">
                                        <div class="comment_rating_label">Accomodation</div>
                                        <div class="br-theme-fontawesome-stars-o">
                                            <div class="br-widget">
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;"></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="comment_rating_wrapper">
                                        <div class="comment_rating_label">Destination</div>
                                        <div class="br-theme-fontawesome-stars-o">
                                            <div class="br-widget">
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;" class="br-selected"></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="comment_rating_wrapper">
                                        <div class="comment_rating_label">Meals</div>
                                        <div class="br-theme-fontawesome-stars-o">
                                            <div class="br-widget">
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;"></a>
                                                <a href="javascript:;"></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="comment_rating_wrapper">
                                        <div class="comment_rating_label">Transport</div>
                                        <div class="br-theme-fontawesome-stars-o">
                                            <div class="br-widget">
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;"></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="comment_rating_wrapper">
                                        <div class="comment_rating_label">Value For Money</div>
                                        <div class="br-theme-fontawesome-stars-o">
                                            <div class="br-widget">
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;" class="br-selected"></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="comment_rating_wrapper">
                                        <div class="comment_rating_label">Overall</div>
                                        <div class="br-theme-fontawesome-stars-o">
                                            <div class="br-widget">
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;" class="br-selected"></a>
                                                <a href="javascript:;"></a>
                                                <a href="javascript:;"></a>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>


                        <br className="clear"/>


                    </div>
                    <br className="clear"/>
                </div>


                <div style={{height: "10px"}}></div>

                <div id="respond" class="comment-respond">
                    <h3 id="reply-title" class="comment-reply-title">Write A Review <small><a rel="nofollow"
                                                                                              id="cancel-comment-reply-link"
                                                                                              href="#"
                                                                                              style={{display: "none"}}>Cancel
                        reply</a></small></h3>
                    <form action="#" method="post" id="commentform" class="comment-form">
                        <p class="comment-notes"><span
                            id="email-notes">Your email address will not be published.</span> Required fields are
                            marked <span class="required">*</span></p>
                        <p class="comment-form-comment">
                            <label for="comment">Comment</label>
                            <textarea id="comment" name="comment" cols="45" rows="8" maxlength="65525"
                                      required="required"></textarea>
                        </p>
                        <p class="comment-form-author">
                            <label for="author">Name <span class="required">*</span></label>
                            <input id="author" name="author" type="text" value="" size="30" maxlength="245"
                                   required='required'/>
                        </p>
                        <p class="comment-form-email">
                            <label for="email">Email <span class="required">*</span></label>
                            <input id="email" name="email" type="text" value="" size="30" maxlength="100"
                                   aria-describedby="email-notes" required='required'/>
                        </p>
                        <p class="comment-form-url">
                            <label for="url">Website</label>
                            <input id="url" name="url" type="text" value="" size="30" maxlength="200"/>
                        </p>
                        <p class="comment-form-rating">
                            <label for="accomodation_rating">Accomodation</label>
                            <span class="commentratingbox">
                        <select id="accomodation_rating" name="accomodation_rating">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option></select>
                                <p class="comment-form-rating"><label
                                    for="destination_rating">Destination</label></p></span>
                            <span class="commentratingbox">
                        <select id="destination_rating" name="destination_rating"><option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option></select><p class="comment-form-rating"><label
                                for="meals_rating">Meals</label></p></span>
                            <span class="commentratingbox">
                        <select id="meals_rating" name="meals_rating"><option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option></select> <p class="comment-form-rating"><label
                                for="transport_rating">Transport</label></p></span>
                            <span class="commentratingbox">
                        <select id="transport_rating" name="transport_rating"><option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option></select> <p class="comment-form-rating"><label
                                for="value_rating">Value For Money</label></p></span>
                            <span class="commentratingbox">
                        <select id="value_rating" name="value_rating"><option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option></select> <p class="comment-form-rating"><label
                                for="overall_rating">Overall</label></p></span>
                            <span class="commentratingbox">
                        <select id="overall_rating" name="overall_rating"><option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option></select> </span>
                            <p class="form-submit">
                                <input name="submit" type="submit" id="submit" class="submit" value="Post Comment"/>
                            </p></p>

                    </form>
                </div>


            </div>


        </React.Fragment>
    )
        ;
};

export default Acommodation_Detail;
