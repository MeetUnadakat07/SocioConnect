import React, { useEffect, useState } from "react";
import { Avatar, Chip } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useNavigate } from "react-router-dom";

import { discoverCategories } from "../data/discoverCategories";
import { posts } from "../data/posts";
import { getAllUsers } from "../api/localAuth";

const DiscoverPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 NEW: follow state
  const [followedUsers, setFollowedUsers] = useState(new Set());

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await getAllUsers();
        setUsers(res.data.users);
      } catch (error) {
        console.error("Failed to fetch users", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const toggleFollow = (userId) => {
    setFollowedUsers((prev) => {
      const updated = new Set(prev);
      updated.has(userId) ? updated.delete(userId) : updated.add(userId);
      return updated;
    });
  };

  const trendingPosts = posts
    .slice()
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 9);

  const formatNumber = (num) => {
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "k";
    return num.toString();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading discover content...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-8 px-4">
      <div className="w-full max-w-6xl space-y-10">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-3xl font-bold bg-linear-to-r from-pink-600 via-red-500 to-orange-400 bg-clip-text text-transparent">
            Discover
          </h1>
          <p className="text-gray-500 mt-2 sm:mt-0">
            Explore trending posts and people
          </p>
        </div>

        {/* CATEGORIES */}
        <div className="flex flex-wrap gap-3">
          {discoverCategories.map((category) => (
            <Chip
              key={category}
              label={category}
              clickable
              onClick={() => setSelectedCategory(category)}
              className={`${
                selectedCategory === category
                  ? "bg-pink-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            />
          ))}
        </div>

        {/* TRENDING POSTS */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Trending posts
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {trendingPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => navigate(`/post/${post.id}`)}
                className="relative group cursor-pointer rounded-lg overflow-hidden"
              >
                <img
                  src={post.image}
                  alt="Trending"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center space-x-6 text-white">
                  <div className="flex items-center gap-1">
                    <FavoriteBorderIcon fontSize="small" />
                    {formatNumber(post.likes)}
                  </div>
                  <div className="flex items-center gap-1">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    {post.comments.length}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PEOPLE */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            People you may know
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {users.map((user) => {
              const isFollowing = followedUsers.has(user._id);

              return (
                <div
                  key={user._id}
                  className="bg-white p-4 rounded-lg border shadow-sm flex flex-col items-center text-center"
                >
                  <Avatar
                    sx={{ width: 72, height: 72 }}
                    src={`https://ui-avatars.com/api/?name=${user.name}`}
                  />

                  <p className="font-semibold mt-3 flex items-center gap-1">
                    {user.name}
                    <VerifiedIcon fontSize="small" className="text-blue-500" />
                  </p>

                  <p className="text-sm text-gray-500">
                    {user.city || "Unknown"}
                  </p>

                  <p className="text-xs text-gray-400 mt-1">
                    {user.bio || "No bio available"}
                  </p>

                  <button
                    onClick={() => toggleFollow(user._id)}
                    className={`mt-4 px-5 py-2 rounded-full text-sm font-semibold transition ${
                      isFollowing
                        ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
                        : "bg-linear-to-r from-pink-500 to-orange-400 text-white hover:scale-105"
                    }`}
                  >
                    {isFollowing ? "Following" : "Follow"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default DiscoverPage;
