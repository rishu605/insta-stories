import { render, screen, fireEvent } from "@testing-library/react";
import StoryList from "../components/StoryList";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom"; // Import jest-dom for custom matchers

const mockStories = [
  { id: "1", username: "john_doe", avatarUrl: "/avatar1.jpg", storyUrl: "/story1.jpg", timestamp: "now" },
  { id: "2", username: "jane_doe", avatarUrl: "/avatar2.jpg", storyUrl: "/story2.jpg", timestamp: "now" },
];

describe("StoryList Component", () => {
  it("renders stories", () => {
    render(<StoryList stories={mockStories} onSelectStory={() => {}} />);
    expect(screen.getByText("john_doe")).toBeInTheDocument();
    expect(screen.getByText("jane_doe")).toBeInTheDocument();
  });

  it("triggers onSelectStory when clicked", () => {
    const mockSelect = vi.fn();
    render(<StoryList stories={mockStories} onSelectStory={mockSelect} />);

    fireEvent.click(screen.getByText("john_doe"));
    expect(mockSelect).toHaveBeenCalledWith(0);

    fireEvent.click(screen.getByText("jane_doe"));
    expect(mockSelect).toHaveBeenCalledWith(1);
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(<StoryList stories={mockStories} onSelectStory={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });
});