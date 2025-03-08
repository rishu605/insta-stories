import { render } from "@testing-library/react";
import App from "../App";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom"; // Import jest-dom for custom matchers

describe("App Component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});