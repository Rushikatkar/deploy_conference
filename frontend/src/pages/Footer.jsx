import React from "react";
import '../css/footer.css';

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="section-header">
          <h3>Contact Us</h3>
        </div>
        <div className="row">
          <div className="col-md-7 g-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.8571669418247!2d73.98317777421829!3d17.751367992219496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2387c55555555%3A0x271ed8e1f7937e6!2sArvind%20Gavali%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1711607487068!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

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

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div class="footer-top">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="social-links">
                    <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                    <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                    <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
                    <a href="#" class="google-plus"><i class="fa fa-youtube"></i></a>
                    <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div class="container">
            <div class="copyright">
              &copy; Copyright <a href="">ICIRTES-2024</a>. All Rights Reserved
              Design & Developed By Rushikesh and Prasad
            </div>
          </div>        </div>
      </div>
      <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
      <script src="js/main.js"></script>


    </footer>
  );
}

export { Footer, Contact };  