import styled from "styled-components";

export const CreatePostStyle = styled.div`
  margin: auto;
  margin-top: 6vh;
  margin-bottom: 6vh;
  width: 50%;
  padding: 4vh 1vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: #869eff;
  color: #fff !important;

  .createPost {
    width: 90%;
  }

  .profile-container {
    display: flex;
    align-items: center;
  }

  .profile-icon {
    border-radius: 50%;
    border: white 2px solid;
    object-fit: cover;
    margin-right: 5vw;
    float: left;
  }

  .form-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 80%;
    /* align-items: center; */
  }

  .form-container textarea {
    /* width: 110%; */
    /* width: inherit; */
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    margin-bottom: 3vh;
  }

  .form-container button {
    padding: 10px 20px;
    cursor: pointer;
  }

  .create-post-textarea {
    font-size: 1.5rem;
    width: 100%;
  }

  .inline-buttons {
    display: inline-block;
    /* width: 140px; */
  }

  #location {
    font-size: 16px;
    height: 47px;
    width: 200px;
    border-radius: 10px;
  }

  .upload-button {
    height: 47px;
    width: 200px;
    font-size: 1.5rem;
    margin-left: 2rem;
  }

  .containerss span {
    display: inline-block;
  }

  .custom-file-input {
    display: none;
  }

  .custom-file-label {
    background-color: #6254f3;
    color: #fff;
    padding: 10px 15px;
    border-radius: 10px;
    cursor: pointer;
  }

  .post-icon {
    position: relative;
    left: 14vw;
  }

  .submit-icon {
    background-image: url("./images/post_icon2.png"); /* Change url to wanted image */
    background-size: cover;
    border: white 2px solid;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    cursor: pointer;
    position: relative;
    left: 5vw;
    bottom: -2vh;
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    width: 80%;

    .createPost {
      height: 225px;
    }

    .post-icon {
      position: relative;
      left: 20vw;
      margin-top: 0vh;
    }

    .submit-icon {
      left: 55vw;
      bottom: 4vh;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 80%;

    .createPost {
      height: 310px;
    }

    .form-container textarea {
      padding: 10px;
      margin-top: 10px;
      margin-bottom: 0vh;
      width: 260px;
    }

    .upload-button {
      width: 100%;
    }

    .containerss span {
      display: block;
    }

    .post-icon {
      position: relative;
      left: 40vw;
      margin-top: 2vh;
    }

    #location {
      margin: 10px 0;
      height: 40px;
      width: 260px;
    }

    .upload-button {
      width: fit-content;
      margin: 0;
      height: fit-content;
    }

    .submit-icon {
      left: 10vw;
      bottom: -1vh;
    }
  }
`;