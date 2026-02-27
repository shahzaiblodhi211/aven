import React from 'react';

export default function TechMarquee() {
  return (
    <div className="marquee-section">
      <div className="container">
        <p className="marquee-label">Expert Bookkeeping & Implementation on</p>
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {/* SET 1 */}
            <div className="marquee-item">
              <img src="/ms-dyn.svg" className="brand-logo" alt="Microsoft Dynamics 365" />
              Microsoft Dynamics 365
            </div>
            <div className="marquee-item">
              <img src="/Quickbook.svg" className="brand-logo" alt="QuickBooks" />
              QuickBooks
            </div>
            <div className="marquee-item">
              <img src="/Zoho Books.svg" className="brand-logo" alt="Zoho Books" />
              Zoho Books
            </div>
            <div className="marquee-item">
              <img src="/Odoo.svg" className="brand-logo" alt="Odoo" />
              Odoo
            </div>
            <div className="marquee-item">
              <img src="/Xero.svg" className="brand-logo" alt="Xero" />
              Xero
            </div>

            {/* SET 2 (repeat for continuous scroll) */}
            <div className="marquee-item">
              <img src="/ms-dyn.svg" className="brand-logo" alt="Microsoft Dynamics 365" />
              Microsoft Dynamics 365
            </div>
            <div className="marquee-item">
              <img src="/Quickbook.svg" className="brand-logo" alt="QuickBooks" />
              QuickBooks
            </div>
            <div className="marquee-item">
              <img src="/Zoho Books.svg" className="brand-logo" alt="Zoho Books" />
              Zoho Books
            </div>
            <div className="marquee-item">
              <img src="/Odoo.svg" className="brand-logo" alt="Odoo" />
              Odoo
            </div>
            <div className="marquee-item">
              <img src="/Xero.svg" className="brand-logo" alt="Xero" />
              Xero
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
