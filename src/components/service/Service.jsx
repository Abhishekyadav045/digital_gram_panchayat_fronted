import React from "react";
import { Link } from "react-router-dom";
import "./service.css";

const categories = [
  {
    icon: "📄",
    title: "Certificates",
    description: "Birth, Death, Residence, Income and other certificates.",
    path: "/certificate",
  },
  {
    icon: "🏛",
    title: "Government Schemes",
    description: "Apply for PMAY, PM-Kisan, Pension and other schemes.",
    path: "/government-schemes",
  },
  {
    icon: "📝",
    title: "Complaints",
    description: "Register complaints and track their status online.",
    path: "/complaints",
  },
  {
    icon: "🏥",
    title: "Health",
    description: "Health camps, vaccination, PHC appointments and more.",
    path: "/health",
  },
  {
    icon: "🌾",
    title: "Agriculture",
    description: "Crop advisory, subsidies, irrigation and soil testing.",
    path: "/agriculture",
  },
  {
    icon: "💼",
    title: "Employment",
    description: "MGNREGA, local jobs and skill development programs.",
    path: "/employment",
  },
];

export const Services = () => {
  return (
    <section className="services-section">
      <div className="container">
        <div className="services-heading">
          <h1>Citizen Services</h1>
          <p>Select a service category to continue.</p>
        </div>

        <div className="row g-4">
          {categories.map((item, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="service-card">
                <div className="service-icon">{item.icon}</div>

                <h4>{item.title}</h4>

                <p>{item.description}</p>

                <Link to={item.path} className="service-btn">
                  Explore →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}