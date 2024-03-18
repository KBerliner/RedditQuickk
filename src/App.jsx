import { useState } from "react";
import { useParams } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import PostPreviewArea from "./components/PostPreviewArea/PostPreviewArea";
import PostModal from "./components/PostModal/PostModal";

const tempPosts = [
	{
		title: "example",
		subreddit_name_prefixed: "r/facepalm",
		author: "user",
	},
	{
		title: "example Two",
		subreddit_name_prefixed: "r/funny",
		author: "user Two",
	},
];

function App() {
	const [viewingPost, setViewingPost] = useState(false);
	const [postInfo, setPostInfo] = useState({});
	const viewPost = (information) => {
		setPostInfo(information);
		setViewingPost(!viewingPost);
	};

	viewingPost
		? (document.body.style.overflow = "hidden")
		: (document.body.style.overflow = "inherit");

	return (
		<>
			<div>
				<Header currentSubReddit={useParams()?.subreddit} />
				{viewingPost ? (
					<PostModal
						exitModal={(info) => viewPost(info)}
						information={postInfo}
					/>
				) : (
					<></>
				)}
				<PostPreviewArea
					viewPost={(info) => viewPost(info)}
					posts={tempPosts}
				/>
			</div>
		</>
	);
}

export default App;
