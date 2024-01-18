import { render, screen } from "@testing-library/react";
import App from "../App";

test("App component renders without crashing", () => {
	render(<App />);
	const appContainer = screen.getByTestId("app-container");
	expect(appContainer).toBeInTheDocument();
});
