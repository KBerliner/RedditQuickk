import React from "react";
import { Link, Navigate } from "react-router-dom";

export default function ErrorElement() {
	return (
		<>
			<h1>
				Whoops! It looks like you've encountered an error. Here's a link back.
			</h1>
			<Link to="/home" />
		</>
	);
}
