import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import PostPreviewArea from "./components/PostPreviewArea/PostPreviewArea";
import PostModal from "./components/PostModal/PostModal";
import { useDispatch, useSelector } from "react-redux";
import {
	loadAllSubreddits,
	selectSubredditError,
	selectSubreddits,
} from "./features/subreddit/subredditsSlice";
import {
	loadThesePosts,
	selectPostError,
	selectPosts,
} from "./features/posts/postsSlice";

function App() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const params = useParams();

	const subreddits = useSelector(selectSubreddits);
	const posts = useSelector(selectPosts);

	const postError = useSelector(selectPostError);
	const subredditError = useSelector(selectSubredditError);

	useEffect(() => {
		dispatch(loadAllSubreddits());
		dispatch(
			loadThesePosts({
				requestType: "subreddit",
				requestParameter: params?.subreddit,
			})
		);
	}, [dispatch]);

	useEffect(() => {
		postError || subredditError
			? dispatch(
					loadThesePosts({
						requestType: "subreddit",
						requestParameter: "home",
					})
			  )
			: undefined;
		navigate("/Home");
	}, [postError, subredditError]);

	const [viewingPost, setViewingPost] = useState(false);
	const [postInfo, setPostInfo] = useState({});
	const viewPost = (information) => {
		setPostInfo(information);
		setViewingPost(!viewingPost);
	};

	const changeSubreddit = (subreddit) => {
		dispatch(
			loadThesePosts({
				requestType: "subreddit",
				requestParameter: subreddit,
			})
		);
		navigate(`/${subreddit}`);
	};

	const handleSearch = (query) => {
		dispatch(
			loadThesePosts({
				requestType: "search",
				requestParameter: query,
			})
		);
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
