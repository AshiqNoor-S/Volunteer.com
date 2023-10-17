import React, { useState } from 'react';
import { CreatePostStyle } from "../styles/Post/CreatePostStyle";
import { useSelector } from 'react-redux';

const CreatePost = (props) => {

	const [postContent, setPostContent] = useState('');
	const [file, setFile] = useState(null);
	const [location, setLocation] = useState('');

	const handlePostContentChange = (e) => {
		setPostContent(e.target.value);
	};

	const handleFileChange = (e) => {
		setFile(e.target.files[0]);
	};

	const handleLocationChange = (e) => {
		setLocation(e.target.value);
	};

	const id = String((Math.random() * 100000000000000));
	const { firstName } = useSelector((state) => state.user);

	// console.log(`User from useSelector() = ${user}`);

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log('handleSubmit called 2');
		const formData = new FormData();
		formData.append('id', id);
		formData.append('postContent', postContent);
		formData.append('file', file.name);
		formData.append('user', firstName);
		formData.append('postLocation', location);

		try {
			const response = await fetch('http://localhost:3001/create-post', {
				method: 'POST',
				body: formData,
			});

			if (response.ok) {
				console.log("Post created successfully!");
			} else {
				console.log("Post not created. Please try again!");
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<CreatePostStyle>
			<section className='createPost'>
				<img src='./images/user_icon.png' className="profile-icon" style={{ width: '50px' }} />
				{/* <form action="/create-post" method="POST" enctype="multipart/form-data"> */}
				<form onSubmit={handleSubmit} >
					<div className="form-container">
						<textarea id="postContent" name="postContent" value={postContent} onChange={handlePostContentChange} className='create-post-textarea' rows={10} cols={10} placeholder='Create a post...'>
						</textarea>
						<div className="containerss">
							{/* <span><button className="upload-button inline-buttons">Upload Photos/Videos</button></span> */}

							<input type="text" id="location" name="location" value={location} onChange={handleLocationChange} placeholder='Location' required />

							<input type="file" className="custom-file-input" id="file" name="file" accept="image/*, video/*" onChange={handleFileChange} />
							<label className="custom-file-label upload-button inline-buttons" for="file">Upload Photos/Videos</label>
							{/* <a href='#'><img src='./images/post_icon.png' className="post-icon" style={{ width: '32px' }} /></a> */}

							<button type="submit" className='submit-icon' ></button>
						</div>
					</div>
				</form>
			</section>

		</CreatePostStyle>
	)
}

export default CreatePost