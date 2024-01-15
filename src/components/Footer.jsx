import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css"
import {
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
  FaFacebook,
} from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { LuPhoneCall } from "react-icons/lu";
import { RiMailCheckLine } from "react-icons/ri";

import { Divider } from "@mui/material";

import styles from "../styles/Footer.module.css";

const Footer = () => {
  var docWidth = document.documentElement.offsetWidth;

  [].forEach.call(document.querySelectorAll("*"), function (el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  });
  return (
    <footer className={styles.footerClass}>
      <div className={styles.outerContainer}>
        <div className={styles.container1}>
          <h1>HelloProject</h1>
          <p>@all rights reserved</p>
          <div className={styles.insideContainer1}>
            <div className={styles.emailBox} style={{wordWrap: "break-word"}}>
              <RiMailCheckLine className={styles.Icon} />

              <h4>Email</h4>
              <a href="" style={{  textDecoration: "none", color: "white" }}>
                <p style={{wordWrap: "break-word"}}>rahul@gmail.com</p>
              </a>
            </div>
            <div className={styles.callBox}>
              <LuPhoneCall className={styles.Icon} />
              <h4>Contact Number</h4>
              <a
                type=""
                style={{ textDecoration: "none", color: "white" }}
                href=""
              >
                +91 8130902286
              </a>
            </div>
            <div className={styles.addressBox}>
              <SlLocationPin className={styles.Icon} />
              <h4>Address</h4>
              <address>
                A-3, Sector-8 <br />
                Rohini <br />
                Delhi-110085 <br />
              </address>
            </div>
            
          </div>
        </div>

        <div className={styles.container2}>
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href={"/#about"}>About Us</a>
            </li>
            <li>
              <a href={"/#brands"}>Brands</a>
            </li>
            <li>
              <a href={"/contact"}>Contact</a>
            </li>
            <li>
              <a href={"/feedback"}>Feedback</a>
            </li>
          </ul>
        </div>
        <div className={styles.container3}>
          <h2>Sign up for a Cover Letter</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
            accusamus?
          </p>
          <form action="">
            <p>Email</p> <input type="email" name="" id="" />
            <div className={styles.btn}>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <Divider
        style={{
          background: "rgb(116, 116, 116)",
          boxShadow: "0px 1px 1.5px 0.2px",
        }}
        variant="middle"
      />
      <div className={styles.followBox}>
        <h2>Follow Us On</h2>
        <div className={styles.iconBox}>
          <FaLinkedin className={styles.socialLogo}/>
          <FaInstagram className={styles.socialLogo}/>
          <FaXTwitter className={styles.socialLogo}/>
          <FaFacebook className={styles.socialLogo}/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
