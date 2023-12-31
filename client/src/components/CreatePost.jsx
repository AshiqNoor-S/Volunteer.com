import React, { useState } from 'react';
import { CreatePostStyle } from "../styles/Post/CreatePostStyle";
import { useSelector } from 'react-redux';
import axios from 'axios';

const CreatePost = (props) => {

	const userState = useSelector((state) => state.user);

	const [postContent, setPostContent] = useState('');
	const [data, setData] = useState(null);
	const [file, setFile] = useState("");
	const [selectedImage, setSelectedImage] = useState(null);
	const [organisations, setOrganisation] = useState(null);
	const [emails, setEmail] = useState(null);
	const [location, setLocation] = useState('');
	const [mergedData, setMergedData] = useState([]);

	const handleImageChange = (e) => {
		// const file = e.target.files[0]; // Get the first selected file

		// if (file) {
		// 	setSelectedImage(file);
		// }


		// YT vid
		// var reader = new FileReader();
		// reader.readAsDataURL(e.target.files[0]);
		// reader.onload = () => {
		// 	console.log(reader.result); //base64encoded string
		// 	setFile(reader.result);
		// };

		// reader.onerror = error => {
		// 	console.log("Error: ", error);
		// };

		const selectedFile = e.target.files[0];

		if (selectedFile) {
			const reader = new FileReader();
			// console.log(selectedFile.size) // bytes

			let dataURL = "";
			reader.onload = (e) => {
				// The data URL is available here
				dataURL = e.target.result;
				// console.log('readerrrrr\n')
				// console.log(dataURL);
				// reader.readAsDataURL(selectedFile);
				setFile(dataURL);
				// console.log(`ahem\n${file}`)
			};

			reader.readAsDataURL(selectedFile);
			// setFile(dataURL)

		}
	};

	const fetchData = async () => {
		try {
			const NGO_CATEGORY = 'office.non_profit';
			const GOVERNMENT_CATEGORY = 'office.government';
			const place = await fetch("https://api.geoapify.com/v1/geocode/search?text=" + location + "&apiKey=303f4720094a4172a8ab37549d279277");
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
			const response = await fetch("https://api.geoapify.com/v2/places?categories=" + GOVERNMENT_CATEGORY + "," + NGO_CATEGORY + "&filter=" + BOUNDING_BOX_FORMAT + "&limit=20&apiKey=303f4720094a4172a8ab37549d279277");
			const result = await response.json();
			const addressLine1Array = result.features.map(feature => feature.properties.address_line1);
			console.log('Address Line 1 Array:', addressLine1Array);
			setData(result.features);  // Set the entire features array if needed
			mergeAndFilterData(organisations);
			console.log(data.features);
			console.log(mergedData);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	const handlePostContentChange = (e) => {
		setPostContent(e.target.value);
	};

	// const handleFileChange = (e) => {
	// 	setFile(e.target.files[0]);
	// };

	const handleLocationChange = (e) => {
		setLocation(e.target.value);
	};


	const id = String((Math.random() * 100000000000000));
	const { firstName } = useSelector((state) => state.user);

	const getLocation = async () => {
		try {
			const response = await fetch('https://volunteer-xnpy.onrender.com/posts/getlocation', {
				method: 'GET',
			});
			const locationData = await response.json();
			const postLocations = locationData
				.filter(item => item.userName) // Filter out items without postLocation
				.map(item => item.userName); // Map to extract postLocation

			const postEmail = locationData
				.filter(item => item.userEmail) // Filter out items without postLocation
				.map(item => item.userEmail);

			console.log(postEmail);

			setOrganisation(postLocations, emails);
			setEmail(postEmail);
		} catch (error) {
			console.error(error);
		}
	}

	// const mergeAndFilterData = (postLocations) => {
	// 	if (data && postLocations) {
	// 		// Merge the data from postLocations and data
	// 		const mergedData = [...postLocations, ...data.features.map(feature => feature.properties.name)];
	// 		// Filter out duplicates
	// 		const filteredData = mergedData.filter((item, index) => mergedData.indexOf(item) === index);
	// 		// Store the filtered data in state
	// 		setMergedData(filteredData);
	// 	}
	// };

	const mergeAndFilterData = (postLocations, postEmails) => {
		if (data && postLocations) {
			// Merge the data from postLocations and data
			const mergedData = [
				...postLocations,
				...data.features.map((feature) => feature.properties.name),
			];
			// Filter out duplicates
			const filteredData = mergedData.filter(
				(item, index) => mergedData.indexOf(item) === index
			);
			// Create an array to hold objects with userName and userEmail
			const mergedDataWithEmails = filteredData.map((userName) => ({
				userEmail: postEmails[postLocations.indexOf(userName)] || null,
			}));
			// Store the filtered data with userEmails in state
			setMergedData(mergedDataWithEmails);
			// email sending part is written below

			const sendGridAPIKey = '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';

			const emailData = {
				personalizations: [
					{
						to: [
							{
								email: 'recipient@example.com',
							},
						],
					},
				],
				from: {
					email: 'sender@example.com',
				},
				subject: 'Hello from Volunteers.com',
				content: [
					{
						type: 'text/plain',
						value: 'Hello from Volunteers.com',
					},
					{
						type: 'text/html',
						value: '<h1>Hello from Volunteers.com</h1>',
					},
				],
			};

			axios
				.post('https://api.sendgrid.com/v3/mail/send', emailData, {
					headers: {
						Authorization: `Bearer ${sendGridAPIKey}`,
						'Content-Type': 'application/json',
					},
				})
				.then((response) => {
					console.log('Email sent');
				})
				.catch((error) => {
					console.error(error);
				});

		}
	};


	const handleSubmit = async (e) => {
		// fetchData();
		// e.preventDefault();
		console.log('handleSubmit called 2');
		const formData = new FormData();
		formData.append('id', id);
		formData.append('postContent', postContent);
		// formData.append('file', file.name);
		formData.append('user', firstName);
		formData.append('postLocation', location);
		formData.append('userEmail', userState.email);
		formData.append('base64', file);

		// try {
		// 	const response = await fetch('https://volunteer-xnpy.onrender.com/create-post', {
		// 		method: 'POST',
		// 		body: formData,
		// 	});

		// 	if (response.ok) {
		// 		console.log("Post created successfully!");
		// 	} else {
		// 		console.log("Post not created. Please try again!");
		// 	}
		// } catch (error) {
		// 	console.error(error);
		// }
		try {
			fetch('https://volunteer-xnpy.onrender.com/create-post', {
				// fetch('http://localhost:3001/create-post', {
				method: 'POST',
				// crossDomain: true,
				headers: {
					"Content-Type": "application/json", Accept: "application/json",
				},
				body: { id: id, postContent: postContent, user: firstName, postLocation: location, userEmail: userState.email, base64: file },
			}).then((res) => res.json()).then((data) => console.log(data));
		} catch (e) {
			alert(e);
		}



		// getLocation();

	};

	return (
		<CreatePostStyle>
			<section className="createPost">
				<img
					src={`https://volunteer-xnpy.onrender.com/assets/${userState.picturePath}`}
					className="profile-icon"
					style={{ width: "50px" }}
					alt="user-profile-icon"
				/>
				{/* <form action="/create-post" method="POST" enctype="multipart/form-data"> */}
				<form encType="multipart/form-data" onSubmit={handleSubmit}>
					<div className="form-container">
						<textarea
							id="postContent"
							name="postContent"
							value={postContent}
							onChange={handlePostContentChange}
							className="create-post-textarea"
							rows={5}
							cols={10}
							placeholder="Create a post..."
						></textarea>
						<div className="containerss">
							{/* <span><button className="upload-button inline-buttons">Upload Photos/Videos</button></span> */}
							<input
								type="text"
								id="location"
								name="location"
								value={location}
								onChange={handleLocationChange}
								placeholder="Location"
								required
							/>
							<input
								type="file"
								className="custom-file-input"
								id="file" onChange={handleImageChange}
								accept="image/*"
							/>
							<label
								className="custom-file-label upload-button inline-buttons"
								for="file"
							>
								Upload Photos/Videos
							</label>
							{/* <a href='#'><img src='./images/post_icon.png' className="post-icon" style={{ width: '32px' }} /></a> */}
							<button type="submit" className="submit-icon"></button>
						</div>
					</div>
				</form>

			</section>
		</CreatePostStyle>
	);
}

export default CreatePost
