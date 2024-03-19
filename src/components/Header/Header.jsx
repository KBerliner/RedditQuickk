import React, { useEffect, useState } from "react";
import logo from "../../assets/LogoWithBackground.svg";
import styles from "./Header.module.css";
import SearchBar from "../SearchBar/SearchBar";
import MobileHeader from "../MobileHeader/MobileHeader";

export default function Header({
	changeSubreddit,
	subredditOptions,
	currentSubReddit,
	handleSearch,
}) {
	// Checking if the viewport is mobile
	const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

	// This is only for development purposes
	window.onresize = () => setIsMobile(window.innerWidth < 700);

	const [showMobileMenu, setShowMobileMenu] = useState(false);

	return (
		<>
			<nav
				data-testid="header"
				className={styles.header_container}
				data-subreddit={currentSubReddit}
			>
				{isMobile ? (
					<MobileHeader
						changeSubreddit={changeSubreddit}
						subredditOptions={subredditOptions}
						currentSubReddit={currentSubReddit}
						handleSearch={(query) => handleSearch(query)}
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
									<option key={subreddit}>{subreddit}</option>
								))}
							</select>
						</div>
						<img className={styles.logo} src={logo} />
						<SearchBar handleSearch={(query) => handleSearch(query)} />
					</>
				)}
			</nav>
		</>
	);
}
