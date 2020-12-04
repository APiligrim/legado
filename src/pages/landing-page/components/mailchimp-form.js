import React, { Component } from 'react';
// import the component
import Mailchimp from 'react-mailchimp-form'
import './subscribe-nomail.css' 
class MailchimpEmail extends Component {
  render() {
    return (
        <Mailchimp
        action='https://gmail.us7.list-manage.com/subscribe/post?u=0f064048152fcee5cbb82407a&amp;id=392ce457fe'
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Enter your email...',
            type: 'email',
            required: true
          }
        ]}

        />
    );
  }
}
 
export default MailchimpEmail;