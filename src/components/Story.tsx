import { FC } from "react";

interface StoryProps {
  story: {
    id: string;
    username: string;
    avatarUrl: string;
    storyUrl: string;
    timestamp: string;
  };
  onClick: (storyUrl: string) => void;
}

const Story: FC<StoryProps> = ({ story, onClick }) => {
  return (
    <div className="story" onClick={() => onClick(story.storyUrl)}>
      <img src={story.avatarUrl} alt={story.username} className="avatar" />
      <p className="username">{story.username}</p>
    </div>
  );
};

export default Story;