import StoryList from "./StoryList";
import StoryViewer from "./StoryViewer";
import { StoryType } from "../data/data";
import { useEffect, useState } from "react";

const StoryPage = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [stories, setStories] = useState<StoryType[]>([]);

  useEffect(() => {
    fetch("/stories.json")
      .then((response) => response.json())
      .then((data: StoryType[]) => setStories(data))
      .catch((error) => console.error("Error fetching stories:", error));
  }, []);

  const handleNextStory = () => {
    if (currentIndex === null || currentIndex >= stories.length - 1) {
      setCurrentIndex(null); // Close viewer if no more stories
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevStory = () => {
    if (currentIndex === null || currentIndex <= 0) {
      setCurrentIndex(null); // Close viewer if at first story
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleCloseStory = () => {
    setCurrentIndex(null);
  };

  return (
    <div className="story-page">
      {/* Stories at the Top */}
      <StoryList stories={stories} onSelectStory={(index) => setCurrentIndex(index)} />

      {/* Full-Screen Story Viewer */}
      {currentIndex !== null && (
        <div className="story-overlay">
          <StoryViewer 
            storyUrl={stories[currentIndex].storyUrl} 
            onNext={handleNextStory} 
            onPrev={handlePrevStory} 
            onClose={handleCloseStory}
            hasNext={currentIndex < stories.length - 1}
          />
        </div>
      )}
    </div>
  );
};

export default StoryPage;