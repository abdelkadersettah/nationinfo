import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'NationInfo',
  description:
    'Explore the world with NationInfo, your go-to app for detailed country information. From history to geography, culture to travel essentials, discover fascinating insights and essential stats. Download now and embark on a journey of knowledge!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
