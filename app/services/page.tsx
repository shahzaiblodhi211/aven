'use client';

import Link from 'next/link';
import { useState } from 'react';

const consultationEmail = 'avenbusinessconsulting@gmail.com';
const whatsappHref = 'https://wa.me/923199623082';

const heroLayers = [
  { number: '01', title: 'Bookkeeping', text: 'Current records, organised cleanly.' },
  { number: '02', title: 'Reconciliations', text: 'Accounts aligned with fewer surprises.' },
  { number: '03', title: 'Reporting', text: 'Useful numbers that are easier to review.' },
  { number: '04', title: 'Software Setup', text: 'Tools arranged around the work.' },
  { number: '05', title: 'Accounts Support', text: 'A dependable finance layer behind the team.' },
];

const valueStrip = [
  {
    title: 'Structured Books',
    text: 'Records maintained with consistency and care.',
  },
  {
    title: 'Clear Reporting',
    text: 'Financials that are easier to review and use.',
  },
  {
    title: 'Systems That Fit',
    text: 'Accounting workflows built around your business.',
  },
];

const services = [
  {
    title: 'Bookkeeping Management',
    text: 'We maintain structured bookkeeping so your records stay current, organised, and easier to manage.',
    icon: 'bookkeeping',
  },
  {
    title: 'Account Reconciliations',
    text: 'We reconcile key accounts consistently to improve accuracy, reduce confusion, and keep your records aligned.',
    icon: 'reconciliations',
  },
  {
    title: 'Financial Reporting Support',
    text: 'We prepare clear financial reports that help you review performance, understand trends, and make informed decisions.',
    icon: 'reporting',
  },
  {
    title: 'Accounting Software Setup',
    text: 'We help set up and organise accounting software so it supports your reporting needs and daily financial workflow.',
    icon: 'setup',
  },
  {
    title: 'ERP & Software Support',
    text: 'We support accounting tools such as QuickBooks, Xero, Zoho, Odoo, and Microsoft Dynamics based on business needs.',
    icon: 'systems',
  },
  {
    title: 'Outsourced Accounts Support',
    text: 'Aven works as a dependable outsourced accounts function for businesses that need consistent finance support.',
    icon: 'accounts',
  },
] as const;

const tools = [
  { label: 'QuickBooks', detail: 'Daily bookkeeping and reporting' },
  { label: 'Xero', detail: 'Structured records and clean review cycles' },
  { label: 'Zoho Books', detail: 'Organised accounts for growing teams' },
  { label: 'Odoo', detail: 'Finance workflows that fit operations' },
  { label: 'Microsoft Dynamics 365', detail: 'ERP support for heavier reporting needs' },
  { label: 'Excel Reporting', detail: 'Working files and reporting packs that stay usable' },
];

const process = [
  {
    step: 'Review',
    text: 'We assess your current bookkeeping setup, reporting needs, software use, and financial workflow.',
  },
  {
    step: 'Structure',
    text: 'We define the right process, reporting rhythm, responsibilities, and support scope.',
  },
  {
    step: 'Implement',
    text: 'We organise records, improve system setup, and align workflows with your business operations.',
  },
  {
    step: 'Support',
    text: 'We provide ongoing bookkeeping, reconciliations, reporting, and accounts management on a consistent schedule.',
  },
];

const benefits = [
  {
    title: 'Less Catch-Up Work',
    text: 'Records are maintained consistently instead of being fixed only when something becomes urgent.',
  },
  {
    title: 'Clearer Financial Visibility',
    text: 'Reports become easier to understand, review, and use for business decisions.',
  },
  {
    title: 'Stronger Daily Control',
    text: 'Expenses, records, reconciliations, and reporting stay easier to manage over time.',
  },
  {
    title: 'Better System Use',
    text: 'Your accounting software becomes a working part of the business, not just another tool in the background.',
  },
];

const faqs = [
  {
    question: 'What kind of businesses does Aven support?',
    answer:
      'Aven supports growing businesses that need structured bookkeeping, clearer reporting, accounting software support, and ongoing accounts management.',
  },
  {
    question: 'Can Aven work as an outsourced accounts team?',
    answer:
      'Yes. Aven can support your business as an outsourced accounts function, helping manage bookkeeping, reconciliations, reporting, and finance operations without requiring a full in-house team.',
  },
  {
    question: 'Does Aven help with accounting software setup?',
    answer:
      'Yes. Aven helps businesses set up and organise accounting software so records, workflows, and reports are easier to manage.',
  },
  {
    question: 'Which tools does Aven work with?',
    answer:
      'Aven works with tools such as QuickBooks, Xero, Zoho Books, Odoo, Microsoft Dynamics 365, and Excel-based reporting workflows.',
  },
  {
    question: 'Does Aven provide taxation services?',
    answer:
      'No. Aven focuses on bookkeeping, reconciliations, financial reporting, accounting software support, and ongoing accounts management.',
  },
];

type ServiceIconType = (typeof services)[number]['icon'];

function serviceConsultationHref(serviceTitle: string) {
  return `mailto:${consultationEmail}?subject=${encodeURIComponent(`Book Consultation - ${serviceTitle}`)}`;
}

function ServiceIcon({ type }: { type: ServiceIconType }) {
  switch (type) {
    case 'bookkeeping':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 4.5h10a2 2 0 0 1 2 2V19a1 1 0 0 1-1.6.8L14 18l-2.4 1.8a1 1 0 0 1-1.2 0L8 18l-2.4 1.8A1 1 0 0 1 4 19V6.5a2 2 0 0 1 2-2Z" />
          <path d="M8 8h8M8 11h8M8 14h5" />
        </svg>
      );
    case 'reconciliations':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 8a6 6 0 0 1 8.5-2.2" />
          <path d="M14 4.5h4.5V9" />
          <path d="M18 16a6 6 0 0 1-8.5 2.2" />
          <path d="M10 19.5H5.5V15" />
          <path d="M8.25 12.25 11 15l4.75-5.25" />
        </svg>
      );
    case 'reporting':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 20h16" />
          <path d="M7 16V9" />
          <path d="M12 16V6" />
          <path d="M17 16v-4" />
          <path d="M6 20V4" />
        </svg>
      );
    case 'setup':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 8.2a3.8 3.8 0 1 1 0 7.6 3.8 3.8 0 0 1 0-7.6Z" />
          <path d="M12 3.5v2.1M12 18.4v2.1M4.9 12H7M17 12h2.1M6.1 6.1l1.5 1.5M16.4 16.4l1.5 1.5M17.9 6.1l-1.5 1.5M7.6 16.4l-1.5 1.5" />
        </svg>
      );
    case 'systems':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 7.5h4v4H6zM14 4.5h4v4h-4zM14 14.5h4v4h-4zM6 15.5h4v4H6z" />
          <path d="M10 9.5h4M12 8.5v6M10 17.5h4" />
        </svg>
      );
    case 'accounts':
    default:
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 8.5h10l1.2 3.5H5.8L7 8.5Z" />
          <path d="M6 12h12l-1 7H7l-1-7Z" />
          <path d="M9.2 9.6 12 6.8l2.8 2.8" />
          <path d="M12 13.2v4.2" />
        </svg>
      );
  }
}

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="expertise-page" style={{ paddingTop: 'var(--header-height)' }}>
      <section className="expertise-hero">
        <div className="container expertise-hero-grid">
          <div className="expertise-hero-copy">
            <span className="expertise-eyebrow">EXPERTISE</span>
            <h1>Practical Bookkeeping Expertise for Growing Businesses</h1>
            <p>
              Aven helps businesses keep their financial records organised, current, and easier to manage.
              From bookkeeping and reconciliations to financial reporting and accounting software setup, we
              build finance processes that support daily operations without unnecessary complexity.
            </p>

            <div className="expertise-hero-actions">
              <a className="expertise-btn expertise-btn-primary" href={serviceConsultationHref('General Consultation')}>
                Book Consultation
              </a>
              <a className="expertise-btn expertise-btn-secondary" href="#core-services">
                View Services
              </a>
            </div>
          </div>

          <div className="expertise-hero-visual" aria-label="Finance support stack illustration">
            <div className="expertise-visual-orb expertise-visual-orb-a" />
            <div className="expertise-visual-orb expertise-visual-orb-b" />
            <div className="expertise-visual-frame">
              <div className="expertise-visual-topline">
                <span>Finance support stack</span>
                <span>5 layers</span>
              </div>

              <div className="expertise-visual-stack">
                {heroLayers.map((layer) => (
                  <article className="expertise-stack-card" key={layer.title}>
                    <span className="expertise-stack-number">{layer.number}</span>
                    <div>
                      <h3>{layer.title}</h3>
                      <p>{layer.text}</p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="expertise-visual-summary">
                <strong>Built to support the books, the reporting rhythm, and the people using both.</strong>
                <span>Structured, calm, and clear from setup through ongoing support.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="expertise-strip" aria-label="Key strengths">
        <div className="container expertise-strip-grid">
          {valueStrip.map((item) => (
            <article className="expertise-strip-item" key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="expertise-section expertise-services" id="core-services">
        <div className="container">
          <div className="expertise-section-head">
            <span className="expertise-eyebrow">WHAT WE HELP WITH</span>
            <h2>Core Finance Support, Built Properly</h2>
            <p>
              Aven supports the essential finance work businesses need to stay organised, informed, and in
              control. Every service is designed to make your records clearer, your systems easier to manage,
              and your reporting more useful.
            </p>
          </div>

          <div className="expertise-service-grid">
            {services.map((service, index) => (
              <article className="expertise-service-card" key={service.title}>
                <div className="expertise-service-card-top">
                  <span className="expertise-service-number">0{index + 1}</span>
                  <div className="expertise-service-icon-wrap">
                    <ServiceIcon type={service.icon} />
                  </div>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a className="expertise-service-link" href={serviceConsultationHref(service.title)}>
                  Consult Now <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="expertise-tools-section" id="tools">
        <div className="container expertise-tools-layout">
          <div className="expertise-tools-copy">
            <span className="expertise-eyebrow expertise-eyebrow-light">TOOLS &amp; SYSTEMS</span>
            <h2>Accounting Tools, Set Up to Work Better</h2>
            <p>
              The right accounting software only works when it is structured properly. Aven helps businesses
              set up, organise, and manage accounting systems so records stay cleaner, reports are easier to
              access, and daily finance work becomes smoother.
            </p>
            <strong>The tool matters. The setup matters more.</strong>
          </div>

          <div className="expertise-tools-grid" aria-label="Accounting tools supported by Aven">
            {tools.map((tool) => (
              <article className="expertise-tool-tile" key={tool.label}>
                <span>{tool.label}</span>
                <p>{tool.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="expertise-section expertise-process">
        <div className="container">
          <div className="expertise-section-head expertise-section-head-narrow">
            <span className="expertise-eyebrow">OUR PROCESS</span>
            <h2>How Aven Works</h2>
            <p>
              We start by understanding how your business currently handles records, reports, software, and
              internal workflows. Then we build a clear finance support structure that fits the way your
              business actually operates.
            </p>
          </div>

          <div className="expertise-process-grid">
            {process.map((item, index) => (
              <article className="expertise-process-card" key={item.step}>
                <span className="expertise-process-step">Step {index + 1}</span>
                <h3>{item.step}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="expertise-benefits-section">
        <div className="container expertise-benefits-layout">
          <div className="expertise-benefits-copy">
            <span className="expertise-eyebrow">WHY IT MATTERS</span>
            <h2>Better Structure. Cleaner Financials. Easier Decisions.</h2>
            <p>
              When financial records are scattered, every decision takes longer. Aven helps businesses create
              cleaner systems, stronger routines, and clearer reporting so owners and teams can understand
              what is happening without chasing numbers.
            </p>
          </div>

          <div className="expertise-benefits-list">
            {benefits.map((item) => (
              <article className="expertise-benefit-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="expertise-section expertise-faq-section">
        <div className="container expertise-faq-layout">
          <div className="expertise-faq-copy">
            <span className="expertise-eyebrow">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p>
              Clear answers for businesses considering Aven&apos;s bookkeeping, reporting, software, and
              outsourced accounts support.
            </p>
          </div>

          <div className="expertise-faq-list">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index;

              return (
                <article className={`expertise-faq-card ${isOpen ? 'is-open' : ''}`} key={item.question}>
                  <button
                    className="expertise-faq-trigger"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span>{item.question}</span>
                    <i className={`fas ${isOpen ? 'fa-minus' : 'fa-plus'}`} aria-hidden="true" />
                  </button>
                  <div className="expertise-faq-panel" id={`faq-panel-${index}`} hidden={!isOpen}>
                    <p>{item.answer}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="expertise-final-cta">
        <div className="container expertise-final-cta-inner">
          <div>
            <span className="expertise-eyebrow expertise-eyebrow-light">NEXT STEP</span>
            <h2>Need More Structure in Your Financial Operations?</h2>
            <p>
              If your business needs organised records, clearer reporting, or accounting software support,
              Aven can help create a finance process that is practical, structured, and easier to manage.
            </p>
          </div>

          <div className="expertise-final-cta-actions">
            <a className="expertise-btn expertise-btn-light" href={serviceConsultationHref('General Consultation')}>
              Book Consultation
            </a>
            <a className="expertise-btn expertise-btn-outline-light" href={whatsappHref} target="_blank" rel="noreferrer">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-top-row">
            <div className="footer-contact-block">
              <h3>Reach Out Today</h3>
              <div className="footer-details">
                <div className="f-detail-item">
                  <label>Email Address</label>
                  <a href="mailto:avenbusinessconsulting@gmail.com">avenbusinessconsulting@gmail.com</a>
                </div>
                <div className="f-detail-item">
                  <label>Phone</label>
                  <p>+92 319 9623082</p>
                </div>
                <div className="f-detail-item">
                  <label>Office</label>
                  <p>Islamabad, Pakistan</p>
                </div>
                <div className="f-detail-item">
                  <label>Follow Us</label>
                  <div className="social-row" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <a href="https://www.linkedin.com/company/aven-business-consulting/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin" /></a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="fab fa-facebook" /></a>
                    <a href="https://www.instagram.com/aven_businessconsulting/" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fab fa-instagram" /></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-newsletter">
              <h4>Subscribe to our newsletter</h4>
              <form className="footer-input-group" onSubmit={(event) => event.preventDefault()}>
                <input
                  type="email"
                  className="footer-input"
                  placeholder="Email Address"
                  aria-label="Email address"
                />
                <button className="btn-beam" type="submit">Subscribe</button>
              </form>
            </div>
          </div>

          <div className="footer-nav-row">
            <div className="footer-links">
              <Link href="/">Home</Link>
              <Link href="/about">About Firm</Link>
              <Link href="/services">Expertise</Link>
              <a href="#tools">Tools</a>
              <a href="mailto:avenbusinessconsulting@gmail.com?subject=Book%20Consultation">Appointment</a>
              <a href="mailto:avenbusinessconsulting@gmail.com">Contact</a>
            </div>
            <div className="footer-copyright">&copy; 2026 Aven Business Consulting. All Rights Reserved.</div>
          </div>
        </div>
      </footer>
    </main>
  );
}