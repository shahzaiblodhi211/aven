"use client";
import React from 'react';

const cards = [
  {
    icon: 'fas fa-chart-line',
    title: 'Bookkeeping Management',
    desc: `Aven manages your bookkeeping on an ongoing basis—tracking income, expenses, reconciliations, and monthly reports with consistency and accuracy. Your books stay current, organized, and decision-ready without the overhead of an in-house accounts team.`,
    cta: 'View Bookkeeping',
  },
  {
    icon: 'fas fa-laptop-code',
    title: 'Accounting Software & ERP Implementation',
    desc: `We implement and support modern accounting software and ERP systems based on your business size and complexity. From QuickBooks and Zoho Books to Microsoft Dynamics 365, Oracle, and SAP—we handle setup, migration, and system alignment for reliable bookkeeping.`,
    cta: 'See Tech',
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'Compliance & Financial Support',
    desc: `Accurate books are the first step to compliance. We support company registration, payroll coordination, tax return preparation, and compliance readiness—always grounded in clean, well-maintained financial records.`,
    cta: 'Secure Business',
  },
];

export default function MonetaServices() {
  function handleCardClick() {
    if (typeof window !== 'undefined') {
      const el = document.getElementById('services');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const card = e.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  }

  function handleMouseLeave(e: React.MouseEvent<HTMLElement>) {
    const card = e.currentTarget as HTMLElement;
    card.style.setProperty('--mouse-x', `50%`);
    card.style.setProperty('--mouse-y', `50%`);
  }

  return (
    <section className="branded-services-section" id="interactiveServices">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle" style={{ color: 'var(--secondary-green)' }}>
            Our Core Expertise
          </span>
          <h2 style={{ color: 'white' }}>Bookkeeping Systems for Modern Businesses</h2>
        </div>

        <div className="moneta-grid">
          {cards.map((c) => (
            <div
              key={c.title}
              className="moneta-card"
              onClick={handleCardClick}
              role="button"
              tabIndex={0}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="mc-content">
                <div className="mc-icon">
                  <i className={c.icon} aria-hidden="true"></i>
                </div>
                <h3 className="mc-title">{c.title}</h3>
                <p className="mc-desc">{c.desc}</p>
                <span className="mc-link">{c.cta} <i className="fas fa-arrow-right" /></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
