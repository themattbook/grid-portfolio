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
	const shouldRenderLink = (path: string) => {
		return location.pathname !== path;
	};
	return (
		<nav role='navigation'>
			<div className='nav-items'>
				<ul>
					{shouldRenderLink("/") && (
						<li>
							<Link to='/'>home</Link>
						</li>
					)}
					{shouldRenderLink("/about") && (
						<li>
							<Link to='/about'>about</Link>
						</li>
					)}
					{shouldRenderLink("/work") && (
						<li>
							<Link to='/work'>hire me</Link>
						</li>
					)}
					{shouldRenderLink("/resume") && (
						<li>
							<Link to='/resume'>resume</Link>
						</li>
					)}
					<li>
						<Link
							to='https://github.com/themattbook'
							target='_blank'
							rel='noopener noreferrer'
						>
							github
						</Link>
					</li>
					<li>projects</li>
					<li onClick={handleIconClick} role='img'>
						{modeText}
					</li>
				</ul>
			</div>
		</nav>
	);
}
