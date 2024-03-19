import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadThesePosts = createAsyncThunk(
	"posts/loadThesePosts",
	async ({ requestType, requestParameter }) => {
		if (requestType === "search") {
			const response = await fetch(
				`https://api.reddit.com/search.json?q=${requestParameter}&raw_json=1`
			);

			const json = await response.json();
			return json;
		} else if (requestType === "subreddit") {
			const response = await fetch(
				`https://api.reddit.com/${requestParameter
					.split(" ")
					.join("")}.json?raw_json=1`
			);

			const json = await response.json();
			return json;
		} else {
			const response = await fetch(
				"https://api.reddit.com/r/popular?raw_json=1"
			);

			const json = await response.json();
			return json;
		}
	}
);

export const postSlice = createSlice({
	name: "posts",
	initialState: {
		isLoading: false,
		hasError: false,
		posts: [],
	},
	extraReducers: (builder) => {
		builder
			.addCase(loadThesePosts.pending, (state, action) => {
				state.isLoading = true;
				state.hasError = false;
			})
			.addCase(loadThesePosts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.hasError = false;
				state.posts = action.payload.data.children.map((post) => post.data);
			})
			.addCase(loadThesePosts.rejected, (state, action) => {
				state.isLoading = false;
				state.hasError = true;
			});
	},
});

export const { loadPosts } = postSlice.actions;
export const selectPosts = (state) => state.posts.posts;

export default postSlice.reducer;
