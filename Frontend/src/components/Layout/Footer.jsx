import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={ isAuthorized ? "footerShow" : "footerHide" }>
      <div className="footer-column">
        <div>Connect with us</div>
        <div>
          <Link to={ "" } target="_blank">
            <FaFacebookF />
          </Link>
          <Link to={ "" } target="_blank">
            <FaLinkedin />
          </Link>
          <Link to={ "" } target="_blank">
            <FaYoutube />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;