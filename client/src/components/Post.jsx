import React from 'react';
import { PostStyle } from "../styles/Post/PostStyle";

const Post = (props) => {
	return (
		<PostStyle>
			<section className='postHeader'>
				<img src='./images/user_icon.png' className='postUserImage' style={{ width: '58px' }} />
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
					{props.postMediaURLs.map((media) => (
						<div>
							<img src={media} className='media-img' />
						</div>
					))}
				</div>
				<hr style={{ width: '90%', margin: 'auto', marginTop: '5vh', color: '#fff', height: '2px' }} />
			</section>
			<section className='commentSection'>
				<div className='userComment'>
					<button style={{ background: 'none', border: 'none' }}><img src='./images/upvote_icon.png' style={{ width: '40px' }} /></button>
					<input type='text' name='comment' placeholder='Comment here...' />
					<button type='submit'></button>
				</div>
				{props.postComments.map((comment) => (
					<div className='comment'>
						<img src={comment.commentUserPhotoURL} className='commentUserImg' />
						<div className='commentBox'>
							<p><b>{comment.commentUserName}</b>
								<span className='commentTime'>&bull; {comment.commentTime}</span></p>
							<p style={{opacity: '0.7'}} >{comment.commentUserTitle}</p>
							<div className='commentContent' ><p>{comment.commentContent}</p></div>
						</div>
					</div>

				))}
			</section>
		</PostStyle>
	);
};

export default Post