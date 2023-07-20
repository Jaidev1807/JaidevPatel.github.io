import React from "react";
import "./Footer.css";
import {
  FaHome,
  FaPhone,
  FaGithub,
  FaMailBulk,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Toronto , Ontario</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              (437)-477-4287
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              jaidevpatel1807@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>
            This is me Jaidev Patel.Computer Engineer.I enjoy developing new
            projects and design challenges.
          </p>
          <div className="social">
            <a href="https://github.com/Jaidev1807">
              <FaGithub
                size={30}
                style={{ color: "#fff", marginLeft: "1rem" }}
              />
            </a>
            <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3B1P7JkLfEToq7PStf9%2Fu7%2BQ%3D%3D">
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginLeft: "1rem" }}
              />
            </a>
            <a href="https://twitter.com/Jaidev21819627">
              <FaTwitter
                size={30}
                style={{ color: "#fff", marginLeft: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
