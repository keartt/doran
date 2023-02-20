import React from 'react';

const ChatList = ({ chats, handleChatSelection }) => {
  return (
    <div className="chat-list-container">
      {chats.map((chat) => (
        <div key={chat} className="chat" onClick={() => handleChatSelection(chat)}>
          <div className="name">{chat}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;