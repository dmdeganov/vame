import React from 'react';
import {Manrope} from 'next/font/google';
import {ContactUsDecorationMobile} from '@/assets/svg';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
});

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <p className="footer__address">
          Dubai Silicon Oasis, Techno Hub 2, 66th Street, Nr 20, Nad Al Hessa, Dubai, United Arab Emirates
        </p>
        <a className="footer__company-name" href="#home">
          vame<span>.</span>
        </a>
        <p className="footer__details">
          <span>Premises Number - C132-L</span>
          <br />
          <span>information.vame@gmail.com</span>
          <br />
          <span>Makani Number - 3624279269</span>
        </p>
      </div>
      <div className="footer__bottom">
        <p className={manrope.className}>Copyright © 2023 vame.studio | All Rights Reserved</p>
      </div>
      <div className="footer__mobile-decoration">
        <ContactUsDecorationMobile />
      </div>
    </footer>
  );
};

export default Footer;
