'use client'

import { useState } from 'react'
import './Footer.css'
import TermsModal from './TermsModal'
import PrivacyModal from './PrivacyModal'
import AboutModal from './AboutModal'

export default function Footer() {
  const [isTermsOpen, setIsTermsOpen] = useState(false)
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)

  return (
    <>
      <footer id="contact" className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-column">
              <h3 className="footer-title">Soundcheck Capital</h3>
              <p className="footer-description">Empowering the live music industry with smart funding solutions.</p>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Product</h4>
              <ul className="footer-links">
                <li><a href="/">How it works</a></li>
                <li><a href="/">Pricing</a></li>
                <li><a href="/">Calculator</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-links">
                <li><button className="footer-link-button" onClick={() => setIsAboutOpen(true)}>About</button></li>
                <li><a href="https://meetings.hubspot.com/bpatronoff" target="_blank" rel="noopener noreferrer">Contact</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Legal</h4>
              <ul className="footer-links">
                <li><button className="footer-link-button" onClick={() => setIsPrivacyOpen(true)}>Privacy</button></li>
                <li><button className="footer-link-button" onClick={() => setIsTermsOpen(true)}>Terms</button></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">© 2024 Soundcheck Capital. All rights reserved.</p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/company/soundcheck-capital" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 14 14" fill="none">
                  <path d="M3 5H1V13H3V5ZM2 4C1.45 4 1 3.55 1 3C1 2.45 1.45 2 2 2C2.55 2 3 2.45 3 3C3 3.55 2.55 4 2 4ZM13 9C13 7.34 12.16 6 10.5 6C9.5 6 8.92 6.5 8.5 7H8.5V5H6.5V13H8.5V9.5C8.5 8.67 9.17 8 10 8C10.83 8 11.5 8.67 11.5 9.5V13H13.5V9Z" fill="#D1D5DB"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </>
  )
}
