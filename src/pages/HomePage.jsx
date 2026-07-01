import React from "react";
import { useNavigate } from "react-router-dom";
import { storiesData } from "../data/storiesData";
import { posts } from "../data/posts";
import { profileData } from "../data/profileData";

const HomePage = () => {
  const navigate = useNavigate();

  // 🔥 EXCLUDE PROFILE OWNER POSTS
  const feedPosts = posts.filter(
    (post) => post.user.username !== profileData.username
  );

  return (
    <div className="max-w-4xl py-6 space-y-6 md:ml-40 mx-auto pb-16 md:pb-0">

      {/* STORIES */}
      <div className="flex gap-4 overflow-x-auto px-2 pb-2 scrollbar-hide">
        {storiesData.map((story) => (
          <div key={story.id} className="flex flex-col items-center min-w-[72px]">
            <div className="h-16 w-16 rounded-full p-0.5 bg-linear-to-tr from-pink-500 to-yellow-400">
              <img
                src={story.image}
                className="h-full w-full rounded-full object-cover border-2 border-white"
              />
            </div>
            <span className="text-xs mt-1 truncate w-16 text-center">
              {story.username}
            </span>
          </div>
        ))}
      </div>

      {/* POSTS FEED */}
      {feedPosts.map((post) => (
        <div key={post.id} className="bg-white rounded-lg shadow-sm border">
          <div className="flex items-center p-3">
            <img src={post.user.avatar} className="h-8 w-8 rounded-full" />
            <span className="ml-3 font-semibold text-sm">
              {post.user.username}
            </span>
          </div>

          <div onClick={() => navigate(`/post/${post.id}`)} className="cursor-pointer">
            <img src={post.image} className="w-full object-cover" />
          </div>

          <div className="p-3 text-sm">
            <span className="font-semibold mr-1">
              {post.user.username}
            </span>
            {post.caption}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
