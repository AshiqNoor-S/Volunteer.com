import React, { useState, useEffect } from 'react';

function AddCommentForm({ postId, onCommentAdded }) {
	const [commentContent, setCommentContent] = useState('');
	const [userProfile, setUserProfile] = useState(null);

	useEffect(() => {
		// Retrieve user profile data from your API
		fetch('/get-user-profile') // Replace with your actual API endpoint
			.then((response) => response.json())
			.then((data) => setUserProfile(data));
	}, []);

	const formatDateTime = (timestamp) => {
		const options = { month: 'short', day: 'numeric', year: 'numeric' };
	
		const date = new Date(timestamp);
	
		const formattedDate = date.toLocaleDateString('en-US', options);
		
		const time = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }).split(' ').join('');
	
	
		return `${time} · ${formattedDate}`;
	}

	const handleCommentContentChange = (e) => {
		setCommentContent(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch(`/add-comment/${postId}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					commentContent,
					commentUserName: userProfile.username,
					commentUserTitle: userProfile.title,
					commentUserPhotoURL: userProfile.photoURL, // Replace with your user profile data
					// commentTime: new Date().toUTCString(),
					commentTime: formatDateTime(new Date()),
				}),
			});

			if (response.ok) {
				const newComment = await response.json();
				onCommentAdded(newComment);
				setCommentContent('');
			} else {
				// Handle errors
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className='userComment'>
				<button style={{ background: 'none', border: 'none' }}><img src='./images/upvote_icon.png' style={{ width: '40px' }} /></button>
				<input type='text' name='comment' placeholder='Comment here...' value={commentContent} onChange={handleCommentContentChange} required />
				<button type='submit'> + </button>
			</div>
		</form>
	);
}

export default AddCommentForm;
