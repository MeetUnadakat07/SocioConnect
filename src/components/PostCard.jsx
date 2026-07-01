import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useNavigate } from "react-router-dom";

const PostCard = ({ id, user, post }) => {
  const [liked, setLiked] = useState(post.isLiked);
  const navigate = useNavigate()

  const handleOpenPost = () => {
    navigate(`/post/${id}`)
  }

  return (
    <div className="rounded-lg bg-white shadow-sm border border-gray-200">
      {/* Header  */}
      <div className="flex items-center p-4">
        <img src={user.avatar} alt={user.username} className="h-10 w-10 rounded-full" />
        <div className="ml-3">
          <p className="font-semibold">{user.username}</p>
          <p className="text-xs text-gray-500">{post.timestamp}</p>
        </div>
      </div>

      {/* Post Image */}
      <img src={post.image} alt="Post" className="w-full object-cover" onClick={handleOpenPost} />

      {/* Footer */}
      <div className="p-4">
        <div className="flex items-center space-x-4">
          <FavoriteIcon
            className={`cursor-pointer ${liked ? "text-pink-500" : "text-gray-500"}`}
            onClick={() => setLiked(!liked)}
          />
          <ChatBubbleOutlineIcon className="text-gray-600 cursor-pointer" />
        </div>
        <p className="mt-2 text-sm">
          <span className="font-semibold">{user.username}</span> {post.caption}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
