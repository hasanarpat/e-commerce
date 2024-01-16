import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import TopBar from '@/components/topBar/TopBar';
import AdsBar from '@/components/adsBar/AdsBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    template: '%s',
    default: 'Crow Store',
  },
  description: 'Official Crow Store',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <TopBar />
          <Navbar />
          <AdsBar />
          {children}
        </div>
      </body>
    </html>
  );
}
