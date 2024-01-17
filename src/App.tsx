import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import { useState } from "react";
export default function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const toggleMode = () => {
		setIsDarkMode((isDarkMode) => !isDarkMode);
	};
	return (
		<div className={`${isDarkMode ? "dark" : "light"}`}>
			<div className='container'>
				<Navbar onToggleMode={toggleMode} />
				<main>
					<h1 className='headline'>
						Matthew
						<br />
						Sweet
					</h1>
					<p>
						I&apos;m a <strong>fullstack engineer</strong> with a
						passion for building dynamic web applications. I can
						work with your company as a <strong>full time</strong>{" "}
						developer or contract consultant. I bring to the table{" "}
						<strong>expertise</strong> on React, Vue, Sass,
						Tailwindcss, and API design.
					</p>
				</main>
				<section className='artwork'>
					<img src='/me_2.webp' alt='a beautifully styled computer' />
				</section>
				<Experience />
			</div>
		</div>
	);
}
