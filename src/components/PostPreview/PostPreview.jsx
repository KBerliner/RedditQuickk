import React, { useState } from "react";
import styles from "./PostPreview.module.css";

export default function PostPreview({ information, viewPost }) {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
	const type = information.thumbnail.length > 10 ? "image" : "text";

	const handleClick = () => {
		console.log(information);
		if (isMobile) {
			type === "text" ? viewPost({ information, type }) : undefined;
		} else {
			viewPost({ information, type });
		}
	};

	return (
		<>
			<div onClick={handleClick} className={styles.post_preview_container}>
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
