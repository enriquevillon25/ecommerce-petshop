import { render, screen } from "@testing-library/react";
import { HomePage } from "./HomePage";

describe("Home Page Test", () => {
  const component = render(<HomePage />);
  console.log(component)
  it("render component", () => {
    expect(screen.getByText("Hola")).toBeInTheDocument();
  });
});
