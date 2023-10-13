import styled from "styled-components";

export const CreatePostStyle = styled.div`
	margin: auto;
  margin-top: 6vh;
  margin-bottom: 6vh;
  width: 50%;
  padding: 4vh 1vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: #bc6ff1;
  /* background-color: ${({ theme }) => theme.colors.bg}; */
  color: #fff !important;

.createPost {
	width: 90%;
}

  .profile-container {
            display: flex;
            align-items: center;
        }

        .profile-icon {
            border-radius: 50%;
            object-fit: cover;
            margin-right: 5vw;
			float: left;
        }

        .form-container {
            flex: 1;
            display: flex;
            flex-direction: column;
			width: 70%;
			/* align-items: center; */
        }

        .form-container textarea {
            /* width: 110%; */
			/* width: inherit; */
            padding: 10px;
            margin-bottom: 10px;
			border-radius: 10px;
			margin-bottom: 3vh;
        }

        .form-container button {
            padding: 10px 20px;
            background-color: #52057b;
			border-radius: 15px;
            color: #fff;
            border: none;
            cursor: pointer;
        }

		.create-post-textarea {
			font-size: 1.5rem;
			width: 100%;
		}

		.inline-buttons {
			display: inline-block;
			/* width: 140px; */
		}
		
		/* .containerss {
			display: flex;
			align-items: center;
		} */

		.upload-button {
			font-size: 1.5rem;
		}

		.containerss span{
			display:inline-block;
		}

		.post-icon {
			position: relative;
			left: 14vw;
		}
`;