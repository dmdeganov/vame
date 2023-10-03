import React from 'react';
import Button from '@/components/Button';
import Image from 'next/image';
import {
  FacebookAdsSvg,
  GoogleAdsSvg,
  TikTokAdsSvg,
  FeatureShape1Svg,
  FeatureShape2Svg,
  FeatureShape3Svg,
  FeatureShape4Svg,
  FeatureShape5Svg,
  FeatureShape6Svg,
  GooglePlatformSvg,
  DiscoverPlatformSvg,
  YoutubePlatformSvg,
  GooglePlayPlatformSvg,
  DisplayNetworkPlatformSvg,
  FacebookDecoration1,
  FacebookDecoration2,
  TikTokShape1,
  TikTokShape2,
  TikTokShape3,
  RtbDecoration,
  ContactUsDecoration,
} from '@/assets/svg';
import {Manrope} from 'next/font/google';
import ContactUsForm from '@/app/(contact-form)/ContactUsForm';
import Header from '@/app/_layout-components/Header';
import Footer from '@/app/_layout-components/Footer';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Vame',
};


const Page = () => {
  return (
    <div className="home-page">
      <div className="light-area">
        <div className="light-wrapper">
          <Image
            src="/light-1.png"
            className="light-image"
            width={1920}
            height={960}
            quality={100}
            alt=""
            priority={true}
          />
        </div>
        <Header />
        <div className="hero">
          <p>ASO & Marketing Agency</p>
          <h1>
            Boost your app with <strong>vame</strong>
            <b>.</b>
            <span>agency</span>
          </h1>
        </div>
        <div className="agency-description">
          <p>
            A digital marketing agency with experience in App Store Optimization (ASO), Apple Search Ads, Google Ads,
            Facebook Ads, and TikTok Ads. We have vast experience in buying and selling RTB advertising and mobile
            promotion.
          </p>
          <a href="#aso"><Button className="button--white-on-hover">Get Started</Button></a>
        </div>
        <section className="aso" id="aso">
          <h2>ASO optimization</h2>
          <p>
            A set of actions to improve the search visibility of the application in the App Store and Google Play
            rankings, increase organic installations, and attract interested users.
          </p>
          <ol>
            <li>
              <span>1</span>Improved search visibility
            </li>
            <li>
              <span>2</span>Increased app conversion rate
            </li>
            <li>
              <span>3</span>Growth in search queries
            </li>
            <li>
              <span>4</span>Increase in organic installations
            </li>
          </ol>
        </section>
      </div>
      <section className="aso-solutions">
        <h2>Our ASO solutions</h2>
        <div className="aso-solutions__grid">
          <div className="aso-solutions__cell">
            <h4>Textual ASO for Google Play and AppStore</h4>
            <p>We conduct ASO for 39 localizations in the App Store and for all languages on Google Play.</p>
          </div>
          <div className="aso-solutions__cell">
            <h4>Visual ASO for Google Play and AppStore</h4>
            <p>Professional ASO design team.</p>
          </div>
          <div className="aso-solutions__cell aso-solutions__cell--big">
            <h4>Additional agency services</h4>
            <ul>
              <li>Description creation</li>
              <li>Personal consultation on ASO mobile app promotion (ASO expert + promotion expert)</li>
              <li>Semantic core collection for the App Store, Google Play</li>
              <li>Keyword selection for mobile app promotion</li>
              <li>Apple Search Ads and Google App Campai gns</li>
            </ul>
          </div>
          <div className="aso-solutions__cell">
            <h4>Comphensive ASO Support for Google Play and AppStore</h4>
            <p>ASO optimization and app promotion services in one package.</p>
          </div>
          <div className="aso-solutions__cell">
            <h4>Textual + Visual ASO for Google Play and AppStore</h4>
            <p>Improving app visibility and conversion to installation.</p>
          </div>
        </div>
        <a href="#contact-us"><Button>Contact Us</Button></a>
      </section>
      <section className="ads-services" id="advertising">
        <h2>Our Advertising services</h2>
        <div className="ads-services__cards">
          <div className="ads-services__card service-card">
            <div className="service-card__icon-wrapper">
              <GoogleAdsSvg className="service-card__service-icon" />
            </div>
            <div className="service-card__description">
              <p>Our team has extensive experience in running successful advertising campaigns with Google Ads.</p>
              <p>
                We will analyze your Google Ads potential and provide you with a detailed forecast of the sales
                opportunities with Google Ads that are available for your company.
              </p>
              <p>
                We will take into account your pvious data and model a pcise marketing plan for your target markets.
              </p>
            </div>
            <a href="#google-ads"><Button>Learn More</Button></a>
          </div>
          <div className="ads-services__card service-card">
            <div className="service-card__icon-wrapper">
              <FacebookAdsSvg width="284" height="40" className="service-card__service-icon" />
            </div>
            <div className="service-card__description">
              <p>
                We provide a full range of services related to digital social media marketing, from advertising
                creatives to optimizing advertising campaigns.{' '}
              </p>
              <p>
                We are ppared to take over your Facebook Ads marketing campaigns, increase your conversion rate, and
                improve your ROI.
              </p>
              <p>
                We help businesses of all sizes, from start-ups to enterprise-level companies, achieve their Facebook
                advertising goals.
              </p>
            </div>
            <a href="#facebook-ads"><Button>Learn More</Button></a>
          </div>
          <div className="ads-services__card service-card">
            <div className="service-card__icon-wrapper">
              <TikTokAdsSvg className="service-card__service-icon" />
            </div>
            <div className="service-card__description">
              <p>
                TikTok is currently the most downloaded social media app in history. The new social media platform is
                the best way to reach the millions of people aged 16 to 34 who make up over 77% of TikTok's user base.
              </p>
              <p>
                Every day, more and more people are choosing to use TikTok. The platform has already become extremely
                popular all around the world, allowing brands to tap into and interact with a large, diverse, high-value
                young audience like never before.
              </p>
            </div>
            <a href="#tiktok-ads"><Button>Learn More</Button></a>
          </div>
        </div>
      </section>
      <section className="ads-features" id="google-ads">
        <h2>Managing your advertising in Google Ads will include the following:</h2>
        <div className="ads-features__grid">
          <div className="ads-features__card">
            <h4>Developing a promotion strategy in Google Ads</h4>
            <div className="ads-features__icon-wrapper">
              <FeatureShape1Svg />
            </div>
          </div>
          <div className="ads-features__card">
            <h4>Thorough keyword research</h4>
            <div className="ads-features__icon-wrapper">
              <FeatureShape2Svg stroke="#fff" />
            </div>
          </div>
          <div className="ads-features__card">
            <h4>Creating and testing advertisements</h4>
            <div className="ads-features__icon-wrapper">
              <FeatureShape3Svg />
            </div>
          </div>
          <div className="ads-features__card">
            <h4>Selecting and adapting rate strategies</h4>
            <div className="ads-features__icon-wrapper">
              <FeatureShape4Svg />
            </div>
          </div>
          <div className="ads-features__card">
            <h4>Tracking and modeling conversions</h4>
            <div className="ads-features__icon-wrapper">
              <FeatureShape5Svg />
            </div>
          </div>
          <div className="ads-features__card">
            <h4>Reporting preparation</h4>
            <div className="ads-features__icon-wrapper">
              <FeatureShape6Svg />
            </div>
          </div>
        </div>
      </section>
      <div className="light-area light-area--2">
        <div className="light-wrapper">
          <Image
            src="/light-2.png"
            className="light-image"
            width={1920}
            height={2400}
            quality={100}
            alt=""
            priority={true}
          />
        </div>
        <div className="ads-platforms">
          <h4>We will run ads for your product on all major Google platforms:</h4>
          <div className="ads-platforms__icons">
            <GooglePlatformSvg />
            <YoutubePlatformSvg />
            <GooglePlayPlatformSvg />
            <DiscoverPlatformSvg />
            <DisplayNetworkPlatformSvg />
          </div>
          <a href="#contact-us"><Button>Contact Us</Button></a>
        </div>
        <section className="facebook" id="facebook-ads">
          <h2>How Facebook advertising works:</h2>
          <div className="facebook__row">
            <div className="facebook__cell">
              <h4 className="inverse">Facebook platform</h4>
              <div className="facebook__descripitons mw-529">
                <p>Using the Facebook social media platform is a great way to attain your business goals.</p>
                <p>
                  Facebook marketing can be used for many purposes, from promoting services and products to raising
                  awareness of a cause or event. Facebook lets you create ads that target specific audiences based on
                  age group, location, interests, and more.
                </p>
              </div>
              <a href="#contact-us"><Button className="button--purple">Contact Us</Button></a>
            </div>
            <div className="facebook__cell facebook__cell--decoration">
              <FacebookDecoration1 />
            </div>
          </div>
          <div className="facebook__row">
            <div className="facebook__cell facebook__cell--decoration">
              <FacebookDecoration2 />
            </div>
            <div className="facebook__cell">
              <h4 className="inverse">Why working with an agency is preferable</h4>
              <div className="facebook__descripitons">
                <p>
                  Facebook advertising allows you to reach a large number of social media users within just a few days;
                  however, it's important to have a well-designed campaign because your ad's ROI depends on your entire
                  marketing funnel.
                </p>
                <p>
                  As an agency, we have extensive experience in the field of Facebook advertising campaigns, from
                  writing conversion-focused copy and creating unique offers to analyzing data from advertising
                  accounts, which allows you to turn your advertising budget into quality leads.
                </p>
                <p>
                  Think of a Facebook advertising agency as a turnkey system for scaling your business without hiring
                  and managing a bunch of employees.
                </p>
              </div>
            </div>
          </div>
          <div className="facebook__row">
            <div className="facebook__cell">
              <h4>You should contact us if:</h4>
              <ul>
                <li>You are too busy to do Facebook advertising on your own.</li>
                <li>You lack the required experience.</li>
                <li>You do not have the necessary tools to analyze the effectiveness of advertising campaigns.</li>
                <li>You do not wish to squander your marketing budget.</li>
                <li>You want to gain an edge over your competitors.</li>
              </ul>
            </div>
            <div className="facebook__cell facebook__cell--last">
              <p>
                Advertising on Facebook is an effective marketing tool that can double or triple your income, but it
                takes the help of professionals to get the most out of it.
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className="tik-tok" id="tiktok-ads">
        <h2>What we offer in TikTok:</h2>
        <div className="tik-tok__cards">
          <div className="tik-tok__card">
            <h4>Our experts in TikTok</h4>
            <p>
              Our team members are experts in TikTok advertising and will oversee all aspects of your ad campaign,
              including account management, ad creation, and targeting.
            </p>
            <div className="tik-tok__icon-wrapper">
              <TikTokShape1 />
            </div>
          </div>
          <div className="tik-tok__card">
            <h4>Talent creators</h4>
            <p>
              We partner with talent who will create video content for TikTok to drive TikTok users to your products.
            </p>
            <div className="tik-tok__icon-wrapper">
              <TikTokShape2 />
            </div>
          </div>
          <div className="tik-tok__card">
            <h4>Analyst campaign</h4>
            <p>
              Our analysts will track your campaign performance to help you figure out what new features are available
              and how to use them.
            </p>
            <div className="tik-tok__icon-wrapper">
              <TikTokShape3 />
            </div>
          </div>
        </div>
        <a href="#contact-us"><Button>Contact Us</Button></a>
      </section>
      <div className="light-area light-area--3">
        <div className="light-wrapper">
          <Image
            src="/light-3.png"
            className="light-image"
            width={1920}
            height={2409}
            quality={100}
            alt=""
          />
        </div>
        <section className="rtb" id="rtb">
          <h2>Buying and selling advertising using RTB technology</h2>
          <div className="rtb__row">
            <div className="rtb__descriptions">
              <p>
              Real-time bidding (RTB) is a technology for buying online advertising at online auctions when decisions
              are made on hundreds of auctions in thousandths of a second.
              </p>
              <p>
              The RTB system buys the right placement at the right time—when the price per display meets the
              advertiser's requirements.
              </p>
              <p>RTB allows to increase reach and minimize CPM</p>
            </div>
            <div className="rtb__feautures">
              <ul>
                <li>Auction principle of advertising placement.</li>
                <li>Depending on the sales stage, the audience receives relevant messages from the advertiser.</li>
                <li>Contact and conversion will cost less.</li>
                <li>
                Cross-platform data is used to optimize advertising materials in real time on all communication channels
                at once.
                </li>
                <li>Only high-quality target audience.</li>
              </ul>
            </div>
          </div>
          <div className="rtb__row">
            <div className="rtb__offer">
              <h4>What we offer</h4>
              <div className="rtb__offer-descriptions">
                <p>Using the Facebook social media platform is a great way to attain your business goals.</p>
                <p>
                Facebook marketing can be used for many purposes, from promoting services and products to raising
                awareness of a cause or event. Facebook lets you create ads that target specific audiences based on age
                group, location, interests, and more.
                </p>
              </div>
              <a href="#contact-us"><Button className="button--purple">Contact Us</Button></a>
            </div>
            <div className="rtb__decoration">
              <RtbDecoration />
            </div>
          </div>
        </section>
        <section className="mobile-marketing" id="mobile-marketing">
          <h2>Mobile Marketing</h2>
          <div className="mobile-marketing__grid">
            <p className={manrope.className}>
            Our agency realizes the importance of being mobile and has experience working with brands.
            </p>
            <div className="mobile-marketing__descriptions">
              <p className={manrope.className}>
              We derive the most out of mobile devices. Mobile-first is not just a buzzword but the present and the
              future of digital communications.
              </p>
              <p className={manrope.className}>
              We use all of our experience to reach your target customers at the time they are most likely to be
              interested.
              </p>
            </div>
            <div className="mobile-marketing__approach">
              <h4>Our approach:</h4>
              <ul>
                <li>We tailor campaigns to increase brand value.</li>
                <li>
                We develop a comprehensive mobile marketing strategy that enhances awareness and increases conversion.
                </li>
                <li>
                We develop a comprehensive mobile marketing strategy that enhances awareness and increases conversion.
                </li>
              </ul>
            </div>
            <div className="mobile-marketing__how">
              <h4>How we work:</h4>
              <ul>
                <li>We provide measurable growth.</li>
                <li>
                We use mobile data to track conversions, traffic quality and quantity, page views, and bounce rates.
                </li>
                <li>We create mobile-optimized landing pages with clear calls to action.</li>
                <li>We use platforms that only charge when mobile ads result in a store visit.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <section className="contact-us" id="contact-us">
        <div className="contact-us__form">
          <h1>
            Contact <span>us</span>
          </h1>
          <p>Please enter the information below and we’ll get right back to you. </p>
          <ContactUsForm />
        </div>
        <div className="contact-us__decoration">
          <ContactUsDecoration />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Page;
