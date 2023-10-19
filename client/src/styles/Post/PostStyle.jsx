import styled from "styled-components";

// #93A7FA

export const PostStyle = styled.div`
  margin: auto;
  margin-top: 6vh;
  margin-bottom: 6vh;
  width: 60%;
  padding: 4vh 4vw;
  border-radius: 20px;
  border: 3px solid #96abff;
  background-color: #F5F5FF;
  color: #fff !important;

  .postUserImage {
    color: black;
    float: left;
    border-radius: 50%;
    border: 2px solid #96abff;
    padding: 2px;
  }

  .postHeaderContent {
    position: relative;
    left: 2vw;
    top: 0.5vh;
  }

  .postHeaderContent p {
    color: black !important;
    line-height: 0.87rem;
    opacity: 1;
    font-size: 150%;
  }

  .postTimeText {
    opacity: 0.8;
    line-height: 1.2rem;
  }

  .postContent {
    color: black !important;
    opacity: 1;
    width: 77%;
    font-size: 140%;
    margin: auto;
    margin-top: 6vh;
    margin-bottom: 6vh;
    line-height: 2.5rem;
    font-weight: 400;
  }

  .postMediaSection {
    width: 80%;
    margin: auto;
    border-radius: 20px;
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5vw;
    padding: 3vh 1vw;
  }

  .postMediaSection div {
    background-color: #fff;
    border: 1px solid black;
  }

  .media-img {
    width: 15vw;
  }

  .commentSection {
    /* border: 1px solid black; */
    width: 90%;
    margin: auto;
    margin-top: 2vh;
  }

  .commentSection input {
    position: relative;
    left: 2vw;
    border-radius: 20px;
    padding: 15px;
    font-size: 1.5rem;
    width: 100%;
  }

  ::placeholder {
    color: #869eff;
    font-weight: 900;
    /* opacity: 1; */
  }

  .comment {
    width: 100%;
  }

  .commentUserImg {
    float: left;
    width: 50px;
  }

  .commentBox {
    background: #fff;
    width: 90%;
    border-radius: 20px;
    position: relative;
    left: 2vw;
    padding: 1.5vh 1vw;
    margin-left: 2.5vw;
    margin-top: 3vh;
    color: #000 !important;
  }

  .commentBox p {
    color: #000 !important;
    opacity: 1;
    font-size: 1.3rem;
    line-height: 0.8rem;
  }

  .commentTime {
    float: right;
    opacity: 0.7;
  }

  .commentContent {
    margin-top: 3vh;
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    width: 80%;

    .postUserImage {
      float: left;
      position: relative;
      left: 2vw;
    }

    .postHeaderContent {
      position: relative;
      left: 5vw;
      top: 1vh;
    }

    .postContent {
      width: 80%;
    }

    .postMediaSection {
      width: 90%;
      flex-direction: column;
      padding: 3vh 3vw;
    }

    .media-img {
      width: 100%;
    }

    .commentSection input {
      border-radius: 15px;
      padding: 10px;
      width: 80%;
    }

    .commentUserImg {
      float: left;
      width: 50px;
    }

    .commentBox {
      width: 85%;
      border-radius: 15px;
      left: 6vw;
      padding: 1.5vh 3vw;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 80%;

    .postUserImage {
      float: left;
      position: relative;
      left: 2vw;
    }

    .postHeaderContent {
      position: relative;
      left: 5vw;
      top: 1vh;
    }

    .postContent {
      width: 80%;
    }

    .postMediaSection {
      width: 90%;
      flex-direction: column;
      padding: 3vh 3vw;
    }

    .media-img {
      width: 100%;
    }

    .commentSection input {
      border-radius: 15px;
      padding: 10px;
      width: 80%;
    }

    .commentUserImg {
      float: left;
      width: 30px;
    }

    .commentBox {
      width: 85%;
      border-radius: 15px;
      left: 10vw;
      padding: 1.5vh 5vw;
    }
  }
`;
