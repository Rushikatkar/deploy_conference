
import React from "react";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../css/intro.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Intro() {
    const options = {
        loop: true,
        margin: 10,
        mouseDrag: false,
        touchDrag: false,
        items: 1,
        animateOut: 'fadeOut', // Add fade out animation
        animateIn: 'fadeIn', // Add fade in animation
        autoplay: true,
        autoplayTimeout: 3000, // Set autoplay timeout (milliseconds)
        autoplayHoverPause: true, // Pause autoplay on hover
        smartSpeed: 1000, // Animation speed
        navSpeed: 1000, // Navigation speed
        dotsSpeed: 1000, // Dots speed
        dragEndSpeed: 1000, // Drag end speed
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    };
    return (
        <div className="intro-root">
            <OwlCarousel className='owl-theme' {...options}>
                <div>
                    <div class='item'>
                        <div className="carousel-image"><img src="img/slider-1.jpg" alt="" /></div>
                        <div className='carousel-content'>
                            <h2>Join Us at the International Conference 2024</h2>
                            <p>
                                Explore the latest research and innovations in [Field/Area of Study] at our annual international conference. Connect with experts, present your research, and engage in discussions that shape the future of [Field/Area of Study].
                            </p>
                            <Link to="/uploadfile" className="btn-get-started scrollto">Submit Paper</Link>
                        </div>
                    </div>    </div>
                <div>

                    <div class='item'>
                        <div className="carousel-image"><img src="img/slider-2.jpg" alt="" /></div>
                        <div className='carousel-content'>
                            <h2>Join Our Community</h2>
                            <p>
                                Connect with like-minded individuals passionate about innovation and collaboration. Whether you're a researcher, student, or industry professional, our community welcomes you to be a part of something bigger.
                            </p>
                            <Link to="/uploadfile" className="btn-get-started scrollto">Submit Paper</Link>
                        </div>
                    </div>    </div>
                <div>


                    <div class='item'>
                        <div className="carousel-image"><img src="img/slider-3.jpg" alt="" /></div>
                        <div className='carousel-content'>
                            <h2>Call for Papers: Share Your Research with the World</h2>
                            <p>
                                Showcase your latest findings and discoveries to a global audience. Submit your research paper to our conference and contribute to the advancement of knowledge in [Field/Area of Study]. Don't miss this opportunity to make an impact!
                            </p>
                            <Link to="/uploadfile" className="btn-get-started scrollto">Submit Paper</Link>
                        </div>
                    </div>    </div>


            </OwlCarousel>;
        </div>


    )
}
export default Intro;