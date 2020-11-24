import React from 'react'; 
//import Subscribe from './subscribe';
import './subscribe-nomail.css'

const SubscribeNoMail= ()=>{
    const style = {
        width: '95%',
        padding: '1px 2px'
      };
    return(
    <div> 
    <section class="widget widget_blog_subscription">
        <form action="https://subscribe.wordpress.com" method="post" accept-charset="utf-8" id="subscribe-blog">
            <p>Subscribe to Stay Updated</p>
            <p className='small-text'>Sign up to get updates on new projects,<br/> learning opportunities, events and more!</p>
            <p>
            <input type="text" name="email" style={style} placeholder="Enter your email address" value="" id="subscribe-field"/>
            </p>
            <p>
            <input type="hidden" name="action" value="subscribe"/>
            <input type="hidden" name="blog_id" value="109214814"/>
            <input type="hidden" name="source" value="https://rosaliedemo.wordpress.com/"/>
            <input type="hidden" name="sub-type" value="widget"/>
            <input type="hidden" name="redirect_fragment" value="blog_subscription-2"/>
            <input type="hidden" id="_wpnonce" name="_wpnonce" value="b0a1e6c4b6"/>
            <input type="submit" value="Submit"/>
            </p>
        </form>
    </section>
    </div>
    )
}

export default SubscribeNoMail;