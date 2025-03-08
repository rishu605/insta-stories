import { render, screen } from "@testing-library/react";
import StatusBar from "../components/StatusBar";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom"; // Import jest-dom for custom matchers

describe("StatusBar Component", () => {
  it("renders the current time", () => {
    // Mock the Date object to return a fixed time
    const mockDate = new Date(2023, 9, 1, 12, 0, 0);
    vi.setSystemTime(mockDate);

    render(<StatusBar />);
    expect(screen.getByText("12:00 PM")).toBeInTheDocument();
  });

  it("renders the Instagram logo", () => {
    render(<StatusBar />);
    expect(screen.getByText("Instagram")).toBeInTheDocument();
  });

  it("renders the battery icon", () => {
    render(<StatusBar />);
    expect(screen.getByRole("img", { hidden: true })).toBeInTheDocument();
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(<StatusBar />);
    expect(asFragment()).toMatchSnapshot();
  });
});