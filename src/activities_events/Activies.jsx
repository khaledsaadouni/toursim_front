import React, {useEffect, useState} from 'react';
import Nav from "../navBar/Nav";
import Activity_card from "./activity_card";
import calculateAverageRate from "../utils/ReviewStarsCounter";

const URL = "/api/v1/event/all"
const Activities = () => {

    const [filtre, setFilter] = useState(false);
    const [offers, setOffers] = useState(null)
    useEffect(() => {
        const asyncFn = async () => {
            try {
                await fetch(URL, {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "GET",
                }).then((response) => {
                    if (response.status === 200) {
                        return Promise.all([response.json(), response.headers])
                    } else {
                        return Promise.reject("")
                    }
                })
                    .then(([data, header]) => {
                        setOffers(data)
                    }).catch((message) => {
                    });
            } catch (error) {
            }
        };

        asyncFn();
    }, []);
    return (
        <React.Fragment>
            <Nav/>

            <div id="page_content_wrapper" className="hasbg" style={{marginTop: "20px"}}>

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

                        <div id="page_main_content" className="sidebar_content full_width fixed_column">

                            <div className="standard_wrapper">

                                <div id="portfolio_filter_wrapper"
                                     className="gallery grid four_cols portfolio-content section content clearfix"
                                     data-columns="4">

                                    {offers !== null ? offers.map((item, index) => (
                                        <Activity_card id={item.id}
                                                       duration={item.duration} photos={item.photo}
                                                       countreview={item.reviews.length}
                                                       reviews={calculateAverageRate(item.reviews)}
                                                       capacity={item.capacity} name={item.name} price={item.price}
                                                       destination={item.destination} emplacement={item.emplacement}/>
                                    )) : null}

                                </div>
                                <br className="clear"/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Activities;
