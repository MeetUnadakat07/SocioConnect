import React, { useState } from "react";
import { Avatar, IconButton, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import SearchIcon from "@mui/icons-material/Search";
import { messagesData } from "../data/messagesData";

const MessagesPage = () => {
  const [selectedChat, setSelectedChat] = useState(messagesData[0]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredChat = messagesData.filter((chat) =>
    chat.user.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pb-16 md:pb-0 h-screen bg-gray-50">
      <div className="h-full flex justify-center px-4 py-6">
        <div className="w-full max-w-7xl h-full grid grid-cols-1 lg:grid-cols-12 bg-white rounded-xl shadow-md overflow-hidden">

          {/* LEFT SIDEBAR */}
          <div className="lg:col-span-4 border-r flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Messages</h2>
              <SearchIcon className="text-gray-500" />
            </div>

            <div className="p-3">
              <TextField
                placeholder="Search messages..."
                size="small"
                fullWidth
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                slotProps={{
                  input: {
                    style: {
                      borderRadius: "9999px",
                      backgroundColor: "#f9fafb",
                    },
                  },
                }}
              />
            </div>

            <div className="flex-1 overflow-y-auto">
              {filteredChat.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => setSelectedChat(chat)}
                  className={`flex items-center gap-3 p-4 cursor-pointer transition ${
                    selectedChat.id === chat.id
                      ? "bg-pink-100"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <Avatar src={chat.user.avatar} />
                  <div className="flex-1">
                    <p className="font-semibold">{chat.user.fullName}</p>
                    <p className="text-sm text-gray-500 truncate">
                      {chat.lastMessage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CHAT PANEL */}
          <div className="lg:col-span-8 flex flex-col">
            {selectedChat ? (
              <>
                <div className="flex items-center gap-3 p-4 border-b bg-gray-50">
                  <Avatar src={selectedChat.user.avatar} />
                  <div>
                    <p className="font-semibold">{selectedChat.user.fullName}</p>
                    <p className="text-xs text-gray-500">
                      @{selectedChat.user.username}
                    </p>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {selectedChat.messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        msg.from === "me" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${
                          msg.from === "me"
                            ? "bg-linear-to-r from-pink-500 to-orange-400 text-white rounded-br-none"
                            : "bg-gray-100 rounded-bl-none"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t bg-gray-50 p-3 flex items-center gap-2">
                  <TextField
                    placeholder="Type a message..."
                    size="small"
                    fullWidth
                    slotProps={{
                      input: {
                        style: {
                          borderRadius: "9999px",
                          backgroundColor: "#fff",
                        },
                      },
                    }}
                  />
                  <IconButton disabled>
                    <SendIcon className="text-gray-400" />
                  </IconButton>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-400">
                Select a chat to start messaging
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
