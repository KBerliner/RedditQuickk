import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import store from "./app/store.js";
import { Provider } from "react-redux";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/:subreddit",
		element: <App />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
