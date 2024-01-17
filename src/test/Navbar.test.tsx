import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Navbar from "../components/Navbar.tsx";

test("Navbar component renders without crashing", () => {
	render(<Navbar onToggleMode={() => {}} />);
	const navElement = screen.getByRole("navigation");
	expect(navElement).toBeInTheDocument();
});

test("Navbar renders the navigation items", () => {
	render(<Navbar onToggleMode={() => {}} />);
	const aboutElement = screen.getByText("about");
	const resumeElement = screen.getByText("resume");
	const hireMeElement = screen.getByText("hire me");
	const githubElement = screen.getByText("github");
	const archiveElement = screen.getByText("archive");

	expect(aboutElement).toBeInTheDocument();
	expect(resumeElement).toBeInTheDocument();
	expect(hireMeElement).toBeInTheDocument();
	expect(githubElement).toBeInTheDocument();
	expect(archiveElement).toBeInTheDocument();
});

test("Navbar calls onToggleMode when the icon is clicked", () => {
	const onToggleModeMock = vi.fn();
	render(<Navbar onToggleMode={onToggleModeMock} />);
	const iconElement = screen.getByRole("img");

	iconElement.click();

	expect(onToggleModeMock).toHaveBeenCalledTimes(1);
});
