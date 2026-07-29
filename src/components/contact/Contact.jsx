import React, { useState } from "react";
import "./contact.css";
import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const Contact = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    mobile: "",
    village: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setContactData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BASE_URL}/api/contact`, contactData);

      console.log("Response:", response.data);

      toast.success("Message sent successfully!", {
        duration: 3000,
        position: "top-right",
      });

      setContactData({
        name: "",
        email: "",
        mobile: "",
        village: "",
        message: "",
      });
    } catch (error) {
      console.log("Contact Error:", error);

      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="heading">
          <h1>Contact Us</h1>

          <p>
            We'd love to hear from you. Contact the Gram Panchayat Office for
            any assistance, suggestions, or complaints.
          </p>
        </div>

        <div className="row">
          {/* Contact Form */}

          <div className="col-lg-7">
            <div className="contact-card">
              <h3 className="text-success mb-4">Send us a Message</h3>

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Full Name</label>

                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={contactData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Mobile Number</label>

                    <input
                      type="tel"
                      className="form-control"
                      name="mobile"
                      value={contactData.mobile}
                      onChange={handleChange}
                      placeholder="Enter mobile number"
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
                    value={contactData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Village</label>

                  <input
                    type="text"
                    className="form-control"
                    name="village"
                    value={contactData.village}
                    onChange={handleChange}
                    placeholder="Enter Village"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Message</label>

                  <textarea
                    rows="5"
                    className="form-control"
                    name="message"
                    value={contactData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    required
                  />
                </div>

                <button type="submit" className="btn btn-success px-5">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}

          <div className="col-lg-5">
            <div className="info-card">
              <h3>Contact Information</h3>

              <p>
                <i className="bi bi-geo-alt-fill"></i>
                <br />
                📍Location:
                <br />
                Gram Panchayat Office,
                <br />
                Village Rampur, Block XYZ,
                <br />
                District Lucknow, Uttar Pradesh
                <br />
                <br />
                ☎ : +91 9302380687
                <br />✉ Gmail : support@digitalgram.in
                <br />
                <br />
                🕒 Office Timing
                <br />
                Monday - Saturday
                <br />
                10:00 AM - 5:00 PM
              </p>

              
            </div>

            <div className="info-card mt-4">
              <h3>Emergency Numbers</h3>

              <p>🚓 Police : 112</p>
              <p>🚑 Ambulance : 108</p>
              <p>🔥 Fire Brigade : 101</p>
              <p>☎ Panchayat Helpline : 1800-123-456</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
