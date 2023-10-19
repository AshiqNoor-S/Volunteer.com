import React, { useState } from 'react';
import { useSelector } from "react-redux";
import axios from 'axios';
import styled from "styled-components";

function AddCommentForm(props) {
  const { postId, onCommentAdded, postUpvoteCount } = props;

  const [upvoteCount, setUpvoteCount] = useState(postUpvoteCount);
  const [isUpvoted, setIsUpvoted] = useState(false);

  const userState = useSelector((state) => state.user);

  const [commentContent, setCommentContent] = useState("");
  // const [userProfile, setUserProfile] = useState(userState);

  // useEffect(() => {
  // 	// Retrieve user profile data from your API
  // 	fetch('/get-user-profile') // Replace with your actual API endpoint
  // 		.then((response) => response.json())
  // 		.then((data) => setUserProfile(data));
  // }, []);

  const formatDateTime = (timestamp) => {
    const options = { month: "short", day: "numeric", year: "numeric" };

    const date = new Date(timestamp);

    const formattedDate = date.toLocaleDateString("en-US", options);

    const time = date
      .toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
      .split(" ")
      .join("");

    return `${time} · ${formattedDate}`;
  };

  const handleCommentContentChange = (e) => {
    setCommentContent(e.target.value);
  };

  const handleUpvote = async () => {
    if (!isUpvoted) {
      try {
        const response = await axios.post(
          `http://localhost:3001/upvote/${postId}`
        );
        const { upvoteCount } = response.data;
        setUpvoteCount(upvoteCount);
        setIsUpvoted(true);
      } catch (error) {
        console.error("Error upvoting:", error);
      }
    }
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();

    try {
      // console.log(userState);
      const response = await fetch(
        `http://localhost:3001/add-comment/${postId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            commentContent,
            // commentUserName: userState.firstName,
            commentUserName: `${userState.firstName} ${userState.lastName}`,
            commentUserTitle: userState.occupation,
            commentUserPhotoURL: userState.picturePath, // Replace with your user profile data
            // commentTime: new Date().toUTCString(),
            commentTime: formatDateTime(new Date()),
          }),
        }
      );

      if (response.ok) {
        console.log("/add-comment request successful");
        const newComment = await response.json();
        onCommentAdded(newComment);
        setCommentContent("");
      } else {
        // Handle errors
      }
    } catch (error) {
      console.log("Didnt work");
      console.error(error);
    }
  };

  return (
    <AddCommentStyle className="userComment">
      <button
        onClick={handleUpvote}
        disabled={isUpvoted}
        style={{ background: "none", border: "none" }}
      >
        <img
          src="./images/upvote_icon2.png"
          style={{ width: "40px" }}
          alt="upvote"
        />{" "}
        {upvoteCount}
      </button>
      <form
        onSubmit={handleSubmit}
        style={{ margin: "0", padding: "0", display: "inline" }}
      >
        <input
          type="text"
          name="comment"
          placeholder="Comment here..."
          value={commentContent}
          onChange={handleCommentContentChange}
          required
        />
        <button type="submit" className="plusBtn">
          +
        </button>
      </form>
    </AddCommentStyle>
  );
}

export default AddCommentForm;

const AddCommentStyle = styled.section`
  .plusBtn {
    background: #6254f2;
    padding: 0px 8px;
    right: 12px;
    position: relative;
    zindex: 1000;
    border-radius: 50%;
    font-weight: 600;
    font-size: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .plusBtn {
      top: 2px;
      left: -45px;
      position: relative;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .plusBtn {
      top: -35px;
      left: 210px;
      position: relative;
    }
  }
`;