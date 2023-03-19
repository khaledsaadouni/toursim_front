import React from 'react';

const MyComponent = () => {
    return (
        <React.Fragment>

            <div id="footer" className=" ppb_wrapper">
                <ul className="sidebar_widget three">
                    <li id="text-2" className="widget widget_text">
                        <h2 className="widgettitle">Our Awards</h2>
                        <div className="textwidget">
                            <p>London is a megalopolis of people, ideas and frenetic energy. The capital and largest
                                city of the United Kingdom.
                                <br/>
                                <img src="assets/upload/awards.png" width="246" height="113" style={{marginTop: "30px"}}
                                     alt=""/>
                            </p>
                        </div>
                    </li>
                    <li id="text-4" className="widget widget_text">
                        <h2 className="widgettitle">Contact Info</h2>
                        <div className="textwidget">
                            <p><span className="ti-mobile" style={{marginRight: "10px"}}></span>1-567-124-44227</p>
                            <p><span className="ti-location-pin" style={{marginRight: "10px"}}></span>184 Main Street
                                East
                                Perl Habour 8007</p>
                            <p><span className="ti-alarm-clock" style={{marginRight: "10px"}}></span>Mon - Sat 8.00 -
                                18.00
                                Sunday CLOSED</p>
                            <div style={{marginTop: "20px"}}>
                                <div className="social_wrapper shortcode dark ">
                                    <ul>
                                        <li className="facebook"><a target="_blank" title="Facebook" href="#"><i
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
                            </div>
                        </div>
                    </li>
                    <li id="grandtour_flickr-7" className="widget Grandtour_Flickr">
                        <h2 className="widgettitle">Recent Trips</h2>
                        <ul className="flickr">
                            <li>
                                <a target="_blank" href="#"><img src="upload/28760131762_e4a64b20c4_q.jpg"
                                                                 alt="Buddha Sunrise in Borobudur, Magelang, Central Java, Indonesia"
                                                                 width="75" height="75"/></a>
                            </li>
                            <li>
                                <a target="_blank" href="#"><img src="upload/27308262031_a6ebf0572e_q.jpg"
                                                                 alt="Gentoo Penguins, Falkland Islands (Islas Malvinas), British Overseas Territory"
                                                                 width="75" height="75"/></a>
                            </li>
                            <li>
                                <a target="_blank" href="#"><img src="upload/27287965356_60355f51d7_q.jpg"
                                                                 alt="Aerial View of Singapore CBD Skyline, Marina Bay Esplanade and Raffles Place, Singapore"
                                                                 width="75" height="75"/></a>
                            </li>
                            <li>
                                <a target="_blank" href="#"><img src="upload/27138570412_d25002a5c9_q.jpg"
                                                                 alt="View Of Sugarloaf Mountain, Botafogo And The City of Rio De Janeiro, Brazil, South America"
                                                                 width="75" height="75"/></a>
                            </li>
                            <li>
                                <a target="_blank" href="#"><img src="upload/26520497604_1df03a02bc_q.jpg"
                                                                 alt="Sacre Coeur (Basilica of the Sacred Heart of Paris), Paris, France :: HDR"
                                                                 width="75" height="75"/></a>
                            </li>
                            <li>
                                <a target="_blank" href="#"><img src="upload/27012097142_f1511b67bc_q.jpg"
                                                                 alt="The Great Gate (Darwaza-i rauza) of Taj Mahal, Agra, Uttar Pradesh, India :: HDR"
                                                                 width="75" height="75"/></a>
                            </li>
                        </ul>
                        <br className="clear"/>
                    </li>
                </ul>
            </div>

            <div className="footer_bar  ppb_wrapper ">

                <div className="footer_bar_wrapper ">
                    <div className="menu-footer-menu-container">
                        <ul id="footer_menu" className="footer_nav">
                            <li className="menu-item current-menu-item"><a href="index.html">Home</a></li>
                            <li className="menu-item"><a href="tours.html">Tours</a></li>
                            <li className="menu-item"><a href="blog.html">Blog</a></li>
                            <li className="menu-item"><a href="#">Purchase Template</a></li>
                        </ul>
                    </div>
                    <div id="copyright">© Copyright GTour Template Demo</div>
                    <br className="clear"/>
                    <a id="toTop" href="javascript:;"><i className="fa fa-angle-up"></i></a>
                </div>
            </div>

            <div id="side_menu_wrapper" className="overlay_background">
                <a id="close_share" href="javascript:;"><span className="ti-close"></span></a>

            </div>
        </React.Fragment>
    );
};

export default MyComponent;
