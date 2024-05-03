import React from "react";
import '../css/about.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Header from "./Header";

function About (){

        return (
            <div>
                                <Header/>

            <div className="about-root">
            <div id="about">
              <div className="container">
              <div class="container">
                        <header class="section-header">
                            <h3>About Us</h3>
                        </header>
                        <div class="row">
                            <div class="col-md-4 about-col-1">
                                <div class="about-title">  
                                    <h1>Welcome to International Conference on Innovations and Recent Trends in Engineering and Science</h1>
                                    <a href="#">Submit Now</a>
                                </div>
                            </div>
                            <div class="col-md-8 about-col-1">
                                <div class="about-imgs">
                                    <div class="about-img">
                                        <img class="img-fluid" src="img/about.jpg" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 about-des">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="about-des-col">
                                            <div class="about-img">
                                                <img class="img-fluid" src="img/about-1.jpg" />
                                            </div>
                                            <p>
                                                At the Tech Innovation Conference 2024, we strive to foster a community of innovators, thinkers, and visionaries. Join us to explore cutting-edge research, engage in insightful discussions, and network with industry leaders.
                                            </p>
                                            <a href="#">Read More</a>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="about-des-col">
                                            <div class="about-img">
                                                <img class="img-fluid" src="img/about-2.jpg" />
                                            </div>
                                            <p>
                                                Our conference provides a platform for researchers, academics, and practitioners to share their expertise and collaborate on solving real-world challenges. Be a part of the journey towards technological innovation and advancement.
                                            </p>
                                            <a href="#">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                          </div>
            </div>
            </div>
            </div>
          );
        }
        export default About;