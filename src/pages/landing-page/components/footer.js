import React from 'react';
import './footer.css';
import logoFooter from '../img/footer-logo.png'
const Footer=() => {
    return (
    <div>
        <footer class='footer'>           
       

        <div> 
            <div className="hero3">
            <article> 
            <img className="logo" src={logoFooter}></img>
            </article>
            <article> 
            <p id="contact" class='header-text text pointer'> Contact Us</p>
            <p class='p-text text pointer'>legadoteam@gmail.com</p>
            </article>
            <article> 
            <p class='header-text text pointer' > Join Discord</p>
            <p class='text p-text'>© 2020 Legado Learning</p>
            </article>
            </div>
        </div>
    </footer>
    </div>
    );

};
export default Footer
