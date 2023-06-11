import React, {useState} from 'react';


function MailchimpForm() {
    const [email, setEmail] = useState('');
  
    const url = 'https://devmodeon.us14.list-manage.com/subscribe/post?u=8c3a55a98ba5d66b2986a9a41&id=c9272aa595';
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Perform any necessary validation on the email here
  
      // Subscribe to Mailchimp
      // You can customize the merge fields and other parameters as needed
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
        }),
      })
        .then((response) => {
          // Handle the response from Mailchimp
          if (response.ok) {
            console.log('Subscription successful!');
            // Perform any actions for a successful subscription
          } else {
            console.error('Subscription failed!');
            // Handle the error or display an error message to the user
          }
        })
        .catch((error) => {
          console.error('An error occurred:', error);
          // Handle the error or display an error message to the user
        });
  
      // Clear the input field after submission
      setEmail('');
    };
  
    return (
      <div id="mc_embed_signup">
        <form onSubmit={handleSubmit} className="validate" target="_blank" noValidate>
          <div id="mc_embed_signup_scroll">
            <h2>Subscribe</h2>
            <div className="indicates-required">
              <span className="asterisk">*</span> indicates required
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                Email Address <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                required
              />
              <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
            </div>
            <div id="mce-responses" className="clear foot">
              <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
              <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
            </div>
            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
              <input type="text" name="b_8c3a55a98ba5d66b2986a9a41_c9272aa595" tabIndex="-1" value="" />
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                <p className="brandingLogo">
                  <a href="http://eepurl.com/hVwEvT" title="Mailchimp - email marketing made easy and fun">
                    <img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" alt="Mailchimp Logo" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
  
  export default MailchimpForm