import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import "./signup.css";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const Signup = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    name: "",
    email: "",
    mobile: "",
    village: "",
    aadhar: "",
    password: "",
    confirmpassword: "",
    role: "citizen",
  });

  const handler = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const saveForm = async (e) => {
    e.preventDefault();

    if (state.password !== state.confirmpassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      // console.log(state);
      const res = await axios.post(`${BASE_URL}/api/sign-up`, state);

      if (res.data.success) {
        toast.success(res.data.message);

        setState({
          name: "",
          email: "",
          mobile: "",
          village: "",
          aadhar: "",
          password: "",
          confirmpassword: "",
        });

        setTimeout(() => {
          navigate("/login");
        }, 1500);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
      console.error(err);
    }
  };

  return (
    <div className="container-fluid signup-page">
      <Toaster position="top-right" />

      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card signup-card">
            <div className="row g-0">
              {/* Left Section */}

              <div className="col-md-5 signup-left">
                <img src="../src/assets/gallery/logo.png" alt="DGPP Logo" />

                <h2>Digital Gram Panchayat</h2>

                <p>
                  Register yourself and access Digital Gram Panchayat services
                  anytime, anywhere.
                </p>
              </div>

              {/* Right Section */}

              <div className="col-md-7 signup-right">
                <h2>Citizen Registration</h2>

                <form onSubmit={saveForm}>
                  <div className="mb-3">
                    <label className="form-label">Register As</label>

                    <select
                      className="form-select"
                      name="role"
                      value={state.role}
                      onChange={handler}
                    >
                      <option value="citizen">Citizen</option>

                      <option value="admin">Panchayat Admin</option>
                    </select>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Full Name</label>

                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={state.name}
                        onChange={handler}
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label">Mobile Number</label>

                      <input
                        type="tel"
                        className="form-control"
                        name="mobile"
                        value={state.mobile}
                        onChange={handler}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email Address</label>

                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={state.email}
                      onChange={handler}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Village Name</label>

                    <input
                      type="text"
                      className="form-control"
                      name="village"
                      value={state.village}
                      onChange={handler}
                      placeholder="Enter Village name"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Aadhaar Number</label>

                    <input
                      type="text"
                      className="form-control"
                      name="aadhar"
                      value={state.aadhar}
                      onChange={handler}
                      placeholder="XXXX XXXX XXXX"
                    />
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Password</label>

                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={state.password}
                        onChange={handler}
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label">Confirm Password</label>

                      <input
                        type="password"
                        className="form-control"
                        name="confirmpassword"
                        value={state.confirmpassword}
                        onChange={handler}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      required
                    />

                    <label className="form-check-label">
                      I agree to the Terms & Conditions and Privacy Policy.
                    </label>
                  </div>

                  <button type="submit" className="btn-register">
                    Create Account
                  </button>

                  <div className="text-center mt-4">
                    Already have an account?
                    <Link to="/login" className="login-link ms-2">
                      Login
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
