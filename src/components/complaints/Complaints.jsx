import React, { useState } from "react";
import "./complaint.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const Complaints = () => {
  const [complaintData, setComplaintData] = useState({
    name: "",
    email: "",
    mobile: "",
    village: "",
    category: "",
    complaindetails: "",
    image: "null",
  });

  const handler = (e) => {
    const { name, value } = e.target;

    setComplaintData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const complaintform = async (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      toast.error("Please login first.");
      return;
    }

    try {
      const formData = new FormData();

      formData.append("name", complaintData.name);
      formData.append("email", complaintData.email);
      formData.append("mobile", complaintData.mobile);
      formData.append("village", complaintData.village);
      formData.append("category", complaintData.category);
      formData.append("complaindetails", complaintData.complaindetails);
      formData.append("userId", user._id);
      formData.append("image", complaintData.image);
    

      const res = await axios.post(`${BASE_URL}/api/complaints`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        toast.success(res.data.message);

        // Reset Form
        setComplaintData({
          name: "",
          email: "",
          mobile: "",
          village: "",
          category: "",
          complaindetails: "",
          image: "",
        });
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong!");
    }
  };

  return (
    <>
      <Toaster position="top-right" />

      <section className="complaint-section py-5">
        <div className="container">
          <div className="heading text-center mb-4">
            <h1>Complaint Portal</h1>

            <p>
              Register your complaint online and help us improve your village.
              Your complaint will be forwarded to the concerned department.
            </p>
          </div>

          <div className="row">
            <div className="col-12 mb-3">
              <Link to="/my-complaints" className="btn btn-outline-success">
                📋 My Complaints
              </Link>
            </div>

            {/* Complaint Form */}

            <div className="col-lg-8">
              <div className="card shadow-lg border-0 p-4">
                <h3 className="text-success mb-4">Register Complaint</h3>

                <form onSubmit={complaintform}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Full Name</label>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                        name="name"
                        value={complaintData.name}
                        onChange={handler}
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label">Mobile Number</label>

                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Enter mobile number"
                        name="mobile"
                        value={complaintData.mobile}
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
                      placeholder="Enter email"
                      name="email"
                      value={complaintData.email}
                      onChange={handler}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Village Name</label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter village name"
                      name="village"
                      value={complaintData.village}
                      onChange={handler}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Complaint Category</label>

                    <select
                      className="form-select"
                      name="category"
                      value={complaintData.category}
                      onChange={handler}
                      required
                    >
                      <option value="">Select Category</option>
                      <option value="Road">Road</option>
                      <option value="Water Supply">Water Supply</option>
                      <option value="Electricity">Electricity</option>
                      <option value="Drainage">Drainage</option>
                      <option value="Sanitation">Sanitation</option>
                      <option value="Street Light">Street Light</option>
                      <option value="Government Scheme">
                        Government Scheme
                      </option>
                      <option value="Others">Others</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Complaint Details</label>

                    <textarea
                      rows="5"
                      className="form-control"
                      placeholder="Describe your complaint..."
                      name="complaindetails"
                      value={complaintData.complaindetails}
                      onChange={handler}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label">
                      Upload Image (Optional)
                    </label>

                    <input
                      type="file"
                      className="form-control"
                      accept="image/*"
                      onChange={(e) =>
                        setComplaintData({
                          ...complaintData,
                          image: e.target.files[0],
                        })
                      }
                    />

                    <small className="text-muted">
                      Image upload will work after configuring Multer in the
                      backend.
                    </small>
                  </div>

                  <button type="submit" className="btn btn-success px-5">
                    Submit Complaint
                  </button>
                </form>
              </div>
            </div>

            {/* Right Side */}

            <div className="col-lg-4">
              <div className="info-card">
                <h4>Complaint Guidelines</h4>

                <ul>
                  <li>✔ Enter correct personal details.</li>
                  <li>✔ Select the correct complaint category.</li>
                  <li>✔ Attach an image if available.</li>
                  <li>✔ Complaint ID will be generated after submission.</li>
                  <li>✔ Track complaint status online.</li>
                </ul>
              </div>

              <div className="info-card mt-4">
                <h4>Emergency Contacts</h4>

                <p>📞 Panchayat Office : 1800-123-456</p>
                <p>🚓 Police : 112</p>
                <p>🚑 Ambulance : 108</p>
                <p>🔥 Fire : 101</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
