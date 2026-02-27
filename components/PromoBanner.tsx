"use client";
import React from 'react';

export default function PromoBanner() {
    return (
        <section className="promo-banner-section">
            <div className="container">
                <div className="promo-grid">
                    <div className="promo-left">
                        <h2 className="promo-title">Simplifying Financial Management for Growth</h2>
                        <p className="promo-desc">
                            we combine expertise and advanced tools like QuickBooks and Xero to  deliver comprehensive financial services. From accurate bookkeeping and  custom Excel solutions to efficient payroll management, our team ensures every aspect of your business’s financial needs is handled with  precision.
                        </p>
                        <div className="promo-cta-wrap">
                            <button
                                className="promo-cta"
                                onClick={() => {
                                    if (typeof window !== 'undefined') window.location.href = '/appointment';
                                }}
                            >
                                BOOK CONSULTATION
                            </button>
                        </div>
                    </div>

                    <div className="promo-right">
                        <div className="promo-illustration" aria-hidden="true">
                            <img src="/promoimg.png" alt="illustration" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
