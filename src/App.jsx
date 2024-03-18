import { useState } from "react";
import { useParams } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import PostPreviewArea from "./components/PostPreviewArea/PostPreviewArea";

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
	return (
		<>
			<div>
				<Header currentSubReddit={useParams()?.subreddit} />
				<PostPreviewArea posts={tempPosts} />
			</div>
		</>
	);
}

export default App;
