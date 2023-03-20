import React from 'react';
import {Link} from "react-router-dom";
import NavCom from "./NavCom";

const Nav = () => {
    return (
        <React.Fragment>
            <div id="wrapper" className=" ">

                <div className="header_style_wrapper scroll scroll_up">
                    <div className="top_bar scroll scroll_up ">
                        <div className="standard_wrapper">
                            <div id="logo_wrapper">
                                <div id="menu_wrapper">
                                    <div id="nav_wrapper">
                                        <div id="logo_normal" className="logo_container">
                                            <div className="logo_align">
                                                <a id="custom_logo" className="logo_wrapper default" href="index.html">
                                                    <img src="assets/upload/logo@2x.png" alt="" width="92" height="22"/>
                                                </a>
                                            </div>
                                        </div>

                                        <div id="logo_transparent" className="logo_container">
                                            <div className="logo_align">
                                                <a id="custom_logo_transparent" className="logo_wrapper hidden"
                                                   href="index.html">
                                                    <img src="assets/upload/logo@2x_white.png" alt="" width="92"
                                                         height="22"/>
                                                </a>
                                            </div>
                                        </div>
                                        <NavCom/>
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

export default Nav;
