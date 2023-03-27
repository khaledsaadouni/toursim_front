import React, { useEffect, useState } from 'react';
import "./Home.css"
import image7 from "./image7.jpg"
import Destination_Card from "./Destination_Card";
import Trip_Card from "./Trip_Card";
import NavBar from "../navBar/NavBar";
import { useLocalState } from "../utils/UseLocalStorage";
import Spinner from 'react-bootstrap/Spinner';

const GET_TOKEN_URL = "/api/v1/auth/oAuth2Token"

const MyComponent = () => {
    const [jwt, setJwt] = useLocalState("", "jwt");
    const [user, setUser] = useLocalState(null, "user");
    const [error, setError] = useState("");
    useEffect(() => {
        const asyncFn = async () => {
            try {
                await fetch(GET_TOKEN_URL, {
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
                        console.log(data)
                        setJwt(data.token);
                        setUser(data.user);
                    }).catch((message) => {
                        setError("NO there is a problem")
                    });
            } catch (error) {
                setError("NO there is a problem")
            }
        };
        asyncFn();
    }, []);
    const items = ['item1', 'item2', 'item3', 'item4'];
    const [filtre, setFilter] = useState(false);
    return (

        <React.Fragment>
            <div id="wrapper" className="hasbg transparent">
                <NavBar />
                <div className="ppb_wrapper  ">
                    <div className="one withsmallpadding ppb_tour_search_youtube parallax withbg " style={{
                        textAlign: "center",
                        height: "800px",
                        color: "#ffffff",
                        backgroundImage: `url(${image7})`
                    }}>

                        <div className="overlay_background"
                            style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}></div>
                        <div className="center_wrapper">
                            <div className="inner_content">
                                <div className="standard_wrapper">
                                    <h2 className="ppb_title" style={{ color: "#ffffff" }}>Where do you want to go?</h2>
                                    <div className="page_tagline" style={{ color: "#ffffff" }}>Trips, experiences, and
                                        places.
                                        All in
                                        one service.
                                    </div>

                                    <form id="tour_search_form" className="tour_search_form" method="get" action="#">
                                        <div className="tour_search_wrapper">
                                            <div className="one_fourth themeborder">
                                                <input id="keyword" name="keyword" type="text"
                                                    placeholder="Destination, city" />
                                                <span className="ti-search"></span>
                                                <div id="autocomplete" className="autocomplete"
                                                    data-mousedown="false"></div>
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
                                                <input id="tour_search_btn" type="submit" className="button"
                                                    value="Search" />
                                            </div>
                                            <br className="clear" />
                                            <div
                                                className={filtre === false ? "tour_advance_search_wrapper" : "tour_search_wrapper"}>
                                                <div className="one_fourth themeborder">
                                                    <select id="tourcat" name="tourcat">
                                                        <option value="">All Categories</option>
                                                        <option value="mountain">Mountain</option>
                                                        <option value="rural">Rural</option>
                                                        <option value="snow-ice">Snow &amp; Ice</option>
                                                        <option value="wildlife">Wildlife</option>
                                                    </select>
                                                    <span className="ti-angle-down"></span>
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
                                                    </select>
                                                    <span className="ti-angle-down"></span>
                                                </div>
                                                <div className="one_fourth themeborder">
                                                    <input id="budget" name="budget" type="text"
                                                        placeholder="Max budget ex. 500" />
                                                    <span>$</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tour_advance_search_wrapper_link"><a
                                            id="tour_advance_search_toggle"
                                            onClick={() => setFilter(!filtre)}
                                            style={{ color: "#ffffff" }}><span
                                                className={filtre === false ? "icon ti-angle-down" : "icon ti-angle-up"}></span>Advanced
                                            Search</a></div>

                                    </form>

                                </div>
                            </div>
                        </div>
                        <div className="banner--fadeBottom"></div>
                    </div>

                </div>
                <div className="one withsmallpadding ppb_header "
                    style={{ textAlign: "center", padding: "0px 0 0px 0", marginTop: "70px" }}>
                    <div className="standard_wrapper">
                        <div className="page_content_wrapper">
                            <div className="inner">
                                <div style={{ margin: "auto", width: "100%" }}>
                                    <h2 className="ppb_title">Popular Destinations</h2>
                                    <div className="page_tagline">Tunisia&#039;s best destinations</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="  ppb_destination_grid one nopadding "
                    style={{ marginTop: "50px", marginBottom: "50px" }}>
                    <div className="page_content_wrapper page_main_content sidebar_content full_width fixed_column">
                        <div className="standard_wrapper">
                            <div id="15675891342113546341"
                                className="  portfolio_filter_wrapper gallery grid portrait four_cols"
                                data-columns="6">
                                {items.map((item, index) => (
                                    <div className=" element grid baseline classic4_cols animated1">
                                        <Destination_Card name={item} />
                                    </div>))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="one withsmallpadding ppb_header "
                    style={{ textAlign: "center", padding: "0px 0 0px 0", marginTop: "10px", marginBottom: "50px" }}>

                    <div className="standard_wrapper">
                        <div className="page_content_wrapper">
                            <div className="inner">
                                <div style={{ margin: "auto", width: "100%" }}>
                                    <h2 className="ppb_title">Most Liked Trips</h2>
                                    <div className="page_tagline">Best offers trips from us</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ppb_tour_classic one nopadding " style={{ marginBottom: "50px" }}>
                    <div className="page_content_wrapper page_main_content sidebar_content full_width fixed_column">
                        <div className="standard_wrapper">
                            <div id="1567589134228149190"
                                className="portfolio_filter_wrapper gallery classic three_cols"
                                data-columns="3">
                                {items.map((item, index) => (
                                    <div className="element grid classic3_cols animated1">
                                        <Trip_Card />
                                    </div>))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="one withsmallpadding ppb_header "
                    style={{ textAlign: "center", padding: "0px 0 0px 0", marginBottom: "40px" }}>
                    <div className="standard_wrapper">
                        <div className="page_content_wrapper">
                            <div className="inner">
                                <div style={{ margin: "auto", width: "100%" }}>
                                    <h2 className="ppb_title">Why Choose Us</h2>
                                    <div className="page_tagline">Here are reasons you should plan trip with us
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="standard_wrapper">
                    <div className="one_third withsmallpadding ppb_text"
                        style={{ textAlign: "center", padding: "0px 0 0px 0", marginBottom: "70px" }}>
                        <div className="standard_wrapper">
                            <div className="page_content_wrapper">
                                <div className="inner">
                                    <div style={{ margin: "auto", width: "100%" }}>
                                        <p><img className="alignnone wp-image-3106 size-medium"
                                            src="assets/upload/Map-Marker-300x300.png" width="150" height="150"
                                            alt="" />
                                        </p>
                                        <h4 className="p1"><span className="s1"><b>Handpicked Hotels</b></span></h4>
                                        <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula
                                            eget
                                            dolor. Aenean massa</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="standard_wrapper">
                    <div className="one_third withsmallpadding ppb_text"
                        style={{ textAlign: "center", padding: "0px 0 0px 0", marginBottom: "70px" }}>
                        <div className="standard_wrapper">
                            <div className="page_content_wrapper">
                                <div className="inner">
                                    <div style={{ margin: "auto", width: "100%" }}>
                                        <p><img className="alignnone wp-image-3107 size-medium"
                                            src="assets/upload/Worldwide-Location-300x300.png" width="150"
                                            height="150"
                                            alt="" /></p>
                                        <h4 className="p1"><span className="s1"><b>World Class Service</b></span></h4>
                                        <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula
                                            eget
                                            dolor. Aenean massa</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="standard_wrapper">
                    <div className="one_third last withsmallpadding ppb_text"
                        style={{ textAlign: "center", padding: "0px 0 0px 0", marginBottom: "70px" }}>
                        <div className="standard_wrapper">
                            <div className="page_content_wrapper">
                                <div className="inner">
                                    <div style={{ margin: "auto", width: "100%" }}>
                                        <p><img className="alignnone wp-image-3108 size-medium"
                                            src="assets/upload/Hot-Air-Balloon-300x300.png" width="140" height="140"
                                            alt="" />
                                        </p>
                                        <h4 className="p1"><span className="s1"><b>Best Price Guarantee</b></span></h4>
                                        <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula
                                            eget
                                            dolor. Aenean massa</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>

    );
};

export default MyComponent;
