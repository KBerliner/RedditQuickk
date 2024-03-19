import React from "react";
import styles from "./PostPreviewArea.module.css";

import PostPreview from "../PostPreview/PostPreview";

export default function PostPreviewArea({ posts, viewPost }) {
	return (
		<>
			<div className={styles.post_preview_area_container}>
				{posts.map((post) => (
					<PostPreview
						key={post.title}
						viewPost={(info) => viewPost(info)}
						information={post}
					/>
				))}
			</div>
		</>
	);
}
