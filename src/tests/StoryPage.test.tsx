import { render } from "@testing-library/react";
import StoryPage from "../components/StoryPage";
import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock story data
const mockStories = [
  { id: "1", username: "john_doe", avatarUrl: "/avatar1.jpg", storyUrl: "/story1.jpg", timestamp: "2024-02-10" },
  { id: "2", username: "jane_smith", avatarUrl: "/avatar2.jpg", storyUrl: "/story2.jpg", timestamp: "2024-02-11" }
];

describe("StoryPage Component", () => {
  beforeEach(() => {
    // Mock fetch API to return predefined stories
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockStories),
      })
    ) as unknown as typeof fetch;
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<StoryPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
