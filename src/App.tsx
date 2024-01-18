import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import About from "./routes/About";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
export default function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/about",
			element: <About />,
		},
	]);
	const [isDarkMode, setIsDarkMode] = useState(false);
	const toggleMode = () => {
		setIsDarkMode((isDarkMode) => !isDarkMode);
	};
	return (
		<div
			className={`${isDarkMode ? "dark" : "light"}`}
			data-testid='app-container'
		>
			<div className='container'>
				<Navbar onToggleMode={toggleMode} />
				<RouterProvider router={router} />
			</div>
		</div>
	);
}
