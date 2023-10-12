import styled from "styled-components";

export const PopUpStyle = styled.section`
  .modal-wrapper {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: rgba(189, 189, 189, 0.9);
  }

  .modal-container {
    position: fixed;
    max-width: 75rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 2rem 3rem;
    border-radius: 0.5rem;

    h3 {
      margin-bottom: 0.8rem !important;
    }

    p {
      color: black !important;
    }

    button {
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
`;
