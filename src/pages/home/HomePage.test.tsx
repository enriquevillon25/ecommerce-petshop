import { render, screen } from "@testing-library/react";
import { HomePage } from "./HomePage";

describe("Home Page Test", () => {
  const component = render(<HomePage />);
  it("render component", () => {
    expect(screen.getByText("Hola")).toBeInTheDocument();
  });
});
