'use client'

import Link from 'next/link'
import Image from 'next/image'
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
          <Image 
            src="/images/clean_logo.svg" 
            alt="Soundcheck Capital" 
            width={150}
            height={40}
            className="logo-image"
            priority
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

