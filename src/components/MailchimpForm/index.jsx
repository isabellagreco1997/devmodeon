import React from 'react';

class MailchimpForm extends React.Component {
    componentDidMount() {
        const script = document.createElement("script");

        script.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
        script.async = true;

        document.body.appendChild(script);
    }

    render() {
        return (
            <div style={{display:'flex', justifyItems:'center'}}>
            <div dangerouslySetInnerHTML={{ __html: `
                <link href="//cdn-images.mailchimp.com/embedcode/classic-071822.css" rel="stylesheet" type="text/css">
                <style type="text/css">
                    #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif;}
                    /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
                    We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
                </style>
                <div id="mc_embed_signup">
                    <form action="https://devmodeon.us14.list-manage.com/subscribe/post?u=8c3a55a98ba5d66b2986a9a41&amp;id=c9272aa595&amp;f_id=00f144e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                        <div id="mc_embed_signup_scroll">
                        <h2>Subscribe</h2>
                        <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                        <div class="mc-field-group">
                            <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span></label>
                            <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>
                            <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
                        </div>
                        <div id="mce-responses" class="clear foot">
                            <div class="response" id="mce-error-response" style="display:none"></div>
                            <div class="response" id="mce-success-response" style="display:none"></div>
                        </div>
                        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_8c3a55a98ba5d66b2986a9a41_c9272aa595" tabindex="-1" value=""></div>
                        <div class="optionalParent">
                            <div class="clear foot">
                                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
            `}} style={{width:'100%'}}/>
            </div>
        );
    }
}

export default MailchimpForm;
