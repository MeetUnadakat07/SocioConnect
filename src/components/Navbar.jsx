import React from "react";
import { Link, useLocation } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddBoxIcon from "@mui/icons-material/AddBox";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";

const navItems = [
  { path: "/home", icon: <HomeIcon />, label: "Home" },
  { path: "/discover", icon: <SearchIcon />, label: "Discover" },
  { path: "/create", icon: <AddBoxIcon />, label: "Create" },
  { path: "/notifications", icon: <FavoriteBorderIcon />, label: "Notifications" },
  { path: "/messages", icon: <ChatOutlinedIcon />, label: "Messages" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-64 flex-col border-r bg-white px-6 py-6">
        {/* Logo */}
        <Link to="/home" className="flex items-center gap-2 mb-10">
          <InstagramIcon className="text-pink-500" />
          <span className="text-xl font-semibold">InstaClone</span>
        </Link>

        {/* Nav Items */}
        <nav className="flex flex-col gap-2 flex-1">
          {navItems.map(({ path, icon, label }) => {
            const active = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-4 px-4 py-3 rounded-lg transition ${
                  active
                    ? "bg-pink-100 text-pink-600 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {icon}
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Profile */}
        <Link to="/profile" className="flex items-center gap-3 mt-auto">
          <img
            src="https://i.pinimg.com/736x/cd/e7/73/cde773e113620c91851ff948f76ad7dd.jpg"
            alt="Profile"
            className="h-10 w-10 rounded-full"
          />
          <span className="font-medium">Profile</span>
        </Link>
      </aside>

      {/* MOBILE BOTTOM NAV */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t">
        <div className="flex justify-around py-2">
          {navItems.map(({ path, icon }) => {
            const active = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`text-2xl ${
                  active ? "text-pink-600" : "text-gray-600"
                }`}
              >
                {icon}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
