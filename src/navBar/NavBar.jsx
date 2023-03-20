import React from 'react';
import {Link} from "react-router-dom";
import './Navbar.css';
import NavCom from "./NavCom";

const MyComponent = () => {
    return (
        <React.Fragment>

            <div className="header_style_wrapper">


                <div className="top_bar hasbg">
                    <div className="standard_wrapper">
                        {/*Begin logo */}
                        <div id="logo_wrapper">


                            <div id="menu_wrapper">
                                <div id="nav_wrapper">

                                    <div id="logo_transparent" className="logo_container">
                                        <div className="logo_align">
                                            <a id="custom_logo_transparent" className="logo_wrapper default" href="">
                                                <img src={`${process.env.PUBLIC_URL}/assets/upload/logo@2x_white.png`}
                                                     alt="" width="92"
                                                     height="22"/>
                                            </a>
                                        </div>
                                    </div>
                                    {/*End logo  */}
                                    <NavCom/>
                                </div>
                                {/*End main nav */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default MyComponent;
