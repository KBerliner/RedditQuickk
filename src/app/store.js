import { configureStore } from "@reduxjs/toolkit";
import subredditsSlice from "../features/subreddit/subredditsSlice";
import postsSlice from "../features/posts/postsSlice";

export default configureStore({
	reducer: {
		subreddits: subredditsSlice,
		posts: postsSlice,
	},
});
