import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-purple-50 via-pink-50 to-orange-50">
      <nav className="w-full border-b bg-white/80 backdrop-blur-md fixed top-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-6">
          <h1 className="font-bold text-xl bg-linear-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
            InstaClone
          </h1>

          <div className="flex items-center gap-3">
            <button
              className="px-5 py-2 border border-gray-300 rounded-3xl text-gray-700 bg-white hover:bg-gray-50 transition-all"
              onClick={handleLoginClick}
            >
              Login
            </button>
            <button
              className="px-5 py-2 rounded-3xl text-white bg-linear-to-r from-purple-600 via-pink-600 to-orange-500 hover:scale-105 transition-all font-semibold"
              onClick={handleSignupClick}
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      <main className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 mt-24 lg:mt-32 flex-1 max-w-7xl mx-auto gap-12">
        <div className="flex flex-col max-w-lg text-center lg:text-left">
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 bg-linear-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent leading-tight">
            Share Your Vibe, Connect With The World
          </h2>

          <p className="text-gray-600 text-lg mb-8">
            Express yourself, discover amazing content, and connect with people
            who share your passions. Your story deserves to be seen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              className="px-8 py-4 bg-linear-to-r from-purple-600 via-pink-600 to-orange-500 text-white rounded-3xl font-semibold hover:scale-105 hover:shadow-xl transition-all"
              onClick={handleLoginClick}
            >
              Login
            </button>

            <button
              className="px-8 py-4 border-2 border-gray-300 rounded-3xl text-gray-700 hover:border-purple-600 transition-all"
              onClick={handleSignupClick}
            >
              Sign Up
            </button>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="absolute inset-0 bg-linear-to-tr from-purple-300/30 via-purple-300/30 to-orange-300/30 blur-3xl"></div>
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
            alt="Social media mockup"
            className="relative w-80 h-96 object-cover
            rounded-3xl shadow-2xl"
          />
        </div>
      </main>

      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold mb-4 bg-linear-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">Trusted by millions</h3>
            <p className="text-gray-600 mb-10">Join a global community of creators and dreamers.</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                <div>
                    <p className="text-4xl font-bold text-gray-800">10M+</p>
                    <p className="text-sm text-gray-500">Users</p>
                </div>
                <div>
                    <p className="text-4xl font-bold text-gray-800">5B+</p>
                    <p className="text-sm text-gray-500">Likes</p>
                </div>
                <div>
                    <p className="text-4xl font-bold text-gray-800">1B+</p>
                    <p className="text-sm text-gray-500">Shares</p>
                </div>
                <div>
                    <p className="text-4xl font-bold text-gray-800">500M+</p>
                    <p className="text-sm text-gray-500">Posts</p>
                </div>
            </div>
        </div>
      </section>

      <footer className="border-t bg-white py-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center px-6 gap-3">
            <span className="font-semibold bg-linear-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent text-lg">InstaClone</span>
            <p className="text-gray-500 text-sm">&copy; 2025 InstaClone. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
