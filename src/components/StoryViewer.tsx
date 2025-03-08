import { FC, MouseEvent, useEffect } from "react";

interface StoryViewerProps {
  storyUrl: string;
  onNext: () => void;
  onPrev: () => void;
  onClose: () => void;
  hasNext: boolean;
}

const StoryViewer: FC<StoryViewerProps> = ({ storyUrl, onNext, onPrev, onClose, hasNext }) => {
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

  useEffect(() => {
    const timer = setTimeout(() => {
      if (hasNext) {
        onNext();
      } else {
        onClose(); // No next story, so close the viewer
      }
    }, 5000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [storyUrl, hasNext, onNext, onClose]);

  return (
    <div className="story-overlay" onClick={handleClick}>
      <div className="story-container">
        <img src={storyUrl} alt="Story" className="story-image" />
      </div>
    </div>
  );
};

export default StoryViewer;