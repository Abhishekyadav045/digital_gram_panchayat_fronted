import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";

const services = [
  { title: "Birth Certificate", icon: "📝", path: "/certificate" },
  { title: "Death Certificate", icon: "📄", path: "/certificate" },
  { title: "Income Certificate", icon: "💰", path: "/certificate" },
  { title: "Residence Certificate", icon: "🏠", path: "/certificate" },
  { title: "Complaint Portal", icon: "📢", path: "/complaints" },
  { title: "Tax Payment", icon: "💳" },
  { title: "Government Schemes", icon: "🏛️" },
  { title: "Health", icon: "🏥", path: "/services" },
];

const schemes = [
  "PM Awas Yojana",
  "PM Kisan Samman Nidhi",
  "Ayushman Bharat",
  "MGNREGA",
];

export const Dashboard = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-success margin_top text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side */}
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold">
                Digital Gram Panchayat Portal
              </h1>

              <p className="lead mt-3">
                Welcome to the Digital Gram Panchayat Portal. Apply for
                certificates, access government schemes, register complaints,
                and stay updated with village development.
              </p>
            </div>

            {/* Right Side Carousel */}
            <div className="col-lg-6">
              <div
                id="carouselExampleInterval"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                {/* Indicators */}
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>

                  <button
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>

                  <button
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>

                {/* Slides */}
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="3000">
                    <img
                      src="../src/assets/gallery/img1.jpeg"
                      className="d-block w-100 rounded"
                      alt="Digital Gram Panchayat"
                      style={{
                        height: "400px",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  <div className="carousel-item" data-bs-interval="3000">
                    <img
                      src="../src/assets/gallery/img2.jpg"
                      className="d-block w-100 rounded"
                      alt="Village Development"
                      style={{
                        height: "400px",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  <div className="carousel-item" data-bs-interval="3000">
                    <img
                      src="../src/assets/gallery/img1.jpeg"
                      className="d-block w-100 rounded"
                      alt="Government Services"
                      style={{
                        height: "400px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>

                {/* Previous Button */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>

                {/* Next Button */}
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container py-5">
        <h2 className="text-center mb-4">About Gram Panchayat</h2>

        <p className="text-center text-muted about1">
          Our mission is to provide transparent, efficient, and digital services
          to every citizen. This portal simplifies certificate applications,
          complaint registration, government scheme information, and village
          development updates. The Digital Gram Panchayat Portal is designed to
          bridge the gap between citizens and local government by making
          essential public services available online. Citizens can apply for
          birth, death, income, and residence certificates, track application
          status, and submit complaints without visiting government offices. We
          are committed to promoting transparency, accountability, and good
          governance through the use of digital technology. Our platform
          provides easy access to important government welfare schemes, health
          services, tax payment facilities, and other citizen-centric services.
          By embracing the vision of Digital India, we aim to create a smarter,
          more connected village where every resident can access government
          services quickly, securely, and conveniently. Together, we strive to
          improve the quality of life, encourage community participation, and
          support sustainable rural development.
        </p>
      </section>

      {/* Services */}
      <section className="container py-5">
        <h2 className="text-center mb-5">Citizen Services</h2>

        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="card text-center shadow h-100">
                <div className="card-body">
                  <h1>{service.icon}</h1>

                  <h5 className="mt-3">{service.title}</h5>

                  <Link to={service.path} className="btn btn-success mt-auto">
                    Apply
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Government Schemes */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Government Schemes</h2>

          <div className="row">
            {schemes.map((scheme, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <div className="card shadow">
                  <div className="card-body text-center">
                    <h5>{scheme}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="container py-5">
        <h2 className="text-center mb-5">Village Statistics</h2>

        <div className="row text-center">
          <div className="col-md-3">
            <h1 className="text-success">12,500+</h1>
            <p>Population</p>
          </div>

          <div className="col-md-3">
            <h1 className="text-success">2,300+</h1>
            <p>Families</p>
          </div>

          <div className="col-md-3">
            <h1 className="text-success">8</h1>
            <p>Schools</p>
          </div>

          <div className="col-md-3">
            <h1 className="text-success">15</h1>
            <p>Development Projects</p>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Latest News</h2>

          <div className="card shadow">
            <div className="card-body">
              <ul>
                <li>Gram Sabha Meeting on 25 August.</li>
                <li>New Road Construction Project Started.</li>
                <li>PM Awas Yojana Applications Open.</li>
                <li>Free Health Camp Next Week.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
