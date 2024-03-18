import React from "react";
import logo from "../../assets/LogoWithBackground.svg";
import styles from "./Header.module.css";
import SearchBar from "../SearchBar/SearchBar";

export default function Header() {
	return (
		<>
			<nav className={styles.header_container}>
				<div>
					<h3>r/</h3>

					{/* Template below, replace with actual selector for subreddits */}
					<h3>facepalm</h3>
				</div>
				<img className={styles.logo} src={logo} />
				<SearchBar />
			</nav>
		</>
	);
}
