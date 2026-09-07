'use client'

import { useEffect, useState } from 'react'
import { sendContactForm } from '../services/hubspot'
import './TermsModal.css'
import './ContactModal.css'

const BUSINESS_TYPES = ['Promoter', 'Venue', 'Festival', 'Other']

export default function ContactModal({ isOpen, onClose }) {
  const [name, setName] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [businessType, setBusinessType] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

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

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!name.trim() || !businessName.trim() || !businessType || !message.trim()) {
      setError('Please fill in all fields.')
      return
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }

    setError('')
    setIsLoading(true)

    const result = await sendContactForm({
      name: name.trim(),
      businessName: businessName.trim(),
      businessType,
      email: email.trim(),
      message: message.trim(),
    })

    setIsLoading(false)

    if (result.success) {
      setIsSuccess(true)
      setName('')
      setBusinessName('')
      setBusinessType('')
      setEmail('')
      setMessage('')
    } else {
      setError('Failed to send your message. Please try again later.')
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content contact-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        <div className="modal-body">
          <h2 className="modal-title">Contact us</h2>
          {isSuccess ? (
            <p className="contact-form-success" role="status" aria-live="polite">
              ✓ Message sent. We&apos;ll get back to you shortly.
            </p>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-field">
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  className="contact-form-input"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => { setName(e.target.value); setError('') }}
                />
              </div>
              <div className="contact-form-field">
                <label htmlFor="contact-business-name">Business name</label>
                <input
                  id="contact-business-name"
                  type="text"
                  className="contact-form-input"
                  placeholder="Your business name"
                  value={businessName}
                  onChange={(e) => { setBusinessName(e.target.value); setError('') }}
                />
              </div>
              <div className="contact-form-field">
                <label htmlFor="contact-business-type">Type of business</label>
                <select
                  id="contact-business-type"
                  className="contact-form-select"
                  value={businessType}
                  onChange={(e) => { setBusinessType(e.target.value); setError('') }}
                >
                  <option value="">Select your business type</option>
                  {BUSINESS_TYPES.map((type) => (
                    <option key={type} value={type.toLowerCase()}>{type}</option>
                  ))}
                </select>
              </div>
              <div className="contact-form-field">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  className="contact-form-input"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError('') }}
                />
              </div>
              <div className="contact-form-field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  className="contact-form-textarea"
                  placeholder="How can we help?"
                  value={message}
                  onChange={(e) => { setMessage(e.target.value); setError('') }}
                />
              </div>
              {error && <p className="contact-form-error">{error}</p>}
              <button type="submit" className="contact-form-submit" disabled={isLoading}>
                {isLoading ? 'Sending…' : 'Send message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
