import React, { Component } from "react";
import {apiUrl, notify} from './helpers';
import axios from 'axios';
import Header from "./pages/landing-page/components/navbar";
//import Subscribe from './pages/landing-page/components/subscribe.js'
import SubscribeNoMail from './pages/landing-page/components/subscribe-nomail.js'
import "./App.css";

import Footer from './pages/landing-page/components/footer.js';
import owl from './pages/landing-page/img/owl.png';
import books from './pages/landing-page/img/books.gif';
import skills from './pages/landing-page/img/skills.gif';
import community from './pages/landing-page/img/community.gif';
import liberalArts from './pages/landing-page/img/liberal-arts.png';
import creativeArts from './pages/landing-page/img/creative-arts.png';
import business from './pages/landing-page/img/business.png';
import stem from './pages/landing-page/img/stem.png';
import discord from './pages/landing-page/img/discord.png';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      loading: false
    }
  }
  handleLoadingState = loading => {
    this.setState({loading: loading});
  }

  handleSendEmail = email =>{
    this.handleLoadingState(true)
    axios.post(`${apiUrl}/subscribe`, {
      email: email
    }).then(res => {
      if(res.data.success) {
        notify('success', 'Subscribed!', res.data.success);
        this.setState({email: ''});
        this.handleLoadingState(false);
      } else {
        notify('error', 'Unable to subscribe!', res.data.error);
        this.handleLoadingState(false);
      }

    }).catch(error => {
      // check if the post request worked otherwise it will impact the user
      notify('error', 'Error. Please try again later.' , error.message);
      this.handleLoadingState(false)
    });
  }
  handleOnChangeEmail = email => {
    this.setState({
      email: email
    })
  }

  render(){
  return (
    <div className="App">
      <Header />
    
      <h3 style={{ padding: "40px" }}>Thanks For Reading!</h3>
      
      <div class="hero main-title">
        <h1> Real World Projects <br/>
        For Your Courses <br/>
        <a className="signup-btn button-text"> Learn More</a> 
        </h1>
        
        <article> 
        <img className="owl" src={owl}></img>
        </article>
      </div>

      <div class="hero2"> 
        <h1 className="section-title about-title">About Legado</h1>
        <p className="paragraph-text">Legado walks you through exercises built for your college classes so you can make the most of your course through hands-on learning. 
        When you finish a Legado project, you'll not only have a better understanding of your course content but also have a new addition 
         to your portfolio that shows your mastery of in-demand skills.</p>
      </div>

      <div> 
        <h1 className="section-title center-text"> How it Works</h1>
          <div className="hero3">
            <article> 
            <img className="steps" src={books}></img>
            </article>
            <article> 
            <img className="steps" src={skills}></img>
            </article>
            <article> 
            <img className="steps" src={community}></img>
            </article>
          </div>
      </div>

      <div> 
        <h1 className="section-title">Selection of <br/> Subject Tracks</h1>
        <div className="hero4"> 
          <article> 
          <img className="track grow-img" src={business}></img>
          </article>
          <article> 
          <img className="track grow-img" src={stem}></img>
          </article>
        </div>
        <div className="hero5"> 
        <article> 
        <img className="track grow-img" src={liberalArts}></img>
        </article>
        <article> 
        <img className="track grow-img" src={creativeArts}></img>
        </article>
      </div>
      </div>
      
      <SubscribeNoMail/>
      <div>
        <article> 
            <img className="hero6 discord grow-img" src={discord}></img>
        </article>
      </div>
      
      <Footer/>
    </div>
  );
}
}
export default App;

// <Subscribe email={this.state.email}  handleOnChangeEmail={this.handleOnChangeEmail} handleSendEmail={this.handleSendEmail}/>