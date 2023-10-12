import React, { useState } from "react";
import { FooterStyle } from "../styles/FooterStyle";

import { AiOutlineCopyright } from "react-icons/ai";
import { BsDot } from "react-icons/bs";

import ShowPolicy from "../popUpsData/ShowPolicy";
import ShowTermsCondition from "../popUpsData/ShowTermsCondition";
import ShowReport from "../popUpsData/ShowReport";

const Footer = () => {
  const [showPolicy, setShowPolicy] = useState(false);
  const [showTermCondition, setShowTermCondition] = useState(false);
  const [showReport, setShowReport] = useState(false);

  const closePolicy = () => setShowPolicy(false);
  const closeTermCondition = () => setShowTermCondition(false);
  const closeReport = () => setShowReport(false);

  return (
    <>
      <FooterStyle>
        <footer>
          <div className="container grid grid-four-column">
            <div className="footer-about">
              <img src="./images/logo2.png" width="160px" alt="logo" />
              <p>
                Connecting Concerned People <br /> With Concerned Organizations
              </p>
            </div>
            <div className="footer-subscribe">
              <h3>Quick Links</h3>
              <ul>
                <li className="links-element">
                  <BsDot className="icons" />
                  <p>Home</p>
                </li>
                <li className="links-element">
                  <BsDot className="icons" />
                  <p>My Profile</p>
                </li>
                <li className="links-element">
                  <button className="logout-btn"> Logout </button>
                </li>
              </ul>
            </div>
            <div className="footer-social">
              <h3>Developer Team</h3>
              <a
                href="https://www.linkedin.com/in/ashiq-noor-sudheer/"
                target="_blank"
              >
                Ashiq Noor Sudheer
              </a>
              <a
                href="https://www.linkedin.com/in/priyanshu-pattanaik/"
                target="_blank"
              >
                Priyanshu Pattanaik
              </a>
              <a
                href="https://www.linkedin.com/in/vishal-kumar-yadav-8085a3232/"
                target="_blank"
              >
                Vishal Kumar Yadav
              </a>
            </div>
            <div className="footer-contact">
              <h3>Customer Support</h3>
              <p onClick={() => setShowPolicy(true)}>PRIVACY POLICY</p>
              {showPolicy && <ShowPolicy closeModal={closePolicy} />}
              <p onClick={() => setShowTermCondition(true)}>
                TERMS & CONDITION
              </p>
              {showTermCondition && (
                <ShowTermsCondition closeModal={closeTermCondition} />
              )}
              <p onClick={() => setShowReport(true)}>REPORT ISSUE</p>
              {showReport && <ShowReport closeModal={closeReport} />}
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="container copy-right">
              <p>
                Copyright&nbsp;
                <AiOutlineCopyright />
                &nbsp;
                {new Date().getFullYear()} Volunteer. All Rights Reserved
                Copyright <AiOutlineCopyright /> 
                {new Date().getFullYear()} Volunteer. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </FooterStyle>
    </>
  );
};

export default Footer;
