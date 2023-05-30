import React from 'react';
import {Link} from "react-router-dom";
import NavCom from "./NavCom";
import logo from "../logo_withoutbg.png";

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
                                                <Link to={"/"}>
                                                    <a id="custom_logo" className="logo_wrapper default" href="">
                                                        <img src={logo}
                                                             alt="" width="250px"
                                                             height="30px"/>
                                                    </a> </Link>
                                            </div>
                                        </div>

                                        <div id="logo_transparent" className="logo_container">
                                            <div className="logo_align">
                                                <a id="custom_logo_transparent" className="logo_wrapper hidden"
                                                   href="index.html">

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
