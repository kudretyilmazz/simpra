// Import Testing Library
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Import Components
import Button from "components/Button/Button";

// Import Assets
import CollectIcon from "components/icons/CollectIcon";

describe("btn-test", () => {
	test("button should render without crash", async () => {
		// Arrange
		render(<Button label="btn" name="cta_test" />);

		// Act
		const button = screen.getByRole("button");

		// Assertion
		expect(button).toBeInTheDocument();
	});

	test("button label prop", () => {
		// Arrange
		render(<Button label="btn" name="cta_test" />);

		// Assertion
		expect(screen.getByText("btn")).toBeInTheDocument();
	});

	test("button onclick prop", async () => {
		// Arrange
		const user = userEvent.setup();
		const onClick = jest.fn();
		render(<Button label="btn" name="cta_test" onClick={onClick} />);

		// Act
		const button = screen.getByRole("button");
		await user.click(button);

		// Assertion
		expect(onClick).toBeCalledTimes(1);
	});

	test("button button classname", () => {
		// Arrange
		render(<Button label="btn" name="cta_test" />);

		// Act
		const button = screen.getByRole("button");

		// Assertion
		expect(button.className).toBe("button");
	});

	test("button icon", () => {
		// Arrange
		render(<Button label="Collect" name="collect_cta" icon={<CollectIcon />} />);

		// Act
		const icon = screen.getByRole("document");

		// Assertion
		expect(icon).toBeInTheDocument();
	});
});
