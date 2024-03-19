import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import PostPreviewArea from "./components/PostPreviewArea/PostPreviewArea";
import PostModal from "./components/PostModal/PostModal";
import { useDispatch, useSelector } from "react-redux";
import {
	loadAllSubreddits,
	selectSubreddits,
} from "./features/subreddit/subredditsSlice";
import { loadThesePosts, selectPosts } from "./features/posts/postsSlice";

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
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const params = useParams();

	const subreddits = useSelector(selectSubreddits);
	const posts = useSelector(selectPosts);

	useEffect(() => {
		dispatch(loadAllSubreddits());
		dispatch(loadThesePosts("subreddit", params?.subreddit));
	}, [dispatch]);

	const [viewingPost, setViewingPost] = useState(false);
	const [postInfo, setPostInfo] = useState({});
	const viewPost = (information) => {
		setPostInfo(information);
		setViewingPost(!viewingPost);
	};

	const changeSubreddit = (subreddit) => {
		navigate(`/${subreddit}`);
	};

	const handleSearch = (query) => {
		console.log(query);
	};

	viewingPost
		? (document.body.style.overflow = "hidden")
		: (document.body.style.overflow = "inherit");

	return (
		<>
			<div>
				<Header
					changeSubreddit={(subreddit) => changeSubreddit(subreddit)}
					subredditOptions={subreddits}
					currentSubReddit={params?.subreddit}
					handleSearch={(query) => handleSearch(query)}
				/>
				{viewingPost ? (
					<PostModal
						exitModal={(info) => viewPost(info)}
						information={postInfo}
					/>
				) : (
					<></>
				)}
				<PostPreviewArea viewPost={(info) => viewPost(info)} posts={posts} />
			</div>
		</>
	);
}

export default App;
