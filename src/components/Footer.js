import React from "react";
import "../assets/styles/footer.css";

function Footer() {
  return (
    <footer className="site-footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <h6>About</h6>
          <p className="text-justify">MEDIXX.COM is hjjfjz hfvbhjzsjhjfbhzd jhzsdbfkjadsbhkjfhna sdznhbfvbsdzgfvbs bzedfhvbadhfb szdhbfvzhsdb kjbhzewjkfzwe hjvehjvf\zb</p>
        </div>

        <div className="col-xs-6 col-md-3">
          <h6>Categories</h6>
          <ul className="footer-links">
            <li><a href="#">Health Related News</a></li>
            <li><a href="#">Book Appointment</a></li>
            <li><a href="#">Maternity Education</a></li>
            <li><a href="#">Java</a></li>
          </ul>
        </div>

        <div className="col-xs-6 col-md-3">
          <h6>Quick Links</h6>
          <ul className="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Contribute</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
