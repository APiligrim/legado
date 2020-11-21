import React, { Component } from "react";
import Header from "./pages/landing-page/components/navbar";
import Subscribe from './pages/landing-page/components/subscribe.js'
import "./App.css";

import owl from './pages/landing-page/img/owl.png';
import books from './pages/landing-page/img/books.gif';
import skills from './pages/landing-page/img/skills.gif';
import community from './pages/landing-page/img/community.gif';
import liberalArts from './pages/landing-page/img/liberal-arts.png';
import creativeArts from './pages/landing-page/img/creative-arts.png';
import business from './pages/landing-page/img/business.png';
import stem from './pages/landing-page/img/stem.png';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      loading: false
    }
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
        <h1> Legado Educational <br/>
        Platform is Here <br/>
        <a className="signup-btn button-text"> Get Started </a>
        
        
        </h1>
        

        <article> 
        <img className="owl" src={owl}></img>
        </article>
      </div>

      <div class="hero2"> 
        <h1 className="section-title">About Legado</h1>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, 
        similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.  </p>
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

      <Subscribe email={this.state.email} handleOnChangeEmail={this.handleOnChangeEmail} />
    </div>
  );
}
}

export default App;

// <img src={logo} className="App-logo" alt="logo" />

// <div> he standard Lorem Ipsum passage, used since the 1500s
// "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

// Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
// "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

// 1914 translation by H. Rackham
// "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

// Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
// "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."

// 1914 translation by H. Rackham</div>