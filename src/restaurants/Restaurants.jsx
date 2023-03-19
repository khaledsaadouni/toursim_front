import React, {useState} from 'react';
import Nav from "../navBar/Nav";
import Restaurant_list from "./Restaurant_list";

const Restaurants = () => {


    const [filtre, setFilter] = useState(false);
    const items = ['item1', 'item2', 'item3', 'item4', 'item1', 'item2', 'item3', 'item4', 'item1', 'item2', 'item3', 'item4'];
    return (
        <React.Fragment>
            <Nav/>
            <div id="page_content_wrapper" className="hasbg ">

                <form id="tour_search_form" name="tour_search_form" method="get"
                      action="http://themes.themegoods.com/granddemo/tours/tour-2-columns-classic/">
                    <div className="tour_search_wrapper">
                        <div className="one_fourth themeborder">
                            <input id="keyword" name="keyword" type="text" autoComplete="off"
                                   placeholder="Destination, city"/>
                            <span className="ti-search"></span>
                            <div id="autocomplete" className="autocomplete" data-mousedown="false"></div>
                        </div>
                        <div className="one_fourth themeborder">
                            <select id="month" name="month">
                                <option value="">Any Month</option>
                                <option value="january">January</option>
                                <option value="february">February</option>
                                <option value="march">March</option>
                                <option value="april">April</option>
                                <option value="may">May</option>
                                <option value="june">June</option>
                                <option value="july">July</option>
                                <option value="august">August</option>
                                <option value="september">September</option>
                                <option value="october">October</option>
                                <option value="november">November</option>
                                <option value="december">December</option>
                            </select>
                            <span className="ti-calendar"></span>
                        </div>
                        <div className="one_fourth themeborder">
                            <select id="sort_by" name="sort_by">
                                <option value="date">Sort By Date</option>
                                <option value="price_low">Price Low to High</option>
                                <option value="price_high">Price High to Low</option>
                                <option value="name">Sort By Name</option>
                                <option value="popular">Sort By Popularity</option>
                                <option value="review">Sort By Review Score</option>
                            </select>
                            <span className="ti-exchange-vertical"></span>
                        </div>
                        <div className="one_fourth last themeborder">
                            <input id="tour_search_btn" type="submit" className="button" value="Search"/>
                        </div>

                        <br className="clear"/>
                        <div className={filtre === false ? "tour_advance_search_wrapper" : "tour_search_wrapper"}>
                            <div className="one_fourth themeborder">
                                <select id="tourcat" name="tourcat">
                                    <option value="">All Categories</option>
                                    <option value="mountain">Mountain</option>
                                    <option value="rural">Rural</option>
                                    <option value="snow-ice">Snow &amp; Ice</option>
                                    <option value="wildlife">Wildlife</option>
                                </select><span className="ti-angle-down"></span>
                            </div>

                            <div className="one_fourth themeborder">
                                <select id="destination_id" name="destination_id">
                                    <option value="">Any Destinations</option>
                                    <option value="277">Tokyo</option>
                                    <option value="278">Seoul</option>
                                    <option value="279">Paris</option>
                                    <option value="284">London</option>
                                    <option value="285">Venice</option>
                                    <option value="287">Miami</option>
                                    <option value="289">Rome</option>
                                    <option value="270">Prague</option>
                                    <option value="291">California</option>
                                    <option value="292">Kyoto</option>
                                    <option value="293">Hong Kong</option>
                                    <option value="294">Santorini</option>
                                </select><span className="ti-angle-down"></span>
                            </div>

                            <div className="one_fourth themeborder">
                                <input id="budget" name="budget" type="text" placeholder="Max budget ex. 500"/>
                                <span>$</span>
                            </div>
                        </div>

                        <div className="tour_advance_search_wrapper_link">
                            <a id="tour_advance_search_toggle" className="theme_link_color"
                               onClick={() => setFilter(!filtre)}><span
                                className={filtre === false ? "icon ti-angle-down" : "icon ti-angle-up"}></span>Advanced
                                Search</a>
                        </div>
                    </div>
                </form>

                <div className="inner">

                    <div className="inner_wrapper nopadding">

                        <div id="page_main_content" className="sidebar_content left_sidebar fixed_column">

                            <div className="standard_wrapper">

                                <div id="portfolio_filter_wrapper"
                                     className="gallery classic two_cols portfolio-content section content clearfix"
                                     data-columns="3">

                                    {items.map((item, index) => (
                                        <Restaurant_list/>
                                    ))}

                                </div>
                                <br className="clear"/>

                            </div>
                        </div>

                        <div className="sidebar_wrapper left_sidebar">
                            <div className="sidebar">

                                <div className="content">

                                    <ul className="sidebar_widget">
                                        <li id="grandtour_cat_posts-5" className="widget Grandtour_Cat_Posts">
                                            <h2 className="widgettitle"><span>Travel Tips</span></h2>
                                            <ul className="posts blog withthumb ">
                                                <li>
                                                    <div className="post_circle_thumb">
                                                        <a href="#"><img className="alignleft frame post_thumb"
                                                                         src="upload/photo-1469920783271-4ee08a94d42d-150x150.jpg"
                                                                         alt=""/></a>
                                                    </div>
                                                    <a href="#">Memorial Day to Someone Told Me to Travel</a>
                                                    <div className="post_attribute">December 10, 2016</div>
                                                </li>
                                                <li>
                                                    <div className="post_circle_thumb">
                                                        <a href="#"><img className="alignleft frame post_thumb"
                                                                         src="upload/pexels-photo-212388-150x150.jpeg"
                                                                         alt=""/></a>
                                                    </div>
                                                    <a href="#">7 Tips For Nomads On A Budget Trips</a>
                                                    <div className="post_attribute">December 10, 2016</div>
                                                </li>
                                                <li>
                                                    <div className="post_circle_thumb">
                                                        <a href="#"><img className="alignleft frame post_thumb"
                                                                         src="assets/upload/pexels-photo-24484-150x150.jpg"
                                                                         alt=""/></a>
                                                    </div>
                                                    <a href="#">Taking A Travel Blog Victory Lap</a>
                                                    <div className="post_attribute">December 10, 2016</div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li id="grandtour_flickr-8" className="widget Grandtour_Flickr">
                                            <h2 className="widgettitle">Recent Trips</h2>
                                            <ul className="flickr">
                                                <li>
                                                    <a target="_blank" href="#"><img
                                                        src="assets/upload/28760131762_e4a64b20c4_q.jpg"
                                                        alt="Buddha Sunrise in Borobudur, Magelang, Central Java, Indonesia"
                                                        width="75" height="75"/></a>
                                                </li>
                                                <li>
                                                    <a target="_blank" href="#"><img
                                                        src="assets/upload/27308262031_a6ebf0572e_q.jpg"
                                                        alt="Gentoo Penguins, Falkland Islands (Islas Malvinas), British Overseas Territory"
                                                        width="75" height="75"/></a>
                                                </li>
                                                <li>
                                                    <a target="_blank" href="#"><img
                                                        src="assets/upload/27287965356_60355f51d7_q.jpg"
                                                        alt="Aerial View of Singapore CBD Skyline, Marina Bay Esplanade and Raffles Place, Singapore"
                                                        width="75" height="75"/></a>
                                                </li>
                                                <li>
                                                    <a target="_blank" href="#"><img
                                                        src="assets/upload/27138570412_d25002a5c9_q.jpg"
                                                        alt="View Of Sugarloaf Mountain, Botafogo And The City of Rio De Janeiro, Brazil, South America"
                                                        width="75" height="75"/></a>
                                                </li>
                                                <li>
                                                    <a target="_blank" href="#"><img
                                                        src="assets/upload/26520497604_1df03a02bc_q.jpg"
                                                        alt="Sacre Coeur (Basilica of the Sacred Heart of Paris), Paris, France :: HDR"
                                                        width="75" height="75"/></a>
                                                </li>
                                                <li>
                                                    <a target="_blank" href="#"><img
                                                        src="assets/upload/27012097142_f1511b67bc_q.jpg"
                                                        alt="The Great Gate (Darwaza-i rauza) of Taj Mahal, Agra, Uttar Pradesh, India :: HDR"
                                                        width="75" height="75"/></a>
                                                </li>
                                                <li>
                                                    <a target="_blank" href="#"><img
                                                        src="assets/upload/26484150103_b5f5f154ec_q.jpg"
                                                        alt="Emerald Lake From South Klondike Highway, Southern Yukon, Canada :: HDR"
                                                        width="75" height="75"/></a>
                                                </li>
                                                <li>
                                                    <a target="_blank" href="#"><img
                                                        src="assets/upload/26464425264_12199828d4_q.jpg"
                                                        alt="View of The Elizabeth Tower (Big Ben), Palace of Westminster and London Eye, London, England, United Kingdom"
                                                        width="75" height="75"/></a>
                                                </li>
                                                <li>
                                                    <a target="_blank" href="#"><img
                                                        src="assets/upload/26323295363_00eef6e96f_q.jpg"
                                                        alt="View Of Iguazu Falls From Brazilian Side, Parana State, South America"
                                                        width="75" height="75"/></a>
                                                </li>
                                            </ul>
                                            <br className="clear"/>
                                        </li>
                                        <li id="grandtour_social_profiles_posts-5"
                                            className="widget Grandtour_Social_Profiles_Posts">
                                            <h2 className="widgettitle">Connect to Us</h2>
                                            <div className="social_wrapper shortcode light small">
                                                <ul>
                                                    <li className="facebook"><a target="_blank" title="Facebook"
                                                                                href="#"><i
                                                        className="fa fa-facebook"></i></a></li>
                                                    <li className="twitter"><a target="_blank" title="Twitter"
                                                                               href="https://twitter.com/#"><i
                                                        className="fa fa-twitter"></i></a></li>
                                                    <li className="youtube"><a target="_blank" title="Youtube" href="#"><i
                                                        className="fa fa-youtube"></i></a></li>
                                                    <li className="pinterest"><a target="_blank" title="Pinterest"
                                                                                 href="https://pinterest.com/#"><i
                                                        className="fa fa-pinterest"></i></a></li>
                                                    <li className="instagram"><a target="_blank" title="Instagram"
                                                                                 href="https://instagram.com/theplanetd"><i
                                                        className="fa fa-instagram"></i></a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li id="grandtour_tour_posts-2" className="widget Grandtour_Tour_Posts">
                                            <h2 className="widgettitle">Recent Tours</h2>
                                            <div
                                                className="one gallery1 grid static filterable portfolio_type themeborder"
                                            >
                                                <a className="tour_image" href="#"></a>
                                                <div className="portfolio_info_wrapper">
                                                    <div className="tour_price ">
                                                        $6,000
                                                    </div>
                                                    <h5>Grand Switzerland</h5>
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
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <br className="clear"/>
                                            <div
                                                className="one gallery1 grid static filterable portfolio_type themeborder">
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
                                                                    <a href="javascript:;" className="br-selected"></a>
                                                                    <a href="javascript:;" className="br-selected"></a>
                                                                    <a href="javascript:;" className="br-selected"></a>
                                                                    <a href="javascript:;" className="br-selected"></a>
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

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Restaurants;
