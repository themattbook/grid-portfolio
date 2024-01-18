import { useState } from "react";
import { Link, Location } from "react-router-dom";
interface NavbarProps {
	onToggleMode: () => void;
	location: Location;
}
export default function Navbar({ onToggleMode }: NavbarProps) {
	const [modeText, setModeText] = useState("dark");
	const modeTextLabel = () => {
		if (modeText == "dark") {
			setModeText("light");
		} else {
			setModeText("dark");
		}
	};
	const handleIconClick = () => {
		onToggleMode();
		modeTextLabel();
	};
	const path = location.pathname;
	console.log(location);
	return (
		<nav role='navigation'>
			<div className='nav-items'>
				<ul>
					<li>
						<Link to={path === "/about" ? "/" : "/about"}>
							{path === "/about" ? "home" : "about"}
						</Link>
					</li>
					<li>resume</li>
					<li>
						<Link to='/work'>hire me</Link>
					</li>
					<li>github</li>
					<li>archive</li>
					<li onClick={handleIconClick} role='img'>
						{modeText}
					</li>
				</ul>
			</div>
		</nav>
	);
}
