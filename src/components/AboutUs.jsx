import React from "react";
import airport from "../img/airport.png";
import { Helmet } from "react-helmet";

export const AboutUs = () => {
  return (
    <div className="container about-us">
      {/* TITLE */}
      <Helmet>
        <title>About Us | Traveler Web</title>
      </Helmet>
      <div className="row">
        {/* INFORMACION */}
        <div className="col informacion-about-us">
          <h1>Our Team</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
            <strong>
              sed do eiusmod tempor incididunt ut labore et dolore magna
            </strong>{" "}
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor{" "}
            <strong>in voluptate velit esse cillum dolore eu fugiat</strong> in
            reprehenderit nulla pariatur.
          </p>
        </div>
        {/* IMG */}
        <div className="col img-aboutus">
          <img
            className="card-img-top"
            src={airport}
            alt="Airport"
            title="Airport 2019"
          ></img>
        </div>
        <p className="extra-aboutus">
          Follow us on our social networks to obtain the best benefits
        </p>
      </div>
    </div>
  );
};
