import React from "react";

const Stories = ({ stories }) => {
  return (
    <div className="flex space-x-4 overflow-x-auto bg-white p-4 rounded-lg shadow-sm scrollbar-hide">
      {stories.map((story) => (
        <div key={story.id} className="flex flex-col items-center space-y-1">
          <img
            src={story.image}
            alt={story.username}
            className="h-16 w-16 rounded-full border-2 border-pink-500 p-0.5"
          />
          <span className="text-xs text-gray-600">{story.username}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
