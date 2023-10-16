import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreatePost from "../components/CreatePost";
// import userPosts from "../data/userPosts";
import Location from "./Location";
import Post from "../components/Post";
import { useSelector } from "react-redux";

const Home = () => {
  const { _id, picturePath } = useSelector((state) => state.user);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching posts: ', error);
      });
  }, []);

  return (
    <div>
      <CreatePost />
      <hr style={{ width: '59%', margin: 'auto', marginTop: '6vh' }} />
      {/* {userPosts.map((post) => (
        <Post userName={post.userName}
          userTitle={post.userTitle}
          userPhotoURL={post.userPhotoURL}
          postTime={post.postTime}
          postContent={post.postContent}
          postMediaURLs={post.postMediaURLs}
          postComments={post.postComments} />
      ))} */}

      {posts.map((post) => (
        <Post key={post._id} userName={post.userName}
          userTitle={post.userTitle}
          userPhotoURL={post.userPhotoURL}
          postTime={post.postTime}
          postContent={post.postContent}
          postMediaURLs={post.file}
          postComments={post.postComments} />
      ))}
    </div>
  );
};

export default Home;
