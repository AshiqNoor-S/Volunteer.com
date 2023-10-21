import React, { useState } from 'react';
import { PostStyle } from "../styles/Post/PostStyle";
import AddCommentForm from './AddCommentForm';

const Post = (props) => {

	const [comments, setComments] = useState([]);

	// This is a sample function to handle adding a new comment.
	const handleCommentAdded = (newComment) => {
		// Add the new comment to the list of comments
		setComments([...comments, newComment]);
	};
	return (
		<PostStyle>
			<section className='postHeader'>
				<img src={props.userPhotoURL} className='postUserImage' style={{ width: '58px' }} alt='post-user' />
				<div className='postHeaderContent'>
					<p><b>{props.userName}</b></p>
					<p><b>{props.userTitle}</b></p>
					<p><span className='postTimeText'>&bull; {props.postTime}</span></p>
				</div>
			</section>
			<section className='postBody'>
				<p className='postContent'>
					{props.postContent}
				</p>
				<div className='postMediaSection'>
					<img src={props.src} className='media-img' alt='media' />
					{/* {props.postFile.map((media) => (
    <PostStyle>
      <section className="postHeader">
        <img
          src={props.userPhotoURL}
          className="postUserImage"
          style={{ width: "58px" }}
          alt="post-user"
        />
        <div className="postHeaderContent">
          <p>
            <b>{props.userName}</b>
          </p>
          <p>
            <b>{props.userTitle}</b>
          </p>
          <p>
            <span className="postTimeText">&bull; {props.postTime}</span>
          </p>
        </div>
      </section>
      <section className="postBody">
        <p className="postContent">{props.postContent}</p>
        <div className="postMediaSection">
          <img
            src={"../server/public/assets/" + `${props.postFile}`}
            className="media-img"
            alt="media"
          />
          {/* {props.postFile.map((media) => (
						<div>
							<img src={media} className='media-img' />
						</div>
					))} */}
        </div>
        <hr
          style={{
            width: "90%",
            margin: "auto",
            marginTop: "5vh",
            color: "#fff",
            height: "2px",
          }}
        />
      </section>
      <section className="commentSection">
        <AddCommentForm
          postId={props.postId}
          onCommentAdded={handleCommentAdded}
          postUpvoteCount={props.upvoteCount}
        />
        {props.postComments.map((comment) => (
          <div className="comment" key={props.postId}>
            <img
              src={comment.commentUserPhotoURL}
              className="commentUserImg"
              alt="comment-user"
            />
            <div className="commentBox">
              <p>
                <b>{comment.commentUserName}</b>
                <span className="commentTime">
                  &bull; {comment.commentTime}
                </span>
              </p>
              <p style={{ opacity: "0.7" }}>{comment.commentUserTitle}</p>
              <div className="commentContent">
                <p>{comment.commentContent}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </PostStyle>
  );
};

export default Post