import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Skincare | GLOW NATURALLY',
  description: 'Premium skincare products for your natural glow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F5F1E9] text-gray-800`}>
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
