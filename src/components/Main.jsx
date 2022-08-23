import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Helmet } from "react-helmet";
import tour1 from "../img/tour1.png";
import tour2 from "../img/tour2.png";
import tour3 from "../img/tour3.png";
import tour4 from "../img/tour4.png";

export const Main = () => {
  return (
    <>
      {/* TITLE */}
      <Helmet>
        <title>Traveler Web</title>
      </Helmet>
      {/* MAIN */}
      <main id="main">
        <div>
          <h1>your next trip</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut <span>labore et dolore magna</span>{" "}
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </main>

      {/* CAROUSEL */}
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner carousel-main container">
          <div className="carousel-item active">
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
            <h3>
              More detailed <AiOutlineArrowRight />
            </h3>
          </div>
          <div className="carousel-item">
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <h3>
              More detailed <AiOutlineArrowRight />
            </h3>
          </div>
          <div className="carousel-item">
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <h3>
              More detailed <AiOutlineArrowRight />
            </h3>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* POPULAR-TOURS */}
      <div className="popular-tours">
        <div className="container">
          <div className="lista-lugares">
            {/* TOOR 1 */}
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={tour1}
                alt="TOUR 1"
                title="TOUR 1"
              ></img>
              <p>TOUR 1</p>
            </div>
            {/* TOUR 2 */}
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={tour2}
                alt="TOUR 2"
                title="TOUR 2"
              ></img>
              <p>TOUR 2</p>
            </div>
            {/* TOUR 3 */}
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={tour3}
                alt="TOUR 3"
                title="TOUR 3"
              ></img>
              <p>TOUR 3</p>
            </div>
            {/* TOUR 4 */}
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={tour4}
                alt="TOUR 4"
                title="TOUR 4"
              ></img>
              <p>TOUR 4</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
