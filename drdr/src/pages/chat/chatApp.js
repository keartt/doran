import React, { useState } from 'react';
import Chat from './chat';
import ChatList from './chatList';

const chatList = ['chat1', 'chat2', 'chat3'];

const App = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [userName, setUserName] = useState('');

  const handleChatSelection = (chatName) => {
    setSelectedChat(chatName);
  };

  return (
    <div className="app-container">
      {selectedChat ? (
        <Chat chatName={selectedChat} userName={userName} />
      ) : (
        <div className="login-container">
          <h1>Welcome to the Chat App</h1>
          <input type="text" placeholder="Enter your name" value={userName} onChange={(e) => setUserName(e.target.value)} />
          <ChatList chats={chatList} handleChatSelection={handleChatSelection} />
        </div>
      )}
    </div>
  );
};

export default App;