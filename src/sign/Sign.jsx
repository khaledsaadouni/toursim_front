import React from 'react';
import image from "../home/image7.jpg"
import {useParams} from "react-router-dom";
import In from "./In";
import Up from "./Up";

const Sign = () => {

    const {p} = useParams();
    const show = () => {
        switch (p) {
            case "in":
                return <In/>;
            case "up":
                return <Up/>;
            default:
                return <In/>;

        }
    };
    return (
        <React.Fragment>


            <main className="main-content  mt-0">
                <div className="page-header align-items-start min-vh-100"
                     style={{backgroundImage: `url(${image})`}}>
                    <span className="mask bg-gradient-dark opacity-6"></span>
                    {show()}
                </div>

            </main>


        </React.Fragment>
    );
};

export default Sign;
