import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from 'axios';
import { ProfileStyle } from "../styles/ProfileStyle";
import Post from "../components/Post";

const MyProfile = () => {

  const userState = useSelector((state) => state.user);

  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    // Make a GET request to the /api/get-user-posts endpoint
    axios.post('https://volunteer-xnpy.onrender.com/api/get-user-posts', { email: userState.email })
      .then(response => {
        response.data.reverse();
        setUserPosts(response.data);
        // response.data is an array of user posts
      })
      .catch(error => {
        console.error('Error fetching user posts:', error);
      });
  }, [userState.email]);

  return (
    <ProfileStyle>
      <div className="profile-banner-imgs">
        <img
          src="./images/profile_banner4.4.png"
          className="banner"
          style={{ width: "100%" }}
          alt="profile-banner"
        />
        <img
          src={userState.picturePath}
          className="profile-pic"
          alt="profile-pic"
        />
      </div>
      <div className="heading-text">
        <h1 className="user-name">{`${userState.firstName} ${userState.lastName}`}</h1>
        <span className="profession-tag">{userState.occupation}</span>
      </div>

      <div className="about-me">
        <h1 className="about-me-heading">About Me</h1>
        <p className="about-me-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, exercitationem eveniet eos minus repellat minima.
          Voluptas voluptatum explicabo ipsum quam suscipit amet. Necessitatibus
          porro aliquid exercitationem officia. Voluptatum alias ea atque quo
          consequatur facere rerum adipisci qui odio, blanditiis maiores quod
          officia eum dolores dicta et pariatur. Beatae voluptates porro minima
          itaque consequatur tempore dolor asperiores molestias dolorum, eum
          nulla!
        </p>
      </div>

      <div className="my-posts">
        <h1 className="my-posts-heading">My Posts</h1>

        {/* {userPosts.map((post) => (
          <div className="postBanner">
            <p className="postContent">
              {`${post.postContent.substring(0,70)}...`}
            </p>
          </div>
        ))} */}

        {userPosts.map((post) => (
          <Post
            key={post._id}
            postId={post._id}
            userName={post.userName}
            userTitle={post.userTitle}
            userPhotoURL={post.userPhotoURL}
            postTime={post.postTime}
            postContent={post.postContent}
            postFile={post.file}
            postComments={post.postComments}
            upvoteCount={post.upvoteCount}
          />
        ))}
      </div>
    </ProfileStyle>
  );
};

export default MyProfile;
