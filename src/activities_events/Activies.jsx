import React, {useEffect, useState} from 'react';
import Nav from "../navBar/Nav";
import Activity_card from "./activity_card";
import calculateAverageRate from "../utils/ReviewStarsCounter";
import ClipLoader from "react-spinners/ClipLoader";

const URL = "/api/v1/event/all"
const Activities = () => {

    const [filtre, setFilter] = useState(false);
    const [offers, setOffers] = useState(null);
    const [loading, setLoading] = useState(true);
    const [originaloffers, setOriginaloffers] = useState(null);
    useEffect(() => {
        setLoading(false)
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
                        setOriginaloffers(data)
                        setLoading(true)
                    }).catch((message) => {
                    });
            } catch (error) {
            }
        };

        asyncFn();
    }, []);
    const sort = (event) => {
        if (event.target.value === "price_low") {
            const sortedOffers = [...offers].sort((a, b) => a.price - b.price);
            setOffers(sortedOffers)
        }
        if (event.target.value === "price_high") {
            const sortedOffers = [...offers].sort((a, b) => b.price - a.price);
            setOffers(sortedOffers)
        }
        if (event.target.value === "date") {
            const sortedOffers = [...offers].sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate))
            setOffers(sortedOffers);
        }
        if (event.target.value === "name") {
            const sortedOffers = [...offers].sort((a, b) => a.name.localeCompare(b.name))
            setOffers(sortedOffers);
        }
        if (event.target.value === "review") {
            const sortedOffers = [...offers].sort((a, b) => b.reviews.length - a.reviews.length)
            setOffers(sortedOffers);
        }
    }
    const filterByState = (event) => {
        if (event.target.value === "Destination") {
            setOffers(originaloffers)
        } else {
            const filteredOffers = originaloffers.filter(offer => offer.destination.toUpperCase() === event.target.value.toUpperCase());
            setOffers(filteredOffers)
        }
    }
    const filterByName = (event) => {
        if (event === "") {
            setOffers(originaloffers)
        } else {
            const filteredOffers = originaloffers.filter(offer => offer.name.toUpperCase().includes(event.toUpperCase()));
            setOffers(filteredOffers)
        }
    }
    const filtrePrice = (event) => {

        if (event.target.value === "") {
            setOffers(originaloffers)
        } else {
            const filteredOffers = originaloffers.filter(offer => offer.price <= event.target.value);
            setOffers(filteredOffers)
        }
    }
    return (
        <React.Fragment>
            <Nav/>

            <div id="page_content_wrapper" className="hasbg" style={{marginTop: "20px"}}>

                <form id="tour_search_form" name="tour_search_form" method="get"
                      action="http://themes.themegoods.com/granddemo/tours/tour-2-columns-classic/">
                    <div className="tour_search_wrapper">
                        <div className="one_fourth themeborder">
                            <input id="keyword" name="keyword" type="text" autoComplete="off"
                                   placeholder="Name" onChange={(event) => filterByName(event.target.value)}/>
                            <span className="ti-search"></span>
                            <div id="autocomplete" className="autocomplete" data-mousedown="false"></div>
                        </div>
                        <div className="one_fourth themeborder">
                            <select id="destination_id" name="destination_id" onChange={filterByState}>
                                <option value="Destination">Destination</option>
                                <option value="Ariana">Ariana</option>
                                <option value="Beja">Beja</option>
                                <option value="Ben Arous"> Ben Arous</option>
                                <option value="Bizerte">Bizerte</option>
                                <option value="Gabes"> Gabes</option>
                                <option value="Gafsa">Gafsa</option>
                                <option value="Jendouba">Jendouba</option>
                                <option value="Kairouan">Kairouan</option>
                                <option value="Kasserine">Kasserine</option>
                                <option value="Kebili">Kebili</option>
                                <option value="Kef">Kef</option>
                                <option value="Mahdia">Mahdia</option>
                                <option value="Manouba">Manouba</option>
                                <option value="Medenine">Medenine</option>
                                <option value="Monastir">Monastir</option>
                                <option value="Nabeul">Nabeul</option>
                                <option value="Sfax"> Sfax</option>
                                <option value="Sidi Bouzid"> Sidi Bouzid</option>
                                <option value="Siliana"> Siliana</option>
                                <option value="Sousse">Sousse</option>
                                <option value="Tataouine">Tataouine</option>
                                <option value="Tozeur">Tozeur</option>
                                <option value="Tunis">Tunis</option>
                                <option value="Zaghouan">Zaghouan</option>
                            </select><span className="ti-angle-down"></span>
                        </div>
                        <div className="one_fourth themeborder">
                            <select id="sort_by" name="sort_by" onClick={sort}>
                                <option value="">Sort By</option>
                                <option value="date">Sort By Date</option>
                                <option value="price_low">Price Low to High</option>
                                <option value="price_high">Price High to Low</option>
                                <option value="name">Sort By Name</option>
                                <option value="review">Sort By Review Score</option>
                            </select>
                            <span className="ti-exchange-vertical"></span>
                        </div>
                        <div className="one_fourth  themeborder" style={{marginRight: "0",}}>
                            <input id="budget" name="budget" type="text" placeholder="Max budget ex. 500"
                                   onChange={filtrePrice}/>
                            <span>DT</span>

                        </div>
                        <br className="clear"/>
                        {/*<div className={filtre === false ? "tour_advance_search_wrapper" : "tour_search_wrapper"}>*/}
                        {/*    <div className="one_fourth themeborder">*/}
                        {/*        <select id="tourcat" name="tourcat">*/}
                        {/*            <option value="">All Categories</option>*/}
                        {/*            <option value="mountain">Mountain</option>*/}
                        {/*            <option value="rural">Rural</option>*/}
                        {/*            <option value="snow-ice">Snow &amp; Ice</option>*/}
                        {/*            <option value="wildlife">Wildlife</option>*/}
                        {/*        </select><span className="ti-angle-down"></span>*/}
                        {/*    </div>*/}


                        {/*</div>*/}

                        {/*<div className="tour_advance_search_wrapper_link">*/}
                        {/*    <a id="tour_advance_search_toggle" className="theme_link_color"*/}
                        {/*       onClick={() => setFilter(!filtre)}><span*/}
                        {/*        className={filtre === false ? "icon ti-angle-down" : "icon ti-angle-up"}></span>Advanced*/}
                        {/*        Search</a>*/}
                        {/*</div>*/}
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
                                                       date={item.eventDate}
                                                       duration={item.duration} photos={item.photo}
                                                       countreview={item.reviews.length}
                                                       reviews={calculateAverageRate(item.reviews)}
                                                       capacity={item.capacity} name={item.name} price={item.price}
                                                       destination={item.destination} emplacement={item.emplacement}/>
                                    )) : null}

                                </div>
                                <div hidden={loading} style={{width: '50px', margin: 'auto', display: 'block'}}>
                                    <ClipLoader color="#bb3a41" size={150}/>
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
