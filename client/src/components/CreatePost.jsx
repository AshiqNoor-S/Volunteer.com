import React from 'react';
import { CreatePostStyle } from "../styles/Post/CreatePostStyle";

const CreatePost = (props) => {
	return (
		<CreatePostStyle>
			<section className='createPost'>
				<img src='./images/user_icon.png' className="profile-icon" style={{ width: '50px' }} />
				<div className="form-container">
					<textarea id="create-post-text" name="create-post-text" className='create-post-textarea' rows={10} cols={10} placeholder='Create a post...'>
					</textarea>
					<div className="containerss">
						<span><button className="upload-button inline-buttons">Upload Photos/Videos</button></span>
						<a href='#'><img src='./images/post_icon.png' className="post-icon" style={{ width: '32px' }} /></a>
					</div>
				</div>
			</section>

		</CreatePostStyle>
	)
}

export default CreatePost