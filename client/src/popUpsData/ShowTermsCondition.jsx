import React from "react";
import { GoDotFill } from "react-icons/go";
import { PopUpStyle } from "../styles/PopUpStyle";

const ShowTermsCondition = ({ closeModal }) => {
  return (
    <PopUpStyle>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
        <h2>Terms & Conditions</h2>
        <h3 style={{ color: "black" }}>Acceptance of Terms</h3>
        <p>
          By using Volunteer, you agree to comply with and be bound by these
          Terms and Conditions. If you do not agree with these terms, please do
          not use our platform.
        </p>
        <h3 style={{ color: "black" }}>User Obligations</h3>
        <p>
          <GoDotFill />
          You are responsible for the accuracy and legality of the content you
          upload, including images and descriptions of problems.
        </p>
        <p>
          <GoDotFill />
          You agree not to engage in any unlawful activities on our platform,
          including harassment, hacking, or spreading false information.
        </p>
        <h3 style={{ color: "black" }}>Content Ownership</h3>
        <p>
          You retain ownership of the content you upload. However, by uploading
          content, you grant us a non-exclusive, worldwide, royalty-free,
          sublicensable license to use, reproduce, and distribute it for the
          purpose of connecting users with relevant organizations.
        </p>
        <h3 style={{ color: "black" }}>Limitation of Liability</h3>
        <p>
          We are not responsible for the actions or inactions of organizations
          or users using our platform. We are not liable for any damages or
          losses resulting from the use of our platform.
        </p>
        <h3 style={{ color: "black" }}>Termination</h3>
        <p>
          We reserve the right to terminate or suspend your account at our
          discretion for violations of these terms.
        </p>
        <h3 style={{ color: "black" }}>Changes to Terms & Conditions</h3>
        <p>
          We may update these terms to reflect changes in our services or
          applicable laws. It's your responsibility to review these terms
          regularly.
        </p>
        <button onClick={closeModal}>Close</button>
      </div>
    </PopUpStyle>
  );
};

export default ShowTermsCondition;
