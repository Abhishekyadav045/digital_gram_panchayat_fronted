import React from "react";
import "./scheme.css";

const schemes = [
  {
    icon: "🏠",
    title: "PM Awas Yojana",
    description:
      "Financial assistance for construction of permanent houses for eligible rural families.",
    link: "https://pmayg.dord.gov.in/netiayHome/Home.aspx",
  },
  {
    icon: "🌾",
    title: "PM Kisan Samman Nidhi",
    description: "₹6,000 annual financial support to eligible farmers.",
    link: "https://pmkisan.gov.in/",
  },
  {
    icon: "🏥",
    title: "Ayushman Bharat",
    description:
      "Free health insurance coverage up to ₹5 lakh for eligible families.",
    link: "https://pmjay.gov.in/",
  },
  {
    icon: "👨‍🌾",
    title: "MGNREGA",
    description: "Provides guaranteed wage employment to rural households.",
    link: "https://nrega.nic.in/",
  },
  {
    icon: "♻️",
    title: "Swachh Bharat Mission",
    description:
      "Promotes sanitation, cleanliness and construction of household toilets.",
    link: "https://swachhbharatmission.ddws.gov.in/",
  },
  {
    icon: "🔥",
    title: "PM Ujjwala Yojana",
    description:
      "Free LPG gas connections for eligible women from poor households.",
    link: "https://www.pmuy.gov.in/",
  },
  {
    icon: "🎓",
    title: "National Scholarship Portal",
    description: "Scholarship schemes for school and college students.",
    link: "https://scholarships.gov.in/",
  },
  {
    icon: "🏦",
    title: "PM Jan Dhan Yojana",
    description:
      "Open zero balance bank accounts with insurance and banking benefits.",
    link: "https://pmjdy.gov.in/",
  },
  {
    icon: "💊",
    title: "PM Jan Aushadhi Yojana",
    description:
      "Affordable quality generic medicines through Jan Aushadhi Kendras.",
    link: "https://janaushadhi.gov.in/",
  },
];

export const Scheme = () => {
  return (
    <section className="scheme-section py-5">
      <div className="container">
        <div className="heading text-center mb-5">
          <h1 className="fw-bold text-success">Government Schemes</h1>

          <p className="text-muted">
            Explore various Central and State Government welfare schemes
            available for citizens of the Digital Gram Panchayat.
          </p>
        </div>

        <div className="row g-4">
          {schemes.map((item, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="scheme-card shadow border-0 rounded-4 h-100 p-4 text-center">
                <div
                  className="mx-auto mb-3 d-flex justify-content-center align-items-center rounded-circle bg-success text-white"
                  style={{
                    width: "85px",
                    height: "85px",
                    fontSize: "40px",
                  }}
                >
                  {item.icon}
                </div>

                <h4 className="fw-bold">{item.title}</h4>

                <p className="text-muted">{item.description}</p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success mt-auto"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}