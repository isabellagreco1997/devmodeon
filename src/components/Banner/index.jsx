import React from 'react';
import './styles.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__each">
        <div className="banner__each__content-wrapper bannerMask">
          <div className='wrapper'>
            {/* Banner Image Start */}
            <div className="banner__image">
              <img
                src="https://makers.tech/wp-content/uploads/2022/01/B2C-LP-Hero-scaled-1.jpg"
                width="1920"
                alt="Hero Banner"
              />
                <div className="banner__gradient"></div>
            </div>
            {/* Banner Image End */}
            <div className="banner__content">
              {/* Banner Title Start */}
              <h1 className="banner__title aos-init aos-animate" data-aos="fade-down" data-aos-delay="200">
                Change your career. Transform your life.
              </h1>
              {/* Banner Title End */}
              {/* Banner Description */}
              <div className="aos-init aos-animate" data-aos="fade-down" data-aos-delay="400">
                <div className="banner__description">
                  <p>Unlock your potential and become a sought-after software engineer.</p>
                </div>
                <div className="btn-wrapper row gx-3">
                  <div className="col-auto mb-3">
                    <a className="btn" href="#next__section">
                      Learn More
                    </a>
                  </div>
                  <div className="col-auto mb-3">
                    <a className="btn" href="https://www.eventbrite.co.uk/e/learn-to-code-at-makers-information-session-tickets-368212241727">
                      Join our live Q&amp;A session
                    </a>
                  </div>
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
