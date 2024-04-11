import { render, screen } from "@testing-library/react";
import { Home } from "./Home";

describe("Home Page Test", () => {
  const component = render(<Home />);
  it("render component", () => {
    expect(screen.getByText("Hola")).toBeInTheDocument();
  });
});
