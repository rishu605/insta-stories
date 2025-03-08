import { render, screen } from "@testing-library/react";
import Layout from "../components/Layout";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom"; // Import jest-dom for custom matchers

describe("Layout Component", () => {
  it("renders the StatusBar and StoryPage components", () => {
    render(<Layout />);
    // Check if StatusBar is rendered
    expect(screen.getByText(/Instagram/i)).toBeInTheDocument();
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(<Layout />);
    expect(asFragment()).toMatchSnapshot();
  });
});