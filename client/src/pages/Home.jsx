import React from "react";
import CreatePost from "../components/CreatePost";
import userPosts from "../data/userPosts";
import Post from "../components/Post";

const Home = () => {
  return (
    <div>
      <CreatePost />
      <hr style={{width: '59%', margin: 'auto', marginTop: '6vh'}} />
      {userPosts.map((post) => (
        <Post userName={post.userName}
          userTitle={post.userTitle}
          userPhotoURL={post.userPhotoURL}
          postTime={post.postTime}
          postContent={post.postContent}
          postMediaURLs={post.postMediaURLs}
          postComments={post.postComments} />
      ))}
    </div>
  );
};

export default Home;
