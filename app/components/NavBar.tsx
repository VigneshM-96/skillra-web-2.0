'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '/about', label: 'About Us' },
    { href: '/courses', label: 'Course Offered' },
    { href: '/placement', label: 'Placements' },
    { href: '/campus', label: 'Campus' },
    { href: '/career', label: 'Career' },
    { href: '/book', label: 'Book' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact Us' }
  ];

  return (
    <>
      {/* Global CSS Injector for Mobile Overrides */}
      <style>{`
        .desktop-nav {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }
        .hamburger-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          flex-direction: column;
          gap: 6px;
          padding: 4px;
        }
        .hamburger-line {
          width: 24px;
          height: 2px;
          background-color: white;
          transition: all 0.3s ease;
        }
        /* Hamburger to X Animations */
        .hamburger-btn.open .line1 { transform: translateY(8px) rotate(45deg); }
        .hamburger-btn.open .line2 { opacity: 0; }
        .hamburger-btn.open .line3 { transform: translateY(-8px) rotate(-45deg); }

        /* Mobile Dropdown Panel */
        .mobile-menu {
          position: fixed;
          top: 5.5rem;
          left: 5%;
          width: 90%;
          background-color: rgb(109, 15, 215);
          border-radius: 24px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transform: translateY(-20px);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 999;
        }
        .mobile-menu.show {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }

        /* Responsive Breakpoint */
        @media (max-width: 1100px) {
          .desktop-nav { display: none; }
          .hamburger-btn { display: flex; }
        }
      `}</style>

      {/* Main Navbar Pill */}
      <header style={{
        position: 'fixed',
        top: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '90%',
        maxWidth: '1200px',
        zIndex: 1000,
        backgroundColor: 'rgb(109, 15, 215)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderRadius: '50px',
        padding: '0.75rem 2rem',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxSizing: 'border-box'
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <Image src="/logo.png" alt="company logo" width={32} height={32} style={{ objectFit: 'contain' }} />
          <span style={{ color: "white", fontSize: '24px', fontWeight: "bold" }}>Skillra</span>
        </Link>
        
        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.href} 
                href={item.href} 
                style={{ 
                  textDecoration: 'none', 
                  color: '#fff',
                  fontWeight: isActive ? 'bold' : 'normal'
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          className={`hamburger-btn ${isOpen ? 'open' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <div className="hamburger-line line1"></div>
          <div className="hamburger-line line2"></div>
          <div className="hamburger-line line3"></div>
        </button>
      </header>

      {/* Mobile Dropdown Menu Card */}
      <div className={`mobile-menu ${isOpen ? 'show' : ''}`}>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.href} 
              href={item.href} 
              onClick={() => setIsOpen(false)} // Closes panel on link click
              style={{ 
                textDecoration: 'none', 
                color: '#fff',
                fontSize: '18px',
                padding: '0.5rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                fontWeight: isActive ? 'bold' : 'normal'
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </>
  );
}
