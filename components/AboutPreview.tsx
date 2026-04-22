"use client";
import React from 'react';
import Link from 'next/link';

const ABOUT_PREVIEW_VIDEO_SRC = '/about-preview-540x540-60fps.mp4';

export default function AboutPreview() {
  return (
    <section className="section-padding about-preview-section">
      <div className="container">
        <div className="about-preview-grid">
          <div className="about-preview-media">
            <video
              key={ABOUT_PREVIEW_VIDEO_SRC}
              className="about-preview-video"
              src={ABOUT_PREVIEW_VIDEO_SRC}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          <div className="about-preview-content">
            <h2 className="about-preview-title">
              Helping Entrepreneurs Make
              <br />
              Rational Decisions
            </h2>
            <p className="about-preview-text">
              AVEN provides remote finance support for businesses that want clean records, clear reporting,
              and a system that stays under control.
            </p>
            <p className="about-preview-text">
              We work as an extension of your team. We set up the right accounting tools, keep financial
              records current, and maintain a consistent reporting cadence so you always know where your
              business stands.
            </p>
            <p className="about-preview-text">
              We support modern accounting systems including <strong>QuickBooks</strong>, Xero, Zoho, Odoo,
              and ERP environments where required. Scope is defined upfront and delivered through a repeatable
              workflow.
            </p>
            <Link href="/appointment" className="btn-beam">
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
