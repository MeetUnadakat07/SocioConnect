import React from "react";
import { useNavigate } from "react-router-dom";
import { posts } from "../data/posts";
import { profileData } from "../data/profileData";

const ProfilePage = () => {
  const navigate = useNavigate();
  const user = profileData;

  const userPosts = posts.filter(
    (post) => post.user.username === user.username
  );

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center pt-8">
      <div className="w-full max-w-5xl px-4 space-y-8">

        {/* PROFILE HEADER */}
        <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col sm:flex-row items-center sm:items-start sm:space-x-8">
          <img
            src={user.avatar}
            alt={user.username}
            className="h-32 w-32 rounded-full border-4 border-pink-500"
          />

          <div className="flex-1 mt-4 sm:mt-0 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 mb-3">
              <h2 className="text-2xl font-bold text-gray-800">
                {user.username}
              </h2>
              <div className="flex space-x-3">
                <button className="px-4 py-1 text-sm border rounded-lg">
                  Edit profile
                </button>
                <button className="px-4 py-1 text-sm border rounded-lg">
                  Settings
                </button>
              </div>
            </div>

            <div className="flex space-x-6 text-sm mb-4">
              <span><strong>{userPosts.length}</strong> Posts</span>
              <span><strong>{user.followers}</strong> Followers</span>
              <span><strong>{user.following}</strong> Following</span>
            </div>

            <div>
              <p className="font-semibold">{user.fullName}</p>
              <p className="text-gray-600 text-sm">{user.bio}</p>
            </div>
          </div>
        </div>

        {/* POSTS GRID */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Posts</h3>

          {userPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {userPosts.map((post) => (
                <div
                  key={post.id}
                  className="overflow-hidden rounded-lg border cursor-pointer"
                  onClick={() => navigate(`/post/${post.id}`)}
                >
                  <img
                    src={post.image}
                    alt={post.caption}
                    className="w-full h-72 object-cover hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-8">
              No posts yet. Share your first photo!
            </p>
          )}
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;