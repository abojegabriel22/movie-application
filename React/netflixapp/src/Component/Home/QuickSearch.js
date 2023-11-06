import React from "react";
import './QuickSearch.css';
import { Link } from "react-router-dom";

const QuickSearch = () => {
    return(
        <>
            
            <section className="tv bg-dark" id="tv">
                <div className="tvwriteup">
                    <h1>Enjoy on your TV.</h1>
                    <h2>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>

                </div>
                <div className="tvwatch">
                    <img src="https://i.ibb.co/QX836jD/tv.png" alt="tv"/>
                <div className="fitvideo">
                    <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"></video>
                </div>

                </div>
            </section>


            <section className="tv1 bg-dark" id="tv1">
                <div className="tvwatch2">
                    <img src="https://i.ibb.co/BcJRXWb/mobile-0819.jpg" alt="mobileimage"/>
                    <div className="rectangle">
                        <div className="box">
                            <img src="https://i.ibb.co/L6Hm7C7/boxshot.png" alt="boxshotimage"/>
                            <h3 className="small">Stranger Things</h3>
                            <p className="loading">Downloading...</p>
                            <div className="playbutton"></div>
                        </div>
                    </div>

                </div>
                <div className="secondwriteup">
                    <h1>Download your shows to watch offline.</h1>
                    <h3>Save your favorites easily and always have something to watch.</h3>
                </div>
            </section>

            <section className="left bg-dark" id="left">
                <div className="leftText">
                    <h1>Watch everywhere.</h1>
                    <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                </div>
                <div className="rightText"></div>
            </section>

            <section className="cartoon bg-dark" id="cartoon">
                <div className="tvwatch3">
                    <img src="https://i.ibb.co/SdhTYk6/cartoon-Img.png" alt="cartoon-Img"/>
                </div>
                <div className="thirdwriteup">
                    <h1>Create profiles for kids.</h1>
                    <h3>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h3>
                </div>
            </section>

            <section className="faq bg-dark" id="faq">
                <h1>Frequently Asked Questions</h1>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header white">
                        <button className="accordion-button collapsed text-gray" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        <h2>What is Netflix?</h2>
                        </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse gray" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body text-white">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. <br/><br/>
                            You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed text-gray" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <h2>How much does Netflix cost?</h2>
                        </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body text-white">Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦1,200 to ₦4,400 a month. No extra costs, no contracts.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed text-gray" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <h2>Where can I watch?</h2>
                        </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body text-white">Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br/><br/>You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed text-gray" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            <h2>How do I cancel?</h2>
                        </button>
                        </h2>
                        <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body text-white">Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed text-gray" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                            <h2>What can I watch on Netflix</h2>
                        </button>
                        </h2>
                        <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body text-white">Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed text-gray" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                            <h2>Is Netflix good for kids?</h2>
                        </button>
                        </h2>
                        <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body text-white">NThe Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. <br/><br/>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</div>
                        </div>
                    </div>
                </div>
                <div className="down">
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    
                    <div className="last">
                        <div className="email">
                            <input type="email" placeholder="Email address" className="myColor1"/>
                        </div>
                        <Link to="/register" className="btn2">
                            <button className="btn2A">Get Started</button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
export default QuickSearch