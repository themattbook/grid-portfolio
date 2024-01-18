import { useState } from "react";
interface NavbarProps {
	onToggleMode: () => void;
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
	return (
		<nav role='navigation'>
			<div className='nav-items'>
				<ul>
					<li>
						<a href='/'>home</a>
					</li>
					<li>
						<a href='/about'>about</a>
					</li>
					<li>resume</li>
					<li>hire me</li>
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
