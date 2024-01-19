import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import About from "./routes/About";
import Hire from "./routes/HireMe";
import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
export default function App() {
	const location = useLocation();
	const [isDarkMode, setIsDarkMode] = useState(false);
	const toggleMode = () => {
		setIsDarkMode((isDarkMode) => !isDarkMode);
	};
	return (
		<div
			className={`${isDarkMode ? "dark" : "light"}`}
			data-testid='app-container'
		>
			<main className='content-grid'>
				<Navbar onToggleMode={toggleMode} location={location} />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/work' element={<Hire />} />
				</Routes>
			</main>
		</div>
	);
}
