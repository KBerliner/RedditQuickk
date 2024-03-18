import React from "react";
import styles from "./SearchBar.module.css";

import SearchIcon from "../../assets/SearchIcon.svg";

import { useState } from "react";

export default function SearchBar() {
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
				className={styles.search_input}
			></input>
			<img className={styles.search_icon} src={SearchIcon} />
		</>
	);
}
