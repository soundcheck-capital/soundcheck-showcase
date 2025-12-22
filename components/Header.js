'use client'

import Link from 'next/link'
import './Header.css'

export default function Header() {
  const handleLinkClick = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="logo">
          <img 
            src="/images/side_logo_white_bold.svg" 
            alt="Soundcheck Capital" 
            className="logo-image"
          />
        </Link>
        <nav className="nav">
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

