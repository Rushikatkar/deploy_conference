import React from "react";
import '../css/contact.css';
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';



function Contact1() {
  return (
    <div className="contact">
      <div className="container">
        <div className="section-header">
    <Header/>
          <h3 class = 'title'>Contact Us</h3>
        </div>
       
        <div className="row justify-content-center">
          <div className="col-md-5 form">
            <form action="" method="post" role="form" className="contactForm">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="form-group col-md-6">
                  <input type="email" className="form-control" placeholder="Your Email" />
                </div>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Subject" />
              </div>
              <div className="form-group">
                <textarea className="form-control" rows="6" placeholder="Message"></textarea>
              </div>
              <div><button type="submit">Send Message</button></div>
            </form>
          </div>
        </div>
      </div>
      </div>

  );
}

export default Contact1;
