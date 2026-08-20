'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {

    const pathname = usePathname();

    const navItems = [
        {href: '/about', label: 'About Us'},
        {href: '/courses', label: 'Course Offered'},
        {href: '/placement', label: 'Placements'},
        {href: '/campus', label: 'Campus'},
        {href: '/career', label: 'Career'},
        {href: '/book', label: 'Book'},
        {href: '/blogs', label: 'Blogs'},
        {href: '/gallery', label: 'Gallery'},
        {href: '/contact', label: 'Contact Us'}
    ];

    return (

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

            <Link href="/" style={{display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none'}}>
                <Image 
                src="/logo.png"
                alt="company log"
                width={32}
                height={32}
                style={{objectFit: 'contain'}}            />
                <span style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: "white", fontSize: '24px', fontWeight: "bold"}}>Skillra</span>
            </Link>

            <nav style={{display: 'flex', gap: '1.5rem', alignItems: 'center'}}>

                {navItems.map((item) => {
                    const isActive = pathname == item.href;
                    return (
                        <Link
                        key={item.href}
                        href={item.href}
                        className={`nav-link ${isActive ? 'active' : ''}`}
                        style={{ objectFit: 'contain', textDecoration: 'none', color: "#fff"}}>
                            {item.label}
                        </Link>
                    );
                })}
            </nav>

        </header>

    );
}