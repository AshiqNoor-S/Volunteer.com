import styled from "styled-components";

export const PostStyle = styled.div`

  margin: auto;
  margin-top: 6vh;
  margin-bottom: 6vh;
  width: 60%;
  padding: 4vh 4vw;
  border-radius: 20px;
  background-color: #bc6ff1;
  color: #fff !important;

  .postUserImage {
    float: left;
  }

  .postHeaderContent {
    position: relative;
    left: 2vw;
    top: 0.5vh;
  }

  .postHeaderContent p {
    line-height: 0.87rem;
    opacity: 1;
    font-size: 150%;
    color: #fff !important;
  }

  .postTimeText {
    opacity: 0.8;
    line-height: 1.2rem;
  }

  .postContent {
    color: #fff !important;
    opacity: 1;
    width: 77%;
    font-size: 150%;
    margin: auto;
    margin-top: 6vh;
    margin-bottom: 6vh;
    line-height: 2.5rem;
    font-weight: 500;
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

  .commentSection {
    /* border: 1px solid black; */
    width: 90%;
    margin: auto;
    margin-top: 5vh;
  }

  .userComment {
    /* margin-top: 3vh; */
  }

  .commentSection input {
    position: relative;
    left: 2vw;
    border-radius: 20px;
    padding: 15px;
    font-size: 1.5rem;
  }

  ::placeholder {
  color: #bc6ff1;
  font-weight: 900;
  /* opacity: 1; */
}

  .comment {
    width: 100%;
  }

  .commentUserImg {
    float: left;
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
		
	}

	@media (max-width: ${({ theme }) => theme.media.mobile}) {

	}

`;
