import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { notificationsData } from "../data/notificationsData";

const Notifications = () => {
  const getIcon = (type) => {
    switch (type) {
      case "like":
        return <FavoriteIcon className="text-pink-500" />;
      case "comment":
        return <ChatBubbleOutlineIcon className="text-blue-500" />;
      case "follow":
        return <PersonAddAltIcon className="text-purple-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-8">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Notifications</h1>

        {notificationsData.length > 0 ? (
          <div className="space-y-4">
            {notificationsData.map((notif) => (
              <div
                key={notif.id}
                className="flex items-center justify-between bg-gray-50 hover:bg-pink-50 transition-all rounded-lg p-4 border border-gray-100"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={notif.user.avatar}
                    alt={notif.user.username}
                    className="h-12 w-12 rounded-full border border-gray-300"
                  />
                  <div>
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-gray-900">
                        {notif.user.username}
                      </span>{" "}
                      {notif.message}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                  </div>
                </div>

                <div>{getIcon(notif.type)}</div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-10">
            No new notifications yet
          </p>
        )}
      </div>
    </div>
  );
};

export default Notifications;
