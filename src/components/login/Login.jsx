import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import "./login.css";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const Login = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handler = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const loginForm = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${BASE_URL}/api/login`, login);

      if (res.data.success) {
        localStorage.setItem("authToken", res.data.token);

        // User details save
        localStorage.setItem("user", JSON.stringify(res.data.user));

        toast.success("Login Successful!");
        localStorage.setItem("token", res.data.token);

        localStorage.setItem("role", res.data.role);

        setTimeout(() => {
          if (res.data.user.role === "admin") {
            navigate("/admin-dashboard");
          } else {
            navigate("/");
          }
        }, 1000);
      }
    } catch (err) {
      console.log(err);

      if (err.response) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Server is not running");
      }
    }
  };

  return (
    <div className="login-page">
      <Toaster position="top-right" />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="login-card">
              <div className="row g-0">
                {/* Left Side */}

                <div className="col-md-5 login-left">
                  <img src="../src/assets/gallery/logo.png" alt="DGPP Logo" />

                  <h2>Digital Gram Panchayat</h2>

                  <p>
                    Welcome back! Login to access all Digital Gram Panchayat
                    services and government facilities.
                  </p>
                </div>

                {/* Right Side */}

                <div className="col-md-7 login-right">
                  <h2>Citizen Login</h2>

                  <form onSubmit={loginForm}>
                    <div className="mb-4">
                      <label className="form-label">Email Address</label>

                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email"
                        name="email"
                        value={login.email}
                        onChange={handler}
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="form-label">Password</label>

                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Password"
                        name="password"
                        value={login.password}
                        onChange={handler}
                        required
                      />
                    </div>

                    <button type="submit" className="btn-login">
                      Login
                    </button>

                    <div className="text-center mt-4">
                      Don't have an account?
                      <Link to="/sign-up" className="signup-link ms-2">
                        Sign Up
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
