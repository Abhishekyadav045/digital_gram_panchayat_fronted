import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Check login status
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const loggedUser = JSON.parse(localStorage.getItem("user"));

    setIsLoggedIn(!!token);

    if (loggedUser) {
      setUser(loggedUser);
    }
  }, [location]);

  // Logout
  //   const handleLogout = () => {
  //     localStorage.removeItem("authToken");
  //     setIsLoggedIn(false);
  //     toast.success("Logout Successful!");

  //     setTimeout(() => {
  //       navigate("/login");
  //     }, 1000);
  //   };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");

    setIsLoggedIn(false);

    toast.success("Logout Successful!");

    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow sticky-top">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="../src/assets/gallery/logo.png"
            alt="Logo"
            width="50"
            height="50"
            className="rounded-circle me-2 bg-white p-1"
          />

          <div>
            <h5 className="mb-0 fw-bold">Digital Gram Panchayat</h5>

            <small className="text-light">Smart Village • Digital India</small>
          </div>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/citizen-services">
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/government-schemes">
                Government Schemes
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/certificate">
                Certificates
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/complaints">
                Complaints
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>

            <li className="nav-item ms-lg-3">
              {isLoggedIn ? (
                <div className="dropdown">
                  <button
                    className="btn btn-success border-danger border-3 dropdown-toggle rounded-pill px-4"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-person-circle me-2"></i>

                    {user
                      ? user.name.replace(/\b\w/g, (char) => char.toUpperCase())
                      : "My Account"}
                  </button>

                  <ul className="dropdown-menu dropdown-menu-end shadow">
                    <li>
                      <Link className="dropdown-item" to="/my-profile">
                        <i className="bi bi-person me-2"></i>
                        My Profile
                      </Link>
                    </li>

                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <button
                        className="dropdown-item text-danger"
                        onClick={handleLogout}
                      >
                        <i className="bi bi-box-arrow-right me-2"></i>
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="d-flex gap-2">
                  <Link to="/login" className="btn btn-warning fw-bold px-4">
                    Login
                  </Link>

                  <Link to="/sign-up" className="btn btn-info fw-bold px-4">
                    Sign Up
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
