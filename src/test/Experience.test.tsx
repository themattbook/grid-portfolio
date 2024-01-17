import { render, screen } from "@testing-library/react";
import Experience from "../components/Experience.tsx";

test("Experience renders correctly", () => {
	render(<Experience />);
	const navElement = screen.getByRole("experience");
	expect(navElement).toBeInTheDocument();
});
