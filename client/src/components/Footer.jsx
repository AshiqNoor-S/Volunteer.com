import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import {
  AiOutlineCopyright,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsDot } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <footer>
          <div className="container grid grid-four-column">
            <div className="footer-about">
              <img src="./images/logo2.png" width="160px" />
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
              <h3>Follow Us</h3>
              <div className="footer-social--icons">
                <div>
                  <NavLink
                    to="https://www.linkedin.com/in/vishal-kumar-yadav-8085a3232/"
                    target="_blank"
                  >
                    <AiFillLinkedin className="icons" />
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="https://www.instagram.com/vishal._.104/"
                    target="_blank"
                  >
                    <FaInstagram className="icons" />
                  </NavLink>
                </div>
                <div>
                  <NavLink to="https://github.com/Vishal-1004" target="_blank">
                    <AiFillGithub className="icons" />
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3>Customer Support</h3>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
              <p>REPORT ISSUE</p>
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="container copy-right">
              <p>
                Copyright
                <AiOutlineCopyright />
                {new Date().getFullYear()} Volunteer. All Rights Reserved
              </p>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 3rem 0 1rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 1.5rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    ul {
      padding: 0 !important;
    }

    .footer-about {
      img {
        margin: 1rem 0 2rem 0;
      }
    }

    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }

    .links-element {
      display: flex;
      justify-content: left;
      align-items: center;

      .icons {
        color: ${({ theme }) => theme.colors.white};
        opacity: 0.7;
        font-size: 2rem;
      }

      .logout-btn {
        font-size: 1.3rem;
        text-decoration: none;
        max-widht: auto;
        background-color: rgb(98 84 243);
        color: rgb(255, 255, 255);
        border: none;
        border-radius: 8px;
        margin-top: 0.8rem;
        padding: 0.6rem 1.3rem;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease 0s;
        -moz-transition: all 0.3s ease 0s;
        -o-transition: all 0.3s ease 0s;

        &:hover,
        &:active {
          box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
          box-shadow: ${({ theme }) => theme.colors.shadowSupport};
          transform: scale(0.96);
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 1rem;

    hr {
      margin-bottom: 1rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }

    .copy-right {
      text-align: center;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 3rem 0 3rem 0;
    }

    .footer-bottom--section {
      padding-top: 1rem;
    }
  }
`;

export default Footer;
