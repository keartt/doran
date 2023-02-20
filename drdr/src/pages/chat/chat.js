import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const Chat = ({ chatName, userName }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.emit('join', { chatName, userName });
  }, [chatName, userName]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]);
    });
    return () => {
      socket.off('message');
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('sendMessage', { chatName, userName, message });
    setMessage('');
  };

  return (
    <div className="chat-container">
      <div className="messages-container">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.user === userName ? 'mine' : 'other'}`}>
            <div className="user">{msg.user}</div>
            <div className="text">{msg.text}</div>
          </div>
        ))}
      </div>
      <form className="input-container" onSubmit={handleSubmit}>
        <input type="text" placeholder="Type a message" value={message} onChange={(e) => setMessage(e.target.value)} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;