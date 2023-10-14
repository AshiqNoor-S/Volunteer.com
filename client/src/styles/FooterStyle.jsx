import styled from "styled-components";

export const FooterStyle = styled.section`
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

    .footer-social {
      a {
        color: ${({ theme }) => theme.colors.white} !important;
        opacity: 0.7 !important;
        cursor: pointer;
        display: block;
        font-size: 13px;
        margin: 10px 0;
      }
    }

    .footer-contact {
      p {
        cursor: pointer;
      }
      a {
        color: ${({ theme }) => theme.colors.white} !important;
        opacity: 0.7 !important;
        cursor: pointer;
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
      align-items: center;
      text-align: center;
    }

    .quick-link-list {
      display: flex;
      justify-content: space-evenly;
    }

    .footer-bottom--section {
      padding-top: 1rem;
    }
  }
`;
