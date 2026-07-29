import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-success text-white pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          {/* About */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold">Digital Gram Panchayat</h4>
            <p className="mt-3">
              Empowering villages through digital governance by providing
              transparent, efficient, and citizen-centric online services.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled mt-3">
              <li>
                <Link to="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white text-decoration-none"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/government-schemes"
                  className="text-white text-decoration-none"
                >
                  Schemes
                </Link>
              </li>
              <li>
                <Link
                  to="/complaints"
                  className="text-white text-decoration-none"
                >
                  Complaints
                </Link>
              </li>
            </ul>
          </div>

          {/* Citizen Services */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Citizen Services</h5>
            <ul className="list-unstyled mt-3">
              <li>Birth Certificate</li>
              <li>Death Certificate</li>
              <li>Property Tax</li>
              <li>Water Bill</li>
              <li>Pension Services</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Contact Us</h5>

            <p className="mb-2">📍 Gram Panchayat Office</p>

            <p className="mb-2">📞 +91 9302380687</p>

            <p className="mb-2">✉️ support@digitalgram.in</p>

            <div className="mt-3">
              <a href="#" className="text-white me-3 fs-4">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="#" className="text-white me-3 fs-4">
                <i className="bi bi-twitter-x"></i>
              </a>

              <a href="#" className="text-white me-3 fs-4">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#" className="text-white fs-4">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-light" />

        <div className="text-center">
          <p className="mb-0">
            © {new Date().getFullYear()} Digital Gram Panchayat Portal | All
            Rights Reserved | Developed with ❤️ for Digital India
          </p>
        </div>
      </div>
    </footer>
  );
};
