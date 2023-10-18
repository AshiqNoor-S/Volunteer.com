import styled from "styled-components";

export const ProfileStyle = styled.div`
  margin: 5vh 8vw;
  padding: 2vh 1vw;
  // border: 1px solid black;
  border-radius: 20px;

  .profile-banner-imgs {
    height: 40vh;
    // border: 1px solid black;
  }

  .banner {
    border-radius: 10px;
  }

  .profile-pic {
    position: relative;
    bottom: 6vh;
    left: 4vw;
    border: 3px solid #fff;
    border-radius: 50%;
  }

  .heading-text {
    position: relative;
    bottom: 9vh;
    right: 3vw;
    width: 30%;
  }

  .user-name {
    font-size: 2.1rem;
    font-weight: 600;
    position: relative;
    bottom: -1vh;
    left: 15vw;
  }

  .profession-tag {
    font-size: 1.1rem;
    position: relative;
    bottom: -2vh;
    left: 15vw;
    background-color: #6254f3;
    color: white;
    padding: 0.5vh 1vw;
    border-radius: 10px;
  }

  .about-me {
    // border: 1px solid black;
    position: relative;
    margin-top: -6vh;
  }

  .about-me-heading,
  .my-posts-heading {
    font-size: 2.2rem;
    font-weight: 600;
  }

  .my-posts {
    margin: 2vh 0;
  }

  .postBanner {
    margin: 2vh 2vw;
    width: 8vw;
    // border: 1px solid black;
    border-radius: 10px;
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    margin: 3vh 8vw;

    .heading-text {
      bottom: 25vh;
      right: 0vw;
    }

    .user-name {
      bottom: 0vh;
      left: 0vw;
      font-size: 2.5rem;
    }

    .profession-tag {
      bottom: 2vh;
      left: 70vw;
      font-size: 1.5rem;
      padding: 7px;
    }

    .about-me {
      margin-top: -24vh;
    }

    .about-me-text {
      font-size: 1.5rem;
      line-height: 2.5rem;
    }

    .about-me-heading,
    .my-posts-heading {
      font-size: 2.5rem;
      font-weight: 600;
    }

    .postBanner {
      margin: 2vh 2vw;
      width: 40vw;
      border-radius: 10px;
      border: 1px solid black;
      position: relative;
      left: 18vw;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin: 3vh 8vw;

    .profile-pic {
      width: 25vw;
    }

    .banner {
      border-radius: 10px;
      height: 12vh;
    }

    .heading-text {
      bottom: 20vh;
      right: 0vw;
    }

    .user-name {
      bottom: 0vh;
      left: 0vw;
      font-size: 2.2rem;
    }

    .profession-tag {
      bottom: 3.5vh;
      left: 63vw;
      font-size: 1.5rem;
      padding: 7px;
    }

    .about-me {
      margin-top: -20vh;
    }

    .about-me-text {
      font-size: 1.5rem;
    }

    .about-me-heading,
    .my-posts-heading {
      font-size: 2.2rem;
      font-weight: 600;
    }

    .postBanner {
      margin: 2vh 2vw;
      width: 60%;
      border-radius: 10px;
      border: 1px solid black;
      position: relative;
      left: 15vw;
    }
  }
`;