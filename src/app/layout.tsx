import React from 'react';
import {Lexend} from 'next/font/google';
import MaterialUIProvider from '@/app/_providers/MaterialUIProvider';
import './styles/main.scss';

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Vame',
  description: 'A digital marketing agency with experience in App Store Optimization (ASO), Apple Search Ads, Google Ads, Facebook Ads, and TikTok Ads. We have vast experience in buying and selling RTB advertising and mobile promotion.'
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={lexend.className}>
      <link rel="icon" href="/favicon.svg" sizes="any" />
      <body className="layout">
        <MaterialUIProvider>
          {children}
          <div id="portal" />
        </MaterialUIProvider>
      </body>
    </html>
  );
}
