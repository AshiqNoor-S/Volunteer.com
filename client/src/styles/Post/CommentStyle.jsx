import styled from "styled-components";

export const CommentStyle = styled.div`

.commentSection {
    /* border: 1px solid black; */
    width: 90%;
    margin: auto;
    margin-top: 5vh;
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
  color: #bc6ff1;
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

`