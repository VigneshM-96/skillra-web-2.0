import './globals.css';
import Navbar from "./components/NavBar";

export default function RootLayout({
  children,
} : {
  children: React.ReactNode;
}) {
  return (

    <html>
      <body style={{margin: 0, padding: 0, fontFamily: 'sans-serif'}}>

        <Navbar />

        <main style={{paddingTop: '6rem', margin: 'auto', fontSize: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', minHeight: '80vh', boxSizing: 'border-box'}}>
          {children}
        </main>

      </body>
    </html>

  );
}