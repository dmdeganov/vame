import React from 'react';
import {Lexend} from 'next/font/google';
import Header from '@/app/_layout-components/Header';
import TopLight from '@/app/_layout-components/TopLight';
import './styles/main.scss';
import MaterialUIProvider from '@/app/_providers/MaterialUIProvider';
import Footer from "@/app/_layout-components/Footer";

// If loading a variable font, you don't need to specify the font weight
const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Vame',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={lexend.className}>
      <body className="layout">
        <MaterialUIProvider>
          <Header />
          <TopLight />
          {children}
          <div id="portal" />
        </MaterialUIProvider>
        <Footer/>
      </body>
    </html>
  );
}
