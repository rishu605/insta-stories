import { render, screen, fireEvent, act } from "@testing-library/react";
import StoryViewer from "../components/StoryViewer";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom"; // Import jest-dom for custom matchers

const mockStoryUrl = "/story1.jpg";

describe("StoryViewer Component", () => {
  it("renders the story image", () => {
    render(<StoryViewer storyUrl={mockStoryUrl} onNext={() => {}} onPrev={() => {}} onClose={() => {}} hasNext={true} />);
    expect(screen.getByAltText("Story")).toBeInTheDocument();
  });

  it("calls onClose when clicking outside", () => {
    const mockClose = vi.fn();
    render(<StoryViewer storyUrl={mockStoryUrl} onNext={() => {}} onPrev={() => {}} onClose={mockClose} hasNext={true} />);

    fireEvent.click(screen.getByRole("presentation")); // Click outside
    expect(mockClose).toHaveBeenCalled();
  });

  it("calls onNext when clicking on the right side", () => {
    const mockNext = vi.fn();
    render(<StoryViewer storyUrl={mockStoryUrl} onNext={mockNext} onPrev={() => {}} onClose={() => {}} hasNext={true} />);

    act(() => {
      fireEvent.mouseDown(screen.getByRole("presentation"), { clientX: 300 }); // Click right side
    });

    expect(mockNext);
  });

  it("calls onPrev when clicking on the left side", async () => {
    const mockPrev = vi.fn();
    render(<StoryViewer storyUrl={mockStoryUrl} onNext={() => {}} onPrev={mockPrev} onClose={() => {}} hasNext={true} />);

    await act(async () => {
      fireEvent.mouseDown(screen.getByRole("presentation"), { clientX: 50 }); // Click left side
    });

    expect(mockPrev);
  });

  it("automatically moves to the next story after 5 seconds", async () => {
    vi.useFakeTimers();
    const mockNext = vi.fn();

    act(() => {
      render(<StoryViewer storyUrl={mockStoryUrl} onNext={mockNext} onPrev={() => {}} onClose={() => {}} hasNext={true} />);
    });

    act(() => {
      vi.advanceTimersByTime(5000); // Simulate 5 seconds
    });

    expect(mockNext);
    vi.useRealTimers();
  });
  
  

  it("shows loading spinner before image loads", () => {
    render(<StoryViewer storyUrl={mockStoryUrl} onNext={() => {}} onPrev={() => {}} onClose={() => {}} hasNext={true} />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("hides spinner after image loads", () => {
    render(<StoryViewer storyUrl={mockStoryUrl} onNext={() => {}} onPrev={() => {}} onClose={() => {}} hasNext={true} />);

    const image = screen.getByAltText("Story");
    fireEvent.load(image); // Simulate image load

    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(<StoryViewer storyUrl={mockStoryUrl} onNext={() => {}} onPrev={() => {}} onClose={() => {}} hasNext={true} />);
    expect(asFragment()).toMatchSnapshot();
  });
});