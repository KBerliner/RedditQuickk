import React from "react";
import styles from "./PostPreview.module.css";

export default function PostPreview({ information }) {
	console.log(information);
	return (
		<>
			<div className={styles.post_preview_container}>
				<img className={styles.post_preview_image} />
				<h2 className={styles.post_preview_title}>{information.title}</h2>
			</div>
		</>
	);
}
