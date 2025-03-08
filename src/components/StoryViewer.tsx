import { FC, MouseEvent } from "react";

interface StoryViewerProps {
  storyUrl: string;
  onNext: () => void;
  onPrev: () => void;
  onClose: () => void;
}

const StoryViewer: FC<StoryViewerProps> = ({ storyUrl, onNext, onPrev, onClose }) => {
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const { clientX, target, currentTarget } = event;
    const middle = currentTarget.clientWidth / 2;

    // Close the story if clicked outside the image
    if (target === currentTarget) {
      onClose();
      return;
    }

    // Determine next or previous based on click position
    if (clientX > middle) {
      onNext(); // Clicked on right half -> Next Story
    } else {
      onPrev(); // Clicked on left half -> Previous Story
    }
  };

  return (
    <div className="story-overlay" onClick={handleClick}>
      <div className="story-container">
        <img src={storyUrl} alt="Story" className="story-image" />
      </div>
    </div>
  );
};

export default StoryViewer;