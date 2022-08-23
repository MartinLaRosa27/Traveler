import React from "react";
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import { AboutUs } from "./AboutUs.jsx";
import { Contact } from "./Contact.jsx";
import { Main } from "./Main.jsx";

export const Header = () => {
  return (
    <BrowserRouter>
      <nav id="header" className="container-fluid">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <NavLink to="/" className="nav-link active" aria-current="page">
              main
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about-us"
              className="nav-link active"
              aria-current="page"
            >
              About us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              className="nav-link active"
              aria-current="page"
            >
              contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route
          path="*"
          element={<h1 className="container">ERROR 404</h1>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
