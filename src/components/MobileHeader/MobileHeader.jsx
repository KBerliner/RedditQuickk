import React, { useState } from "react";
import styles from "./MobileHeader.module.css";

import logo from "../../assets/LogoWithBackground.svg";
import SearchBar from "../SearchBar/SearchBar";

export default function MobileHeader({ changeSubreddit, subredditOptions }) {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<>
			<div>
				<img className={styles.logo_mobile} src={logo} />
			</div>
			<span
				onClick={() => setShowMenu(!showMenu)}
				className={`${styles.show_menu_button} ${
					showMenu ? styles.show_menu_button_bottom : ""
				}`}
			></span>
			{showMenu ? (
				<>
					<div className={styles.menu_background}></div>
					{/* <select>
						{subredditOptions.map((subreddit) => (
							<option key={subreddit.display_name}>
								{subreddit.display_name}
							</option>
						))}
					</select> */}
				</>
			) : (
				<></>
			)}
		</>
	);
}
