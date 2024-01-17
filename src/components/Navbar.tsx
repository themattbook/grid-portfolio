import { BsCircleHalf } from "react-icons/bs";
interface NavbarProps {
	onToggleMode: () => void;
}
export default function Navbar({ onToggleMode }: NavbarProps) {
	const handleIconClick = () => {
		onToggleMode();
	};
	return (
		<nav role='navigation'>
			<div className='nav-items'>
				<ul>
					<li>about</li>
					<li>resume</li>
					<li>hire me</li>
					<li>github</li>
					<li>archive</li>
					<li onClick={handleIconClick} role='img'>
						<BsCircleHalf />
					</li>
				</ul>
			</div>
		</nav>
	);
}
