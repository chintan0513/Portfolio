import React from "react";
import "../styles/certifications.css";

const certifications = [
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/c070c518985c454d8d4fa266dba77a53",
  },
  {
    title: "AWS Developer Associate",
    issuer: "Amazon Web Services",
    link: "https://www.credly.com/badges/your-badge-link",
  },
  {
    title: "Foundations of Project Management",
    issuer: "Google",
    link: "https://www.coursera.org/account/accomplishments/certificate/HPHS5YRPAN63",
  },
  {
    title: "Docker Essentials",
    issuer: "Udemy",
    link: "https://www.udemy.com/certificate/UC-22cebea1-1dbc-45c4-bed4-ca8f00f6890e/",
  },
  {
    title: "Terraform Fundamentals",
    issuer: "Udemy",
    link: "https://www.udemy.com/certificate/UC-ca3f5ed1-bfa7-4791-819b-fe79f732d93c/",
  },
  {
    title: "SAS Programming BASE Certifications for Professional",
    issuer: "Udemy",
    link: "https://www.udemy.com/certificate/UC-f47bab57-1775-4a37-aa0c-7cfc360a54ac/",
  },
];

const Certifications = () => {
  return (
    <div className="certifications" id="certifications">
      <h1 className="h1">Certifications</h1>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-card"
            key={index}
          >
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
