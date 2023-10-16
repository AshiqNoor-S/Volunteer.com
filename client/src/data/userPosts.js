// const userPosts = [
// 	{
// 		id: 1,
// 		userName: 'John Doe',
// 		userTitle: 'Software Engineer @ Stripe',
// 		userPhotoURL: './images/spinner.gif',
// 		postTime: '3h ago',
// 		postContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis risus sed elit bibendum ultrices. Duis vel sapien varius, sagittis risus sit amet, placerat nulla Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis risus sed elit bibendum ultrices. Duis vel sapien varius, sagittis risus sit amet, placerat nulla Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis risus sed elit bibendum ultrices. Duis vel sapien varius, sagittis risus sit amet, placerat nulla',
// 		postMediaURLs: ['./images/spinner.gif', './images/logo2.png'],
// 		postComments: [
// 			{
// 				commentID: 1,
// 				commentUserName: 'John Cena',
// 				commentUserTitle: 'Volunteer @ Smiles Foundation',
// 				commentUserPhotoURL: './images/user_icon.png',
// 				commentTime: '1h ago',
// 				commentContent: 'Solved this issue at XYZ...'
// 			},
// 			{
// 				commentID: 2,
// 				commentUserName: 'Mark Wood',
// 				commentUserTitle: 'CA @ Smiles Foundation',
// 				commentUserPhotoURL: './images/user_icon.png',
// 				commentTime: '1h ago',
// 				commentContent: 'Good Work!'
// 			}
// 		]
// 	},
// 	{
// 		id: 2,
// 		userName: 'Bryan Cranston',
// 		userTitle: 'Teacher @ High School',
// 		userPhotoURL: './images/spinner.gif',
// 		postTime: '2h ago',
// 		postContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis risus sed elit bibendum ultrices. Duis vel sapien varius, sagittis risus sit amet, placerat nulla Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis risus sed elit bibendum ultrices. Duis vel sapien varius, sagittis risus sit amet, placerat nulla Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis risus sed elit bibendum ultrices. Duis vel sapien varius, sagittis risus sit amet, placerat nulla ',
// 		postMediaURLs: ['./images/spinner.gif', './images/logo2.png'],
// 		postComments: [
// 			{
// 				commentID: 1,
// 				commentUserName: 'John Cena',
// 				commentUserTitle: 'Volunteer @ Smiles Foundation',
// 				commentUserPhotoURL: './images/user_icon.png',
// 				commentTime: '1h ago',
// 				commentContent: 'Solved this issue at XYZ...'
// 			},
// 			{
// 				commentID: 2,
// 				commentUserName: 'Mark Wood',
// 				commentUserTitle: 'CA @ Smiles Foundation',
// 				commentUserPhotoURL: './images/user_icon.png',
// 				commentTime: '1h ago',
// 				commentContent: 'Good Work!'
// 			}
// 		]
// 	}
// ]

import Post from "/server/models/Post.js";

const userPosts = Post.find();
// const userPosts = await Post.find({}).toArray();
console.log(userPosts);

export default userPosts;