import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";

import App from "../App";
import store from "../app/store";
import { Provider } from "react-redux";
import {
	Navigate,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import ErrorElement from "../components/ErrorElement/ErrorElement";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Navigate to="/Home" />,
		errorElement: <ErrorElement />,
	},
	{
		path: "/:subreddit",
		element: <App />,
		errorElement: <ErrorElement />,
	},
]);

describe("Main App File", () => {
	afterEach(cleanup);

	it("should render", () => {
		// Setup
		const expected = true;
		let result = false;
		const { getByTestId } = render(
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		);

		// Exercise
		if (getByTestId("app")) {
			result = true;
		}

		// Verify
		expect(result).toBe(expected);
	});

	it("renders ErrorElement when there is an error in router configuration", () => {
		// Setup
		const expected = true;
		let result = false;

		// Simulate an error in router configuration
		const errorRouter = createBrowserRouter([
			{
				path: "/",
				element: <Navigate to="/Home" />,
				errorElement: <ErrorElement />,
			},
			// Invalid configuration: Missing 'element' property
			{
				path: "/error",
				// element is missing
			},
		]);

		const { getByTestId } = render(
			<Provider store={store}>
				<RouterProvider router={errorRouter} />
			</Provider>
		);

		// Exercise
		if (getByTestId("error-element")) {
			result = true;
		}

		// Verify
		expect(result).toBe(expected);
	});

	it("redirects to Home route when loaded", () => {
		// Setup
		const expectedPath = "/Home";

		// Render the App component with the router configuration
		render(
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		);

		// Verify
		expect(window.location.pathname).toBe(expectedPath);
	});
});
