"use client";
import React, { useState } from 'react';

export default function Footer() {
    const [email, setEmail] = useState('');

    function handleSubscribe(e: React.FormEvent) {
        e.preventDefault();
        if (!email) return alert('Please enter your email');
        // Simple subscribe behaviour: open default mail client with subject
        window.location.href = `mailto:avenbusinessconsulting@gmail.com?subject=${encodeURIComponent('Subscribe')}&body=${encodeURIComponent('Please add ' + email + ' to the newsletter list.')}`;
    }

    return (
        <footer>
            <div className="container">
                <div className="footer-top-row">
                    <div className="footer-contact-block">
                        <h3>Reach Out Today</h3>
                        <div className="footer-details">
                            <div className="f-detail-item"><label>Email Address</label>
                                <a href="mailto:avenbusinessconsulting@gmail.com">avenbusinessconsulting@gmail.com</a>
                            </div>
                            <div className="f-detail-item"><label>Phone</label>
                                <p>+92 319 9623082</p>
                            </div>
                            <div className="f-detail-item"><label>Office</label>
                                <p>Islamabad, Pakistan</p>
                            </div>
                            <div className="f-detail-item"><label>Follow Us</label>
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
                        <form className="footer-input-group" onSubmit={handleSubscribe}>
                            <input
                                type="email"
                                className="footer-input"
                                placeholder="Email Address"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                aria-label="Email address"
                            />
                            <button className="btn-beam" type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className="footer-nav-row">
                    <div className="footer-links">
                        <a href="#" onClick={(e) => { e.preventDefault(); const el = document.getElementById('home'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}>Home</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); const el = document.getElementById('about'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}>About</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); const el = document.getElementById('services'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}>Services</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); const el = document.getElementById('appointment'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}>Appointment</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); const el = document.getElementById('contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}>Contact</a>
                    </div>
                    <div className="footer-copyright">&copy; 2026 Aven Business Consulting. All Rights Reserved.</div>
                </div>
            </div>
        </footer>
    );
}
