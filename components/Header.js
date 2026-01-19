'use client'

import { useState } from 'react'
import Link from 'next/link'
import './Header.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLinkClick = (e, targetId) => {
    e.preventDefault()
    setIsMenuOpen(false)
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="logo">
          <img 
            src="/images/clean_logo.svg"
            alt="Soundcheck Capital" 
            className="logo-image"
          />
        </Link>
        <button 
          className={`burger-button ${isMenuOpen ? 'burger-button-open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <a href="#how-it-works" className="nav-link" onClick={(e) => handleLinkClick(e, 'how-it-works')}>
            How it works
          </a>
          <a href="#faq" className="nav-link" onClick={(e) => handleLinkClick(e, 'faq')}>
            FAQ
          </a>
          <a href="#contact" className="nav-link" onClick={(e) => handleLinkClick(e, 'contact')}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

