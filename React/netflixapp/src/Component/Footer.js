import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <>
            <footer id="footer">
                <div className="footP">
                    <p>Read about Netflix TV shows and movies and watch bonus videos on Tudum.com.</p>
                </div>
                <p className="footP">Questions? Contact us.</p>
                <div className="contact">
                    <div className="first">
                        <ul>
                            <a href="https://help.netflix.com/en/contactus"><li>FAQ</li></a>
                            <a href="#"><li>Account</li></a>
                            <a href="#"><li>Jobs</li></a>
                            <a href="#"><li>Privacy</li></a>
                            <a href="#"><li>Contact Us</li></a>
                            <a href="#"><li>Only on Netflix</li></a>
                        </ul>

                            <p className="footp">Netflix Nigeria</p>
                    </div>
                    <div className="second">
                        <ul>
                            <a href="#"><li>Gift Card Terms</li></a>
                            <a href="#"><li>Media Center</li></a>
                            <a href="#"><li>Ways to Watch</li></a>
                            <a href="#"><li>Cookie Preferences</li></a>
                            <a href="#"><li>Speed Test</li></a>
                        </ul>
                    </div>
                    <div className="third">
                        <ul>
                            <a href="#"><li>Help Center</li></a>
                            <a href="#"><li>Investor Relations</li></a>
                            <a href="#"><li>Terms of Use</li></a>
                            <a href="#"><li>Corporate Information</li></a>
                            <a href="#"><li>Legal Notices</li></a>
                        </ul>
                    </div>
                </div>
                
            </footer>
        </>
    )
}
export default Footer