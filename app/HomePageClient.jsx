// app/HomePageClient.tsx
'use client';
import Image from 'next/image';

export default function HomePageClient() {
  return (
    <main style={{ width: '100%', maxWidth: '1200px', margin: 'auto', padding: '0 1rem', boxSizing: 'border-box' }}>
      
      {/* Global CSS Style tag to handle responsive stacking on smaller screens */}
      <style>{`
        .hero-section {
          display: flex;
          align-items: center;
          min-height: 80vh;
          padding: 4rem 0;
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
        /* Desktop buttons style */
        .desktop-buttons {
          display: flex;
          gap: 1rem;
          margin-top: 0.5rem;
        }
        /* Mobile buttons hidden by default on desktop */
        .mobile-buttons {
          display: none;
        }

                /* Hiring Partners Container Settings */
        .section-hiring-partners {
          padding: 2rem 0;
          width: 100%;
          overflow: hidden;
          background-color: #fff; /* Subtle background separation */
          border-radius: 12px;
          margin: 2rem 0;
        }

        .section2-list {
          overflow: hidden;
          position: relative;
          width: 100%;
          display: flex;
        }

        /* The horizontal flex track that handles the moving action */
        .logo-track {
          display: flex;
          width: max-content;
          gap: 4rem; /* Spacing between your logo assets */
          padding: 1rem 0;
          animation: scrollLoop 20s linear infinite;
        }

        /* Individual asset item layout constraints */
        .logo-item {
          font-size: 1.25rem;
          font-weight: 600;
          color: #777;
          display: flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          padding: 0.5rem 1.5rem;
          background: #ffffff;
          border: 1px solid #eee;
          border-radius: 8px;
          min-width: 120px;
          height: 50px;
        }

        /* Pauses the carousel track when a user hovers over it */
        .logo-track:hover {
          animation-play-state: paused;
        }

        /* Keyframes calculation: Translates half the width (which matches Set 1) */
        @keyframes scrollLoop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 2rem)); /* Offsets half the width + half the gap allocation */
          }
        }

        
                /* Mobile Breakpoint: Stack content as [Content Text -> Image -> Buttons] */
        @media (max-width: 768px) {
          .hero-section {
            flex-direction: column !important;
            text-align: left;
            padding: 4rem 0 2rem 0;
            gap: 2rem;
          }
          .hero-content {
            align-items: flex-start;
            width: 100% !important;
            flex: none !important;
          }
          .hero-image-container {
            display: block !important;
            position: relative !important;
            width: 300px !important;   /* Overrides the desktop 500px width */
            height: 300px !important;  /* Overrides the desktop 500px height */
            max-width: 100% !important;
            flex: none !important;     /* Prevents flex engine from collapsing it */
            margin: 0 auto !important; /* Centers the circular image on mobile */
          }

          /* Hide standard desktop layout buttons */
          .desktop-buttons {
            display: none !important;
          }
          
          /* Show mobile actions below the image */
          .mobile-buttons {
            display: flex !important;
            flex-direction: column; /* Stack buttons vertically on small screens */
            width: 100% !important;
            gap: 1rem;
            margin-top: 1rem;
          }
          .mobile-buttons button {
            width: 100% !important; /* Makes buttons full width on mobile for better tapping */
          }

                    /* Infinite Scroller Mobile Override */
          .logo-track {
            gap: 2rem; /* Tighten up spacing slightly on mobile */
            animation-duration: 15s; /* Accelerate movement since screen width is tighter */
          }
          @keyframes scrollLoop {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-50% - 1rem));
            }
          }

        

        }
      `}</style>

      {/* Hero Section Container */}
      <section className="hero-section" aria-label="Skillra Career Introduction">
        
        {/* Left Side: Content Text */}
        <div className="hero-content" style={{textAlign: "left"}}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 'bold', lineHeight: '1.2', color: '#111', margin: 0 }}>
            From Learning to Placements - <span style={{ color: 'rgb(109, 15, 215)' }}>Career Companion</span>
          </h1>
          
          <p style={{ fontSize: '1.25rem', color: '#555', lineHeight: '1.6', margin: 0, maxWidth: '540px' }}>
            Empower your journey with cutting-edge industry training, expert mentorship, and premium career placements all in one collaborative hub.
          </p>
          
          {/* Desktop Only Buttons Layout */}
          <div className="desktop-buttons">
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
            alt="Skillra professional training and placement mentorship illustration" 
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover' }} 
          />
        </div>

        {/* Mobile Only Buttons Layout (Appears dynamically below the image on mobile) */}
        <div className="mobile-buttons">
          <button style={{ backgroundColor: 'rgb(109, 15, 215)', color: 'white', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '8px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer' }}>
            Explore Courses
          </button>
          <button style={{ backgroundColor: 'transparent', color: 'rgb(109, 15, 215)', border: '2px solid rgb(109, 15, 215)', padding: '0.75rem 1.5rem', borderRadius: '8px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer' }}>
            Contact Us
          </button>
        </div>

      </section>

            <section className='section-hiring-partners'>
        <div className='section2-title'>
          <h2 style={{fontWeight: "bold", textAlign: 'center', marginBottom: '2rem'}}>
            More than <span style={{color: 'rgb(109, 15, 215)', fontWeight: "bold"}}>25+</span> Hiring Partners
          </h2>
        </div>
        
        {/* The wrapper acting as a window clipping the overflow */}
        <div className='section2-list'>
          {/* The moving track */}
          <div className='logo-track'>
            
            {/* --- SET 1: Original Logos --- */}
           <div className='logo-item'>
            <Image 
              src="/HiringPartners/ACCESSHEALTH.png" 
              alt="Access Health Logo" 
              width={140} 
              height={50} 
              style={{ objectFit: 'contain' }} 
            />
          </div>

            <div className='logo-item'>Logo 2</div>
            <div className='logo-item'>Logo 3</div>
            <div className='logo-item'>Logo 4</div>
            <div className='logo-item'>Logo 5</div>
            <div className='logo-item'>Logo 6</div>

            {/* --- SET 2: Identical Duplicates for Seamless Infinite Loop --- */}
            <div className='logo-item'>Logo 1</div>
            <div className='logo-item'>Logo 2</div>
            <div className='logo-item'>Logo 3</div>
            <div className='logo-item'>Logo 4</div>
            <div className='logo-item'>Logo 5</div>
            <div className='logo-item'>Logo 6</div>
            
          </div>
        </div>
      </section>


      

    </main>
  );
}
