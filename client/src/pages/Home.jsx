import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import axios from 'axios';
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";

const Home = () => {
  const { _id } = useSelector((state) => state.user);

  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   axios.get('https://volunteer-xnpy.onrender.com/api/posts')
  //     .then((response) => {
  //       response.data.reverse();
  //       setPosts(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching posts: ', error);
  //     });
  // }, []);

  useEffect(() => {
    getImage();
  }, []);

  function getImage() {
    fetch('https://volunteer-xnpy.onrender.com/api/posts', {
    // fetch('http://localhost:3001/api/posts', {
      method: 'GET',
    }).then((res) => res.json()).then((data) => {
      console.log(data);
      setPosts(data.data);
    });
  }

  return (
    <div>
      <CreatePost />
      <hr style={{ width: '59%', margin: 'auto', marginTop: '6vh' }} />

      {posts.map((post) => (
        <Post key={post._id} postId={post._id} userName={post.userName}
          userTitle={post.userTitle}
          userPhotoURL={post.userPhotoURL}
          postTime={post.postTime}
          postContent={post.postContent}
          // postFile={post.file}
          postComments={post.postComments} loggedInUser={_id} upvoteCount={post.upvoteCount} src={post.image} />
      ))}

    </div>
  );
};

export default Home;
