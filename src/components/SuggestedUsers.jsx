import React from "react";

const SuggestedUsers = ({ users }) => {
  return (
    <div className="rounded-lg bg-white p-4 shadow-sm border border-gray-200">
      <h2 className="mb-3 text-lg font-semibold text-gray-700">Suggested for you</h2>
      <div className="space-y-3">
        {users.map((user) => (
          <div key={user.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={user.avatar} alt={user.username} className="h-10 w-10 rounded-full" />
              <div>
                <p className="text-sm font-medium">{user.username}</p>
                <p className="text-xs text-gray-500">{user.fullName}</p>
              </div>
            </div>
            <button className="text-xs font-semibold text-pink-500 hover:text-pink-600">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedUsers;
