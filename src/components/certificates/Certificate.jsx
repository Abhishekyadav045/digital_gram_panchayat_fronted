import React from "react";
import "./certificate.css";
import { Link } from "react-router-dom";

const certificates = [
  {
    icon: "👶",
    title: "Birth Certificate",
    description: "Register and apply for a Birth Certificate online.",
    path: "/birth_certificate",
    internal: true,
  },
  {
    icon: "📄",
    title: "Death Certificate",
    description: "Apply for a Death Certificate issued by the Gram Panchayat.",
    path: "/death_certificate",
    internal: true,
  },
  {
    icon: "💰",
    title: "Income Certificate",
    description:
      "Apply online for an Income Certificate for official purposes.",
    path: "https://edistrict.up.gov.in/edistrictup/",
    internal: false,
  },
  {
    icon: "🏠",
    title: "Residence Certificate",
    description: "Get your Residence/Domicile Certificate online.",
    path: "https://edistrict.up.gov.in/edistrictup/",
    internal: false,
  },
  {
    icon: "🪪",
    title: "Caste Certificate",
    description: "Apply for SC/ST/OBC Caste Certificate.",
    path: "https://edistrict.up.gov.in/edistrictup/",
    internal: false,
  },
  {
    icon: "📑",
    title: "Character Certificate",
    description:
      "Apply for Character Certificate required for education and jobs.",
    path: "https://uppolice.gov.in/",
    internal: false,
  },
  {
    icon: "💍",
    title: "Marriage Certificate",
    description: "Apply for an official Marriage Registration Certificate.",
    path: "https://igrsup.gov.in/igrsup/userMarriageRegistration",
    internal: false,
  },
  {
    icon: "♿",
    title: "Disability Certificate",
    description: "Apply for a Disability Certificate for government benefits.",
    path: "https://swavlambancard.gov.in/",
    internal: false,
  },
];

export const Certificate = () => {
  return (
    <section className="certificate-section py-5">
      <div className="container">
        {/* Heading */}
        <div className="heading text-center mb-5">
          <h1 className="fw-bold text-success">Certificate Services</h1>

          <p className="text-muted">
            Apply online for various government certificates quickly and
            securely through the Digital Gram Panchayat Portal.
          </p>
        </div>

        {/* Certificate Cards */}
        <div className="row g-4">
          {certificates.map((certificate, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="certificate-card shadow h-100 text-center p-4 rounded">
                <div className="icon mb-3" style={{ fontSize: "50px" }}>
                  {certificate.icon}
                </div>

                <h4>{certificate.title}</h4>

                <p>{certificate.description}</p>

                {certificate.internal ? (
                  <Link to={certificate.path} className="btn btn-success mt-3">
                    Apply
                  </Link>
                ) : (
                  <a
                    href={certificate.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success mt-3"
                  >
                    Apply
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
