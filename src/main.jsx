import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import store from "./app/store.js";
import { Provider } from "react-redux";
import "./index.css";
import {
	Navigate,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import ErrorElement from "./components/ErrorElement/ErrorElement.jsx";

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

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
