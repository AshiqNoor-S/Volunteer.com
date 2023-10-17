import React from "react";
import myProfilePosts from "../data/myProfilePosts";
import { ProfileStyle } from "../styles/ProfileStyle";

const MyProfile = () => {
  return (
    <ProfileStyle>
      <div className="profile-banner-imgs">
        <img
          src="./images/profile_banner4.4.png"
          className="banner"
          style={{ width: "100%" }}
          alt="profile-banner"
        />
        <img src="./images/user_icon3.png" className="profile-pic" alt="profile-pic" />
      </div>
      <div className="heading-text">
        <h1 className="user-name">My Profile</h1>
        <span className="profession-tag">profession</span>
      </div>

      <div className="about-me">
        <h1 className="about-me-heading">About Me</h1>
        <p className="about-me-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis
          risus sed elit bibendum ultrices. Duis vel sapien varius, sagittis
          risus sit amet, placerat nulla Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Fusce mattis risus sed elit bibendum ultrices. Duis
          vel sapien varius, sagittis risus sit amet, placerat nulla Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Fusce mattis risus sed
          elit bibendum ultrices. Duis vel sapien varius, sagittis risus sit
          amet, placerat nulla
        </p>
      </div>

      <div className="my-posts">
        <h1 className="my-posts-heading">My Posts</h1>
        {myProfilePosts.map((post) => (
          <a href={post.postURL}>
            <img src={post.imgURL} className="postBanner" alt="profile-post" />
          </a>
        ))}
      </div>
    </ProfileStyle>
  );
};

export default MyProfile;
