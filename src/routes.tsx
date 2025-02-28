import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AppLayout from "@layouts/AppLayout";
import PageNotFound from "./pages/Notfound";
import PlayMode from "./pages/PlayMode";


const routeNodes = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <PageNotFound />,
		children: [
			{
				index: true,
				element: <App />,
			},
			{
				path: "play-mode",
				element: <PlayMode />,
			},
			{
				path: "leaderboard",
				element: <div>Leader Board</div>,
			},
			{
				path: "categories",
				element: <div>Categories</div>,
			},
			{
				path: "multiplayer",
				element: <div>Multiplayer</div>,
			},
			{
				path: "gaming-stats",
				element: <div>Gaming Stats</div>,
			},
			{
				path: "how-to-play",
				element: <div>How To Play</div>,
			},
			{
				path: "settings",
				element: <div>Settings</div>,
			},
			{
				path: "help",
				element: <div>Help</div>,
			},
		],
	},
]);

export default routeNodes;
