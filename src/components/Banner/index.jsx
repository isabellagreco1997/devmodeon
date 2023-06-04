import React from 'react';
import './styles.css';
import Image from './banner.webp'
import Duck from './duck.gif'

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__each">
        <div className="banner__each__content-wrapper bannerMask">
          <div className='wrapper'>
            <div className="banner__image">
              <img
                src={Image}
                width="1920"
                alt="Hero Banner"
              />
                <div className="banner__gradient"></div>
            </div>
            <div className="banner__content">
              <img className="duck" src={Duck} />
              <h1 className="banner__title aos-init aos-animate" data-aos="fade-down" data-aos-delay="200">
              I help people to get into tech
              </h1>
              <div className="aos-init aos-animate" data-aos="fade-down" data-aos-delay="400">
                <div className="banner__description">
                  <p>Ready to level up your life? Unlock the digital realm and let's code your way to success together!</p>
                </div>
                <div className="btn-wrapper row gx-3">
                  <div className="col-auto mb-3">
                    <a className="btn" href="https://www.tiktok.com/@isabellagrecodev">
                      Follow me on TikTok
                    </a>
                    <a className="btn" href="https://www.tiktok.com/@isabellagrecodev">
                      Help me with my LinkedIn!
                    </a>
                  </div>
                  {/* <div className="col-auto mb-3">
                    <a className="btn" href="https://www.eventbrite.co.uk/e/learn-to-code-at-makers-information-session-tickets-368212241727">
                      Join our live Q&amp;A session
                    </a>
                  </div> */}
                </div>
              </div>
              {/* Banner Description End*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
