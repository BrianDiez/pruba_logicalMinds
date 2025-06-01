import { Montserrat } from 'next/font/google';
import '../../src/styles/globals.css';
import '../../src/styles/navbar.css';
import Navbar from '../components/Navbar';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata = {
  title: 'Logical Minds',
  description: 'App prueba junior',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} antialiased bg-gray-100`}>
        <header className= "items-center">
          <h1 className="text-3xl font-bold mb-4 text-center">Logical Minds</h1>
          <Navbar />
        </header>

        {children}

        <footer className="text-center text-sm text-gray-700 mt-auto">
          Prueba de app Brian Diez
        </footer>
      </body>
    </html>
  );
}
