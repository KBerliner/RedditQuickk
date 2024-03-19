import React from "react";
import styles from "./PostModal.module.css";

export default function PostModal({ exitModal, information }) {
	const stopExit = (e) => {
		e.preventDefault();
		e.stopPropagation();
		return false;
	};

	let image;

	if (information.type === "image")
		image = information.information.preview.images
			? information.information.preview.images[0].resolutions[1].url
			: information.information.thumbnail;

	return (
		<div>
			<div onClick={() => exitModal({})} className={styles.modal_background}>
				<div onClick={stopExit} className={styles.modal_container}>
					{information.type == "image" ? (
						<img src={image} />
					) : (
						<p>{information.information.selftext}</p>
					)}
					<div className={styles.post_info}>
						<h2>{information.information.subreddit_name_prefixed}</h2>
						<h3>u/{information.information.author}</h3>
					</div>
				</div>
			</div>
		</div>
	);
}
