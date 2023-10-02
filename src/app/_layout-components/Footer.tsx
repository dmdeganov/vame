import React from 'react';
import {Manrope} from 'next/font/google';
import {ContactUsDecoration, ContactUsDecorationMobile, FeatureShape2Svg, Light3Svg} from '@/assets/svg';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
});

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <p>
          Al Safouh Second,
          <br />
          Business Central Towers,
          <br />
          Office 1006B, Dubai, UAE
        </p>
        <strong className="footer__company-name">
          vame<span>.</span>
        </strong>
        <p>
          {/*Reg.No: 1054701*/}
          <br />
          <span>info@vame.me</span>
          <br />
          <span>+9710412345678</span>
        </p>
      </div>
      <div className="footer__bottom">
        {/*<p className={manrope.className}>Copyright © 2023 vame.studio | All Rights Reserved</p>*/}
      </div>
      <div className="footer__mobile-decoration">
        <ContactUsDecorationMobile />
      </div>
    </footer>
  );
};

export default Footer;
