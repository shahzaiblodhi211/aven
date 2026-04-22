"use client";
import React from 'react';

export default function MonetaServices() {
  return (
    <section className="branded-services-section" id="interactiveServices">
      <div className="container">
        <div className="moneta-design-grid">
          <div className="moneta-col moneta-col-left">
            <div className="moneta-analytics-card">
              <img src="/moneta-analytic-updated.png" alt="Advanced analytics" />
            </div>
            <div className="moneta-message-card">
              <img src="/moneta-job-updated.png" alt="Your job is to grow business" />
            </div>
          </div>

          <div className="moneta-col moneta-col-center">
            <div className="moneta-folder-card">
              <img src="/moneta-folder-updated.png" alt="Aven finance folder" />
            </div>
          </div>

          <div className="moneta-col moneta-col-right">
            <div className="moneta-clarity-card">
              <img src="/moneta-diamond-updated.png" alt="Clarity in everyday finance" />
            </div>
            <div className="moneta-system-card">
              <img src="/moneta-system-updated.png" alt="System setup that fits the business" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
