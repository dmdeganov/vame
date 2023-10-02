import React from 'react';
import Link from 'next/link';
import '@/app/styles/_header.scss';

const Header = () => {
  return (
    <header className="header" id="top">
      <Link href="#top" className="header__company">
        vame.
      </Link>
      <div className="header__links-center">
        <Link href="#aso">ASO</Link>
        <Link href="#advertising">Advertising</Link>
        <Link href="#google-ads">Google Ads</Link>
        <Link href="#facebook-ads">Facebook Ads</Link>
        <Link href="#tiktok-ads">TikTok Ads</Link>
        <Link href="#rtb">RTB</Link>
        <Link href="#mobile-marketing">Mobile Marketing</Link>
      </div>
      <div className="header__contact-us">
        <Link href="#contact-us">Contact Us</Link>
      </div>
    </header>
  );
};

export default Header;
