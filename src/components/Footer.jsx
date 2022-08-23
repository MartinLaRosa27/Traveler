import React from "react";
import { FaTiktok, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="redes-footer">
        <p>
          <FaTiktok />
        </p>
        <p>
          <FaYoutube />
        </p>
        <p>
          <FaFacebook />
        </p>
        <p>
          <FaTwitter />
        </p>
      </div>
      <div className="nombre-footer">
        <p>Martín Gabriel La Rosa - 23/08/2022</p>
      </div>
    </footer>
  );
};
