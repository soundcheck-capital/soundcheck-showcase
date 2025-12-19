'use client'

import { useEffect } from 'react'
import './TermsModal.css'

export default function PrivacyModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        <div className="modal-body">
          <h2 className="modal-title">Privacy Policy</h2>
          <p className="modal-date"><strong>Last Updated: February 15, 2024</strong></p>
          
          <h3>Collection of Personal Information</h3>
          <p>We collect and store personal information such as name, contact information, financial records, and other relevant data as necessary for the provision of advance services.</p>

          <h3>Use of Information</h3>
          <p>We use the collected information solely for the purpose of processing and providing advance services to our clients. We do not share this information with third parties unless required by law or with explicit consent from the individual.</p>

          <h3>Security Measures</h3>
          <p>We implement security measures to protect the personal information we collect and store, including encryption, access controls, and regular security audits.</p>

          <h3>Cookies and Tracking Technologies</h3>
          <p>We may use cookies and similar technologies on our website to track user behavior and preferences to improve our services and user experience.</p>

          <h3>Non-Personal Information</h3>
          <p>We may collect non-personal information such as IP addresses, browser details, and user interactions for analytical and statistical purposes to improve our website and services.</p>

          <h3>Third-Party Service Providers</h3>
          <p>We may engage with third-party service providers for certain functions such as payment processing, customer support, or marketing. In such cases, we ensure that these service providers adhere to strict privacy and security standards.</p>

          <h3>Your Rights</h3>
          <p>We provide individuals with the right to access, correct, or delete their personal information as required by applicable data protection laws.</p>

          <h3>Contact Us</h3>
          <p>If you have any questions or concerns regarding our privacy policy or the handling of your personal information, please contact us at <a href="mailto:support@soundcheckcapital.com">support@soundcheckcapital.com</a>.</p>
        </div>
      </div>
    </div>
  )
}

