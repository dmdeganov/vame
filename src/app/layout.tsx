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
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={lexend.className}>
      <body className="layout">
        <MaterialUIProvider>
          {children}
          <div id="portal" />
        </MaterialUIProvider>
      </body>
    </html>
  );
}
