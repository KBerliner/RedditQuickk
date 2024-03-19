import React from "react";
import styles from "./PostPreview.module.css";
import PostModal from "../PostModal/PostModal";

export default function PostPreview({ information, viewPost }) {
	const type = information.thumbnail.length > 10 ? "image" : "text";

	return (
		<>
			<div
				onClick={() => viewPost({ information, type })}
				className={styles.post_preview_container}
			>
				{information.thumbnail.length > 10 ? (
					<img
						src={
							information.thumbnail
								? information.thumbnail
								: information.preview.images[0].source.url
						}
						className={styles.post_preview_image}
					/>
				) : (
					<></>
				)}
				<h2 className={styles.post_preview_title}>{information.title}</h2>
			</div>
		</>
	);
}
