import React, { Component } from "react";
import {apiUrl, notify} from './helpers';
import axios from 'axios';
import Header from "./pages/landing-page/components/navbar";

//import SubscribeNoMail from './pages/landing-page/components/subscribe-nomail.js'
//import MailchimpEmail from './pages/landing-page/components/mailchimp-form.js'
import "./App.css";

import Footer from './pages/landing-page/components/footer.js';
import owl from './pages/landing-page/img/owl1.png';
import books from './pages/landing-page/img/books.gif';
import skills from './pages/landing-page/img/skills.gif';
import community from './pages/landing-page/img/community.gif';
import liberalArts from './pages/landing-page/img/liberal-arts.png';
import creativeArts from './pages/landing-page/img/creative-arts.png';
import business from './pages/landing-page/img/business.png';
import stem from './pages/landing-page/img/stem.png';
import discord from './pages/landing-page/img/discord.png';
import SubscribeNoMail from "./pages/landing-page/components/subscribe-nomail";
import { any } from "prop-types";

class App extends React.Component {

  render(){
  return (
    <div className="App">
      <div class="menu">
        <Header/>
      </div>
     
      <h3 style={{ padding: "40px" }}>Thanks For Reading!</h3>
      
      <div class="hero main-title">
        <h1 id="main" class="main-title"> Real World Projects <br/>
        For Your Courses <br/>
        <a href="#how-it-works" className="signup-btn button-text"> Learn More</a> 
        </h1>
        <article> 
        <img className="owl" src={owl}></img>
        </article>
      </div>

      <div class="hero2"> 
        <h1 className="section-title about-title">About <br/> Legado</h1>
        <p id ="about" className="paragraph-text">Legado walks you through exercises built for your college classes so you can make the most of your course through hands-on learning. 
        When you finish a Legado project, you'll not only have a better understanding of your course content but also have a new addition 
         to your portfolio that shows your mastery of in-demand skills.</p>
      </div>

      <div> 
        <h1 id="how-it-works" className="section-title center-text"> How it Works</h1>
          <div className="hero3">
            <article> 
            <img className="steps" src={books}></img>
            </article>
            <article> 
            <img className="steps" src={skills}></img>
            </article>
            <article> 
            <img className="steps step3" src={community}></img>
            </article>
          </div>
      </div>
      <div>
      <h1 className="section-title  project">Build a Sample <br/> Economics Project</h1>
      <a id="myLink" href="https://legado.thinkific.com/courses/learn-the-basics-of-fred" target="_blank" className="signup-btn button-text center-text"> Start Project</a> 
      </div>
      <div> 
        <h1 className="section-title margin-fix">Selection of <br/> Subject Tracks</h1>
        <div className="hero4"> 
          <article id="myLink" href="https://legado.thinkific.com/courses/learn-the-basics-of-fred" target="_blank" > 
          <img className="track grow-img" src={business}></img>
          </article>
          <article> 
          <img className="track grow-img" src={stem}></img>
          </article>
        </div>
        <div className="hero5"> 
        <article> 
        <img  className="track grow-img" src={liberalArts}></img>
        </article>
        <article> 
        <img   className="track grow-img" src={creativeArts}></img>
        </article>
      </div>
      </div>
      
      <SubscribeNoMail/>
      <div>
        <article>
          <a id="myLink" href="https://discord.gg/cwGbqDac" target="_blank">
            <img className="hero6 discord grow-img" src={discord}></img>
          </a>
        </article> 
        
       
      </div>
      
      <Footer/>
    </div>
  );
}
}
export default App;

// componentDidMount(){
//   console.log('Loading')


// window.gapi.load('auth2', ()=>{
//   window.gapi.auth2.init({
//     client_id: '417921823741-f1kr1rpt1qolh7amd76v0nt46gtj8462.apps.googleusercontent.com'
//   })
//   console.log('Api inited')

//   window.gapi.load('signin2', ()=>{
//    const params ={
//     onSuccess: () =>{
//       console.log('User has finished singing in!')
//       }
//     }
//       window.gapi.signin2.render('loginButton', params)
//     })
//   })
// }