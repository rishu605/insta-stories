import { FC } from "react";

interface StoryListProps {
  stories: {
    id: string;
    username: string;
    avatarUrl: string;
    storyUrl: string;
    timestamp: string;
  }[];
  onSelectStory: (index: number) => void;
}

const StoryList: FC<StoryListProps> = ({ stories, onSelectStory }) => {
  return (
    <div className="stories-container">
      {stories.map((story, index) => (
        <div key={story.id} className="story" onClick={() => onSelectStory(index)}>
          <img src={story.avatarUrl} alt={story.username} className="avatar" />
          <p className="username">{story.username}</p>
        </div>
      ))}
    </div>
  );
};

export default StoryList;