import React from "react";
import styles from "./SearchBar.module.css";

import SearchIcon from "../../assets/SearchIcon.svg";

import { useState } from "react";

export default function SearchBar({ show }) {
	// Checking if the viewport is mobile
	const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

	// This is for Development Purposes only
	window.onresize = () => setIsMobile(window.innerWidth < 700);

	const [query, setQuery] = useState("");

	const handleInput = ({ target }) => {
		setQuery(target.value);
	};

	return (
		<>
			<input
				type="text"
				placeholder="Search"
				value={query}
				onInput={handleInput}
				className={`${styles.search_input} ${
					show ? styles.search_input_mobile : ""
				}`}
			></input>
			<img
				className={`${styles.search_icon} ${
					show ? styles.search_icon_mobile : ""
				}`}
				src={SearchIcon}
			/>
		</>
	);
}
