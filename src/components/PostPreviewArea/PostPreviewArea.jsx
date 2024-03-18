import React from "react";
import styles from "./PostPreviewArea.module.css";

import PostPreview from "../PostPreview/PostPreview";

export default function PostPreviewArea({ posts }) {
	return (
		<>
			<div className={styles.post_preview_area_container}>
				{posts.map((post) => (
					<PostPreview information={post} />
				))}
			</div>
		</>
	);
}
