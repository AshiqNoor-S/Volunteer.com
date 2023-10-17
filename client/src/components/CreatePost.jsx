import React, { useState, useEffect } from 'react';
import { CreatePostStyle } from "../styles/Post/CreatePostStyle";
import { useSelector } from 'react-redux';

const CreatePost = (props) => {
	const [postContent, setPostContent] = useState('');
	const [data, setData] = useState(null);
	const [file, setFile] = useState(null);
	const [location, setLocation] = useState('');

	const fetchData = async () => {
		try {
		  const NGO_CATEGORY = 'healthcare';
		  console.log(location);
		  const GOVERNMENT_CATEGORY = 'office.government';
		  const place = await fetch("https://api.geoapify.com/v1/geocode/search?text="+location+"&apiKey=303f4720094a4172a8ab37549d279277");
		  const latlong = await place.json();
		  const latitude = latlong.features[0].geometry.coordinates[1];
		  const longitude = latlong.features[0].geometry.coordinates[0];
		  const radiusInKilometers = 80;
		  const earthRadius = 6371; 
		  const angularRadius = radiusInKilometers / earthRadius;

		  const minLatitude = latitude - angularRadius * (180 / Math.PI);
		  const minLongitude = longitude - angularRadius * (180 / Math.PI) / Math.cos(latitude * Math.PI / 180);
		  const maxLatitude = latitude + angularRadius * (180 / Math.PI);
		  const maxLongitude = longitude + angularRadius * (180 / Math.PI) / Math.cos(latitude * Math.PI / 180);
		  const BOUNDING_BOX_FORMAT = `rect:${minLongitude},${minLatitude},${maxLongitude},${maxLatitude}`;
		  const response = await fetch("https://api.geoapify.com/v2/places?categories="+GOVERNMENT_CATEGORY+","+NGO_CATEGORY+"&filter="+BOUNDING_BOX_FORMAT+"&limit=20&apiKey=303f4720094a4172a8ab37549d279277");
		  const result = await response.json();
		  setData(result);
		} catch (error) {
		  console.error('Error fetching data:', error);
		}
	};




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

	const getLocation = async () => {
		try {
			const response = await fetch('http://localhost:3001/posts/getlocation', {
				method: 'GET',
			});
			const locationData= await response.json();
			const postLocations = locationData
			.filter(item => item.userName) // Filter out items without postLocation
			.map(item => item.userName); // Map to extract postLocation

			console.log(postLocations);
		} catch (error) {
			console.error(error);
		}
	}

	const handleSubmit = async (e) => {
		fetchData();
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
		getLocation();

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

							<input type="text" id="location" name="location" value={location} onChange={handleLocationChange} placeholder='Location' />

							<input type="file" className="custom-file-input" id="file" name="file" accept="image/*, video/*" onChange={handleFileChange} />
							<label className="custom-file-label upload-button inline-buttons" for="file">Upload Photos/Videos</label>
							{/* <a href='#'><img src='./images/post_icon.png' className="post-icon" style={{ width: '32px' }} /></a> */}

							<button type="submit" className='submit-icon' ></button>
						</div>
					</div>
				</form>
				{/* <div>
					<h1>NGOs and Government organisation nearby</h1>
					{data ? (
						<ul>
						{data.features.map((feature, index) => (
							<li key={index}>{feature.properties.name}</li>
						))}
						</ul>
					) : (
						<p>Loading data...</p>
					)}
				</div> */}
			</section>

		</CreatePostStyle>
	)
}

export default CreatePost