import React from "react";
import SocialIcons from "./SocialIcons";
import { Link } from "gatsby";

const Footer = ({ linksTitle }) => (
  <footer id="contact-section" className="contact-section">
    <div className="footer-bottom footer-bottom2">
      <div className="copy-right-inner">
        <div className="content-container">
          <div className="row">
            <div className="col-3">
              <div className="copyright">
                <p>
                  © 2018 <a href="/">KAWA</a> <br className="d-md-none" />
                  All Rights Reserved.
                </p>
              </div>
            </div>
            <div className="col-5 col-md-7 d-flex justify-content-center ">
              <Link to="privacy_policy" className="white-color mr-5">
                {linksTitle.privacy}
              </Link>
              <Link to="terms_conditions" className="white-color">
                {linksTitle.terms}
              </Link>
            </div>
            <div className="col-4 col-md-2">
              <div className="social-icons">
                <SocialIcons slideText={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
