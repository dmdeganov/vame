import React from 'react';
import '@/app/styles/_header.scss';

const Header = () => {
  return (
    <header className="header" id="home">
      <span  className="header__company">
        vame.
      </span>
      <div className="header__links-center">
        <a href="#aso">ASO</a>
        <a href="#advertising">Advertising</a>
        <a href="#goog-ads">Google Ads</a>
        <a href="#facebook-ads">Facebook Ads</a>
        <a href="#tiktok-ads">TikTok Ads</a>
        <a href="#rtb">RTB</a>
        <a href="#mobile-marketing">Mobile Marketing</a>
      </div>
      <div className="header__contact-us">
        <a href="#contact-us">Contact Us</a>
      </div>
    </header>
  );
};

export default Header;
