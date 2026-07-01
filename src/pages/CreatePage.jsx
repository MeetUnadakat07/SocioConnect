import React from "react";

const CreatePage = () => {
  return (
    <div className="pb-16 md:pb-0 min-h-screen bg-gray-50 flex justify-center pt-10 px-4">
      <div className="bg-white w-full max-w-xl rounded-xl shadow-md border p-8">

        {/* TITLE */}
        <h1 className="text-2xl font-bold text-center mb-6">
          Create a new post
        </h1>

        {/* IMAGE PREVIEW */}
        <div className="flex flex-col items-center gap-4 mb-6">
          <div className="w-72 h-72 border-2 border-dashed border-pink-400 rounded-lg flex items-center justify-center text-gray-400">
            Image Preview
          </div>
          <input type="file" accept="image/*" className="text-sm" />
        </div>

        {/* CAPTION */}
        <textarea
          rows={3}
          placeholder="Write a caption..."
          className="w-full border rounded-xl p-3 mb-6 focus:ring-2 focus:ring-pink-400 focus:outline-none"
        />

        {/* OPTIONS */}
        <div className="space-y-3 mb-6">
          {[
            { label: "Tag people", action: "Add" },
            { label: "Add location", action: "Add" },
            { label: "Advanced settings", action: "View" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between border-b pb-2"
            >
              <input
                placeholder={item.label}
                className="flex-1 outline-none text-gray-700"
              />
              <button className="text-pink-500 font-semibold text-sm">
                {item.action}
              </button>
            </div>
          ))}
        </div>

        {/* POST BUTTON */}
        <button className="w-full py-3 rounded-3xl bg-linear-to-r from-violet-600 via-fuchsia-600 to-pink-500 text-white font-semibold hover:scale-105 transition">
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePage;
