import React, { useEffect, useState } from "react";
import logo from "../../assets/LogoWithBackground.svg";
import styles from "./Header.module.css";
import SearchBar from "../SearchBar/SearchBar";
import MobileHeader from "../MobileHeader/MobileHeader";

export default function Header({
	changeSubreddit,
	subredditOptions,
	currentSubReddit,
}) {
	// Checking if the viewport is mobile
	const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

	// This is only for development purposes
	window.onresize = () => setIsMobile(window.innerWidth < 700);

	const [showMobileMenu, setShowMobileMenu] = useState(false);

	return (
		<>
			<nav className={styles.header_container}>
				{isMobile ? (
					<MobileHeader
						changeSubreddit={changeSubreddit}
						subredditOptions={subredditOptions}
						currentSubReddit={currentSubReddit}
					/>
				) : (
					<>
						<div>
							<h3>r/</h3>
							<select
								onChange={({ target }) => changeSubreddit(target.value)}
								value={currentSubReddit}
								className={styles.subreddit_selector}
							>
								{subredditOptions.map((subreddit) => (
									<option key={subreddit.display_name}>
										{subreddit.display_name}
									</option>
								))}
							</select>
						</div>
						<img className={styles.logo} src={logo} />
						<SearchBar />
					</>
				)}
			</nav>
		</>
	);
}
