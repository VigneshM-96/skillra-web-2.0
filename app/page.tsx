'use client';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main style={{ width: '100%', maxWidth: '1200px', margin: 'auto', padding: '0 1rem', boxSizing: 'border-box' }}>
      
      {/* Global CSS Style tag to handle responsive stacking on smaller screens */}
      <style>{`
        .hero-section {
          display: flex;
          align-items: center;
          
          min-height: 80vh;
          padding: 4rem 0 4rem 0; /* Extra top padding so the fixed navbar doesn't block content */
          gap: 4rem;
        }
        .hero-content {
          flex: 2;
          display: flex;
          
          flex-direction: column;
          gap: 1.5rem;
        }
        .hero-image-container {
          flex: 1.5;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          width: 500px;
          height: 500px;

          border-radius: 50%;
          overflow: hidden;
        }
        
        /* Mobile Breakpoint: Stack content vertically and adjust height */
        @media (max-width: 768px) {
          .hero-section {
            flex-direction: column;
            text-align: center;
            padding: 7rem 0 2rem 0;
          }
          .hero-content {
            align-items: center;
          }
          .hero-image-container {
            height: 300px;
            order: -1; /* Puts the image on top for mobile screens */
          }
        }
      `}</style>

      {/* 1. Landing/Hero Section */}
      <section className="hero-section">
        
        {/* Left Side: Content */}
        <div className="hero-content" style={{textAlign: "left", alignItems: 'flex-start'}}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 'bold', lineHeight: '1.2', color: '#111', margin: 0}}>
            From Learning to Placements - <span style={{ color: 'rgb(109, 15, 215)' }}>Career Companion</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#555', lineHeight: '1.6', margin: 0, maxWidth: '540px' }}>
            This is the home page. Empower your journey with cutting-edge industry training, expert mentorship, and premium career placements all in one collaborative hub.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
            <button style={{ backgroundColor: 'rgb(109, 15, 215)', color: 'white', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '8px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer' }}>
              Explore Courses
            </button>
            <button style={{ backgroundColor: 'transparent', color: 'rgb(109, 15, 215)', border: '2px solid rgb(109, 15, 215)', padding: '0.75rem 1.5rem', borderRadius: '8px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer' }}>
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Side: Image Placeholder */}
        <div className="hero-image-container">
  <Image 
    src="/landingimg1.jpg" 
    alt="Skillra training illustration" 
    fill
    priority
    sizes="(max-width: 768px) 100vw, 50vw"
    style={{ objectFit: 'cover' }} /* Changed from contain to cover */
  />
</div>


      </section>

      {/* Future Sections will go here */}

    </main>
  );
}
