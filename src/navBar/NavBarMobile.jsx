import React from 'react';

const MyComponent = () => {

    return (
        <React.Fragment>
            <a id="close_mobile_menu" href="javascript:;"></a>

            <div className="mobile_menu_wrapper">
                <a id="mobile_menu_close" href="javascript:;" className="button"><span className="ti-close"></span></a>

                <div className="mobile_menu_content">

                    <div className="menu-main-menu-container">
                        <ul id="mobile_main_menu" className="mobile_main_nav">
                            <li className="menu-item current-menu-item menu-item-has-children"><a
                                href="index.html">Home</a>
                                <ul className="sub-menu">
                                    <li className="menu-item"><a href="index.html">Home 1 – Background Image</a></li>
                                    <li className="menu-item"><a href="home-2.html">Home 2 – Youtube Video</a></li>
                                    <li className="menu-item"><a href="home-3-google-inspired.html">Home 3 – Google
                                        Inspired</a></li>
                                    <li className="menu-item"><a href="home-4-travel-site.html">Home 4 – Travel Site</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-has-children"><a href="#">Tours</a>
                                <ul className="sub-menu">
                                    <li className="menu-item menu-item-has-children"><a
                                        href="tours/tour-3-columns-classic.html">Tour Classic Fullwidth</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item"><a href="tour-2-columns-classic.html">2
                                                Columns</a></li>
                                            <li className="menu-item"><a href="tour-3-columns-classic.html">3
                                                Columns</a></li>
                                            <li className="menu-item"><a href="tour-4-columns-classic.html">4
                                                Columns</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item menu-item-has-children"><a
                                        href="tour-2-columns-classic-right-sidebar.html">Tour Classic Sidebar</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item"><a
                                                href="tour-2-columns-classic-right-sidebar.html">Right Sidebar</a></li>
                                            <li className="menu-item"><a
                                                href="tour-2-columns-classic-left-sidebar.html">Left Sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item menu-item-has-children"><a href="tour-3-columns-grid.html">Tour
                                        Grid Fullwidth</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item"><a href="tour-2-columns-grid.html">2 Columns</a>
                                            </li>
                                            <li className="menu-item"><a href="tour-3-columns-grid.html">3 Columns</a>
                                            </li>
                                            <li className="menu-item"><a href="tour-4-columns-grid.html">4 Columns</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item menu-item-has-children"><a
                                        href="tour-grid-right-sidebar.html">Tour Grid Sidebar</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item"><a href="tour-grid-right-sidebar.html">Right
                                                Sidebar</a></li>
                                            <li className="menu-item"><a href="tour-grid-left-sidebar.html">Left
                                                Sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item menu-item-has-children"><a
                                        href="tour-list-right-sidebar.html">Tour List Sidebar</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item"><a href="tour-list-right-sidebar.html">Right
                                                Sidebar</a></li>
                                            <li className="menu-item"><a href="tour-list-left-sidebar.html">Left
                                                Sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item menu-item-has-children"><a href="tour-3-columns-grid.html">Tour
                                        Header Type</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item"><a href="tour-3-columns-grid.html">Featured
                                                Image</a></li>
                                            <li className="menu-item"><a
                                                href="tour-3-columns-video-header.html">Video</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item menu-item-has-children"><a href="#">Tour Categories</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item"><a href="rural.html">Rural</a></li>
                                            <li className="menu-item"><a href="snow-ice.html">Snow &#038; Ice</a></li>
                                            <li className="menu-item"><a href="wildlife.html">Wildlife</a></li>
                                            <li className="menu-item"><a href="mountain.html">Mountain</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-has-children"><a
                                href="the-new-california.html">Booking</a>
                                <ul className="sub-menu">
                                    <li className="menu-item menu-item-has-children"><a href="#">Online Payment for
                                        Booking</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item"><a href="grand-switzerland.html">Variable Tour
                                                Pricing</a></li>
                                            <li className="menu-item"><a href="swiss-alps-trip.html">Simple Tour
                                                Pricing</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item menu-item-has-children"><a href="#">Custom Booking Form</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item"><a href="the-new-california.html">Booking Form +
                                                Sub Tour Date</a></li>
                                            <li className="menu-item"><a href="niko-trip.html">Booking Form + Custom
                                                Date</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item menu-item-has-children"><a href="#">Tour Durations</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item"><a href="hong-kong.html">Single Day Tour</a></li>
                                            <li className="menu-item"><a href="grand-switzerland.html">Multiple Days
                                                Tour</a></li>
                                        </ul>
                                    </li>

                                </ul>
                            </li>
                            <li className="menu-item menu-item-has-children"><a href="#">Destinations</a>
                                <ul className="sub-menu">
                                    <li className="menu-item"><a href="destination-fullwidth.html">Destination
                                        Fullwidth</a></li>
                                    <li className="menu-item"><a href="destination-video-header.html">Destination +
                                        Video Header</a></li>
                                    <li className="menu-item"><a href="destination-right-sidebar.html">Destination Right
                                        Sidebar</a></li>
                                    <li className="menu-item"><a href="destination-left-sidebar.html">Destination Left
                                        Sidebar</a></li>
                                    <li className="menu-item"><a href="venice.html">Single Destination</a></li>
                                    <li className="menu-item"><a href="paris.html">Single Destination + Video</a></li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-has-children"><a href="#">Pages</a>
                                <ul className="sub-menu">
                                    <li className="menu-item"><a href="about-us.html">About Us</a></li>
                                    <li className="menu-item"><a href="contact-us.html">Contact Us</a></li>
                                    <li className="menu-item"><a href="faqs.html">FAQs</a></li>
                                    <li className="menu-item"><a href="gallery.html">Gallery</a></li>
                                    <li className="menu-item"><a href="page-fullwidth.html">Page Fullwidth</a></li>
                                    <li className="menu-item"><a href="page-video-header.html">Page + Video Background
                                        Header</a></li>
                                    <li className="menu-item"><a href="page-right-sidebar.html">Page Right Sidebar</a>
                                    </li>
                                    <li className="menu-item"><a href="page-left-sidebar.html">Page Left Sidebar</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-has-children"><a href="#">Blog</a>
                                <ul className="sub-menu">
                                    <li className="menu-item"><a href="blog-right-sidebar.html">Blog Right Sidebar</a>
                                    </li>
                                    <li className="menu-item"><a href="blog-left-sidebar.html">Blog Left Sidebar</a>
                                    </li>
                                    <li className="menu-item"><a href="blog-fullwidth.html">Blog Fullwidth</a></li>
                                    <li className="menu-item"><a href="blog-grid-right-sidebar.html">Blog Grid Right
                                        Sidebar</a></li>
                                    <li className="menu-item"><a href="blog-grid-left-sidebar.html">Blog Grid Left
                                        Sidebar</a></li>
                                    <li className="menu-item"><a href="blog-grid-fullwidth.html">Blog Grid Fullwidth</a>
                                    </li>
                                    <li className="menu-item"><a href="blog-full-grid-right-sidebar.html">Blog Full +
                                        Grid Right Sidebar</a></li>
                                    <li className="menu-item"><a href="blog-full-grid-left-sidebar.html">Blog Full +
                                        Grid Left Sidebar</a></li>
                                    <li className="menu-item"><a href="blog-full-grid-fullwidth.html">Blog Full + Grid
                                        Fullwidth</a></li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-has-children"><a href="#">Shortcodes</a>
                                <ul className="sub-menu">
                                    <li className="menu-item"><a
                                        href="accordion-toggles.html">Accordion &#038; Toggles</a></li>
                                    <li className="menu-item"><a href="alert-boxes.html">Alert Boxes</a></li>
                                    <li className="menu-item"><a href="animated-content.html">Animated Content</a></li>
                                    <li className="menu-item"><a href="buttons-social-icons.html">Buttons &#038; Social
                                        Icons</a></li>
                                    <li className="menu-item"><a href="columns.html">Columns</a></li>
                                    <li className="menu-item"><a href="google-maps.html">Google Maps</a></li>
                                    <li className="menu-item"><a href="image-frame-animation.html">Image
                                        Frame &#038; Animation</a></li>
                                    <li className="menu-item"><a href="image-teasers.html">Image Teasers</a></li>
                                    <li className="menu-item"><a href="pricing-tables.html">Pricing Tables</a></li>
                                    <li className="menu-item"><a href="tabs.html">Tabs</a></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                    {/*Begin side menu sidebar  */}
                    <div className="page_content_wrapper">
                        <div className="sidebar_wrapper">
                            <div className="sidebar">

                                <div className="content">

                                    <ul className="sidebar_widget">
                                        <li id="grandtour_tour_posts-10" className="widget Grandtour_Tour_Posts">
                                            <h2 className="widgettitle"></h2>
                                            <div
                                                className="one gallery1 grid static filterable portfolio_type themeborder"
                                            >

                                                <a className="tour_image" href="#"></a>
                                                <div className="portfolio_info_wrapper">
                                                    <div className="tour_price ">
                                                        $3,900
                                                    </div>
                                                    <h5>Swiss Alps Trip</h5>
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
                                                className="one gallery1 grid static filterable portfolio_type themeborder"
                                            >

                                                <a className="tour_image" href="#"></a>
                                                <div className="portfolio_info_wrapper">
                                                    <div className="tour_price has_discount">
                                                <span className="normal_price">
										$4,900									</span> $4,200
                                                    </div>
                                                    <h5>5 Lake of Fuji San</h5>
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
                    {/*End side menu sidebar  */}

                    <div className="social_wrapper">
                        <ul>
                            <li className="facebook"><a target="_blank" href="#"><i
                                className="fa fa-facebook-official"></i></a></li>
                            <li className="twitter"><a target="_blank" href="http://twitter.com/#"><i
                                className="fa fa-twitter"></i></a></li>
                            <li className="youtube"><a target="_blank" title="Youtube" href="#"><i
                                className="fa fa-youtube"></i></a></li>
                            <li className="pinterest"><a target="_blank" title="Pinterest" href="#"><i
                                className="fa fa-pinterest"></i></a></li>
                            <li className="instagram"><a target="_blank" title="Instagram" href="#"><i
                                className="fa fa-instagram"></i></a></li>

                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default MyComponent;
