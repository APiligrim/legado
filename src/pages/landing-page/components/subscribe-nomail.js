import React from 'react'; 
import MailchimpEmail from './mailchimp-form.js'
import './subscribe-nomail.css'

const SubscribeNoMail= ()=>{
    const style = {
        width: '95%',
        padding: '1px 2px'
      };
    return(
    <div> 
    <section class="widget widget_blog_subscription">
        <form action="https://gmail.us7.list-manage.com/subscribe/post?u=0f064048152fcee5cbb82407a&amp;id=392ce457fe" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <p>Subscribe to Stay Updated</p>
            <p className='small-text'>Sign up to get updates on new projects,<br/> learning opportunities, events and more!</p>
            <MailchimpEmail/>
        </form>
    </section>
    </div>
    )
}

export default SubscribeNoMail;
// <p>
//             <input type="text"  style={style} placeholder="Enter your email address" value="" id="subscribe-field" name="b_0f064048152fcee5cbb82407a_392ce457fe"/>
//             </p>
//             <p>
//             <input type="hidden" name="action" value="subscribe"/>
//             <input type="hidden" name="blog_id" value="109214814"/>
            
//             <input type="hidden" name="sub-type" value="widget"/>
//             <input type="hidden" name="redirect_fragment" value="blog_subscription-2"/>
//             <input type="hidden" id="_wpnonce" name="_wpnonce" value="b0a1e6c4b6"/>
//             <input type="submit" value="Submit"/>
//             </p>
// <input type="hidden" name="source" value="https://rosaliedemo.wordpress.com/"/>
// <!-- Begin Mailchimp Signup Form -->
// <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css">
// <style type="text/css">
// 	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}
// 	/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
// 	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
// </style>
// <div id="mc_embed_signup">
// <form action="https://gmail.us7.list-manage.com/subscribe/post?u=0f064048152fcee5cbb82407a&amp;id=392ce457fe" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
//     <div id="mc_embed_signup_scroll">
// 	<label for="mce-EMAIL">Subscribe</label>
// 	<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
//     <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
//     <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_0f064048152fcee5cbb82407a_392ce457fe" tabindex="-1" value=""></div>
//     <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
//     </div>
// </form>
// </div>

// <!--End mc_embed_signup--></div>