import React from "react";
import styles from "./PostPreview.module.css";
import PostModal from "../PostModal/PostModal";

export default function PostPreview({ information, viewPost }) {
	return (
		<>
			<div
				onClick={() => viewPost(information)}
				className={styles.post_preview_container}
			>
				<img className={styles.post_preview_image} />
				<h2 className={styles.post_preview_title}>{information.title}</h2>
			</div>
		</>
	);
}
