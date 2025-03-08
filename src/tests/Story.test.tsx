import { render, screen, fireEvent } from "@testing-library/react";
import Story from "../components/Story";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom"; // Import jest-dom for custom matchers

const mockStory = {
  id: "1",
  username: "john_doe",
  avatarUrl: "/avatar1.jpg",
  storyUrl: "/story1.jpg",
  timestamp: "now",
};

describe("Story Component", () => {
  it("renders story avatar and username", () => {
    render(<Story story={mockStory} onClick={() => {}} />);
    expect(screen.getByAltText("john_doe")).toBeInTheDocument();
    expect(screen.getByText("john_doe")).toBeInTheDocument();
  });

  it("calls onClick with storyUrl when clicked", () => {
    const mockClick = vi.fn();
    render(<Story story={mockStory} onClick={mockClick} />);

    fireEvent.click(screen.getByText("john_doe"));
    expect(mockClick).toHaveBeenCalledWith("/story1.jpg");
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(<Story story={mockStory} onClick={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });
});