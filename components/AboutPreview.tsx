"use client";
import React from 'react';

export default function AboutPreview() {
  return (
    <section className="section-padding about-preview-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">About Us</span>
          <h2>Architects of Financial Clarity</h2>
        </div>

        <div className="about-grid">
          <div className="about-img-wrapper">
            <img src="/about.png" alt="Aven Consulting" />
          </div>

          <div className="about-content">
            <h3>Expertise meets Technology</h3>
            <p>
              Aven operates as a virtual accounts department for businesses in the United States and the
              United Kingdom.
              <br />
              <br />
              We help companies set up the right accounting systems, manage day-to-day bookkeeping, and
              maintain accurate financial records—so owners and operators always know where their business
              stands.
              <br />
              <br />
              By combining accounting expertise with modern financial software, we bring structure,
              consistency, and accountability to your books—without the overhead of hiring an in-house team.
            </p>

            <div style={{ marginTop: 18 }}>
              <button
                className="btn-secondary"
              >
                Meet The Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
