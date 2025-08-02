import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from ".";

describe("Counter component", () => {
  it("incrementa o contador ao clicar no botão", async () => {
    render(<Counter />);

    const button = screen.getByRole("button", { name: /incrementar/i });
    const heading = screen.getByRole("heading", { name: /contador: 0/i });

    expect(heading).toBeInTheDocument();

    await userEvent.click(button);

    expect(screen.getByText(/contador: 1/i)).toBeInTheDocument();

    await userEvent.click(button);

    expect(screen.getByText(/contador: 2/i)).toBeInTheDocument();
  });
});
