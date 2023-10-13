import styled from "styled-components";

export const ProfileStyle = styled.div`

	margin: 5vh 8vw;
	padding: 2vh 1vw;
	// border: 1px solid black;
	border-radius: 20px;

	.profile-banner-imgs {
		height: 40vh;
		// border: 1px solid black;
	}

	.banner {
		border-radius: 10px;
	}

	.profile-pic {
		position: relative;
		bottom: 6vh;
		left: 4vw;
		border: 2px solid #fff;
		border-radius: 50%;
	}

	.heading-text {
		position: relative;
		bottom: 9vh;
		right: 3vw;
		width: 30%;
	}

	.user-name {
		font-size: 2rem;
		font-weight: 600;
		position: relative;
		bottom: 0vh;
		left: 15vw;
	}

	.profession-tag {
		position: relative;
		bottom: 2.5vh;
		left: 24vw;
		background-color: #bc6ff1;
		padding: 0.5vh 1vw;
		border-radius: 10px;
	}

	.about-me {
		// border: 1px solid black;
		position: relative;
		margin-top: -6vh;
	}

	.about-me-heading, .my-posts-heading {
		font-size: 2rem;
		font-weight: 600;

	}

	.my-posts {
		margin: 2vh 0;
	}

	.postBanner {
		margin: 2vh 2vw;
		width: 8vw;
		// border: 1px solid black;
		border-radius: 10px;
	}

`;