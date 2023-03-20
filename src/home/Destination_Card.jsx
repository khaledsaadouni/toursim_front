import React from 'react';
import image7 from "./image7.jpg";

const MyComponent = (props) => {
    return (
        <div>
            <div className="one_fourth gallery4 grid static filterable portfolio_type themeborder"
                 style={{
                     backgroundImage: `url(${image7})`,
                     boxShadow: '0px 0px 10px 5px rgba(0, 0, 0, 0.3)',
                     borderRadius: "5px"
                 }}>
                <a className="tour_image" href="#"></a>
                <div className="portfolio_info_wrapper">
                    <div className="portfolio_info_content">
                        <h3>{props.name}</h3></div>
                </div>
            </div>
        </div>
    );
};

export default MyComponent;
