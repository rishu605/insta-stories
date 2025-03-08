import { FC, MouseEvent, useEffect, useState } from "react";

interface StoryViewerProps {
  storyUrl: string;
  onNext: () => void;
  onPrev: () => void;
  onClose: () => void;
  hasNext: boolean;
}

const STORY_DURATION = 5000;

const StoryViewer: FC<StoryViewerProps> = ({ storyUrl, onNext, onPrev, onClose, hasNext }) => {
  const [animationClass, setAnimationClass] = useState("fade-in");
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true); // Track image loading

  const triggerNextStory = () => {
    setAnimationClass("fade-out");
    setTimeout(() => {
      onNext();
      setAnimationClass("fade-in");
      setLoading(true); // Reset loading state for next image
    }, 500);
  };

  useEffect(() => {
    setAnimationClass("fade-in");
    setProgress(0);
    setLoading(true); // Reset loading when changing stories

    const interval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 100 / (STORY_DURATION / 100), 100));
    }, 100);

    const timer = setTimeout(() => {
      if (hasNext) {
        triggerNextStory();
      } else {
        onClose();
      }
    }, STORY_DURATION);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [storyUrl, hasNext, onNext, onClose]);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const { clientX, target, currentTarget } = event;
    const middle = currentTarget.clientWidth / 2;

    if (target === currentTarget) {
      onClose();
      return;
    }

    setAnimationClass("fade-out");
    setTimeout(() => {
      if (clientX > middle) {
        onNext();
      } else {
        onPrev();
      }
      setAnimationClass("fade-in");
      setProgress(0);
      setLoading(true); // Reset loading state on manual navigation
    }, 500);
  };

  return (
    <div role="presentation" className="story-overlay" onClick={handleClick}>
      <div className={`story-container ${animationClass}`}>
        {loading && <div role="status" className="spinner"></div>}
        <img
          src={storyUrl}
          alt="Story"
          className="story-image"
          onLoad={() => setLoading(false)}
          onError={() => setLoading(false)} // Hide spinner even if image fails
          style={{ display: loading ? "none" : "block" }}
        />
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
};

export default StoryViewer;