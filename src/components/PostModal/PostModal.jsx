import React from "react";
import styles from "./PostModal.module.css";

export default function PostModal({ exitModal, information }) {
	const stopExit = (e) => {
		e.preventDefault();
		e.stopPropagation();
		return false;
	};

	return (
		<div>
			<div onClick={() => exitModal({})} className={styles.modal_background}>
				<div onClick={stopExit} className={styles.modal_container}>
					<img />
					<div className={styles.post_info}>
						<h2>{information.subreddit_name_prefixed}</h2>
						<h3>u/{information.author}</h3>
					</div>
				</div>
			</div>
		</div>
	);
}
