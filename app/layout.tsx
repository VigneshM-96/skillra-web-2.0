import Link from 'next/link';

export default function RootLayout({
  children, 
} : {
  children:React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>

        <header style={{padding: '1rem', borderBottom: '1px solid #ccc'}}>
          <nav style={{display: 'flex', gap: '1.5rem'}}>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/courses">Courses Offered</Link>
            <Link href="/placement">Placements</Link>
            <Link href="/campus">Campus</Link>
            <Link href="/career">Career</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/contact">Contact Us</Link>
          </nav>
        </header>

        {children}

      </body>
    </html>
  );
}