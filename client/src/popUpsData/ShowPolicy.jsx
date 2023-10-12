import React from "react";
import { GoDotFill } from "react-icons/go";
import { PopUpStyle } from "../styles/PopUpStyle";

const ShowPolicy = ({ closeModal }) => {
  return (
    <PopUpStyle>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
        <h2>Privacy Policies</h2>
        <h3 style={{ color: "black" }}>Introduction</h3>
        <p>
          Welcome to Volunteer! This Privacy Policy is designed to help you
          understand how we collect, use, disclose, and safeguard your personal
          information. By using our website, you consent to the practices
          outlined in this policy.
        </p>
        <h3 style={{ color: "black" }}>Information We Collect</h3>
        <p>
          <GoDotFill />
          <strong>Personal Information: </strong>
          We may collect your name, email address, location data, and any other
          information you provide when you register, log in, or interact with
          our platform.
        </p>
        <p>
          <GoDotFill />
          <strong>Images and Location Data: </strong>
          When you upload images, our platform may automatically collect
          location data to identify and address the problems you report.
        </p>
        <h3 style={{ color: "black" }}>How We Use Your Information</h3>
        <p>We use your information for the following purposes:</p>
        <p>
          <GoDotFill />
          To facilitate the reporting of problems and connect users with
          relevant organizations.
        </p>
        <p>
          <GoDotFill />
          To send notifications, updates, and communications regarding reported
          problems.
        </p>
        <p>
          <GoDotFill />
          To analyze and improve our website and services.
        </p>
        <h3 style={{ color: "black" }}>Disclosure of Your Information</h3>
        <p>
          <GoDotFill />
          NGOs or municipal corporations responsible for addressing the problems
          you report.
        </p>
        <p>
          <GoDotFill />
          Service providers and partners who help us deliver our services.
        </p>
        <p>
          <GoDotFill />
          In response to legal requests or if required by law.
        </p>
        <h3 style={{ color: "black" }}>Security</h3>
        <p>
          We take measures to protect your information, but please be aware that
          no data transmission over the internet is entirely secure. You use our
          platform at your own risk.
        </p>
        <h3 style={{ color: "black" }}>Your Choices</h3>
        <p>
          You can modify or delete your personal information and image uploads
          in your account settings. You may also choose not to provide certain
          information, but this may limit your use of our platform.
        </p>
        <button onClick={closeModal}>Close</button>
      </div>
    </PopUpStyle>
  );
};

export default ShowPolicy;
