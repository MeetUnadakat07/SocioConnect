import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { posts } from "../data/posts";

const PostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find((p) => p.id === Number(id));

  const currentUser = {
    username: "meet",
  };

  const [comments, setComments] = useState(post?.comments || []);
  const [newComment, setNewComment] = useState("");

  if (!post) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <p className="text-gray-500">Post not found</p>
      </div>
    );
  }

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const commentObj = {
      username: currentUser.username,
      text: newComment,
    };

    setComments((prev) => [...prev, commentObj]);
    setNewComment("");
  };

  return (
    <div className="bg-gray-100 h-[calc(100vh-64px)]">
      {/* BACK BUTTON */}
      <div className="px-6 pt-3">
        <button
          onClick={() => navigate(-1)}
          className="h-9 w-9 rounded-full bg-black text-white flex items-center justify-center"
        >
          ←
        </button>
      </div>

      <div className="flex justify-center mt-2">
        <div className="bg-white w-full max-w-5xl h-[82vh] rounded-lg shadow flex overflow-hidden">

          {/* IMAGE */}
          <div className="w-3/5 bg-black flex items-center justify-center">
            <img
              src={post.image}
              alt="post"
              className="w-full h-full object-contain"
            />
          </div>

          {/* DETAILS */}
          <div className="w-2/5 flex flex-col">
            {/* HEADER */}
            <div className="flex items-center px-4 py-3 border-b">
              <img
                src={post.user.avatar}
                className="h-8 w-8 rounded-full"
                alt="avatar"
              />
              <span className="ml-3 font-semibold">
                {post.user.username}
              </span>
            </div>

            {/* CAPTION */}
            <div className="px-4 py-3 border-b text-sm">
              <span className="font-semibold mr-1">
                {post.user.username}
              </span>
              {post.caption}
            </div>

            {/* COMMENTS */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
              {comments.map((c, i) => (
                <p key={i} className="text-sm">
                  <span className="font-semibold mr-1">
                    {c.username}
                  </span>
                  {c.text}
                </p>
              ))}
            </div>

            {/* ADD COMMENT */}
            <div className="border-t px-4 py-3 flex items-center gap-2">
              <input
                type="text"
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="flex-1 text-sm border rounded-full px-3 py-2 outline-none focus:ring-1 focus:ring-pink-400"
              />
              <button
                onClick={handleAddComment}
                className={`text-sm font-semibold ${
                  newComment.trim()
                    ? "text-pink-500"
                    : "text-gray-400 cursor-not-allowed"
                }`}
                disabled={!newComment.trim()}
              >
                Post
              </button>
            </div>

            {/* TIMESTAMP */}
            <div className="px-4 py-2 text-xs text-gray-500">
              {post.createdAt}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
