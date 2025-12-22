'use client'

import { useEffect } from 'react'
import './TermsModal.css'

export default function AboutModal({ isOpen, onClose }) {
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
          <h2 className="modal-title">About Us</h2>
          
          <p><strong>We are live fans.</strong></p>

          <p>We have decades of experience in live entertainment from promotion to ticketing and financing.</p>

          <p>Our team has arranged $100+ million in financing for independent venues, promoters, and festivals and has advised Media & Entertainment companies on M&A transactions, for a total value in excess of US$30 billion.</p>

          <p>We pioneered the creation of NIVA, the driving force behind the $16 billion Shuttered Venue Operators Grant (SVOG) program passed by Congress in December 2020.</p>

          <p><strong>We have your back.</strong></p>
        </div>
      </div>
    </div>
  )
}

