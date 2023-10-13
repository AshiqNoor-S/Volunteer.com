import React from "react";
import { PopUpStyle } from "../styles/PopUpStyle";
import styled from "styled-components";

const ShowReport = ({ closeModal }) => {
  return (
    <PopUpStyle>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
        <h2>Report An Issue</h2>
        <Wrapper>
          <div className="contact-form">
            <form
              method="POST"
              action="https://formspree.io/f/xgejpzza"
              className="contact-inputs"
            >
              <input
                type="text"
                placeholder="User name"
                name="username"
                required
                autoComplete="off"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                autoComplete="off"
              />
              <textarea
                placeholder="Enter your message"
                autoComplete="off"
                cols="30"
                rows="10"
                required
              />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </Wrapper>
        <button onClick={closeModal}>Close</button>
      </div>
    </PopUpStyle>
  );
};

const Wrapper = styled.section`
  .contact-form {
    max-width: 50rem;
    margin: auto;

    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.btn};
          color: ${({ theme }) => theme.colors.btn};
          transform: scale(0.9);
        }
      }
    }
  }
`;

export default ShowReport;
