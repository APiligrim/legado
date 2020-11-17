import React from 'react'; 
import  {Container, Row, Col} from 'react-bootstrap';
import  Menu from './navbar.js'
import 'bootstrap/dist/css/bootstrap.min.css';

import owl from './img/owl.png';
import './landing-page.css'

function LandingPage() {
    return (
        <div className='LandingPage'>
            <header>
                <Menu/>     
            </header>           
            <Container>
                {/* Columns are always 50% wide, on mobile and desktop */}
                <Row >
                    <Col xs={6}>
                    1 of 3
                    Lorem ipsum dolor sit amet
                    </Col>
                    <Col xs={6}>   
                    <img src={owl} className='owl'/> 
                    </Col>
                </Row>
            </Container> 
            <Container>
            {/* Columns are always 50% wide, on mobile and desktop */}
            <Row >
                <Col xs={6}>
                1 of 3
                Lorem ipsum dolor sit amet
                </Col>
                <Col xs={6}>   
                <img src={owl} className='owl'/> 
                </Col>
            </Row>
        </Container>
        </div>
    );
}

export default LandingPage;