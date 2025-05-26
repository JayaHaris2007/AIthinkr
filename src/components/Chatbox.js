import React, { useRef, useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI('AIzaSyAiV_SF4k-qRDPTDPBVEFMQ9d8eM1KLjoU');

const Chatbox = () => {
  const inputRef = useRef(null);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi there! How can I help?' },
  ]);

  const handleSend = async () => {
    const userMsg = inputRef.current.value.trim();
    if (!userMsg) return;

    setMessages((prev) => [...prev, { type: 'user', text: userMsg }]);
    inputRef.current.value = '';

    try {
      const model = genAI.getGenerativeModel({ model: 'models/gemini-1.5-flash' });
      const result = await model.generateContent(userMsg);
      const response = await result.response;
      const botReply = await response.text();

      setMessages((prev) => [...prev, { type: 'bot', text: botReply }]);
    } catch (error) {
      console.error('Error generating content:', error);
      setMessages((prev) => [
        ...prev,
        { type: 'bot', text: 'Sorry, something went wrong.' },
      ]);
    }
  };

  return (
    <div className="container mt-4">
      <div className="box border p-3 rounded shadow-sm">
        <div
          className="chat-body mb-3"
          style={{ maxHeight: '300px', overflowY: 'auto' }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`chat-message ${
                msg.type === 'user' ? 'text-end' : 'text-start'
              } mb-2`}
            >
              <span
                className={`badge ${
                  msg.type === 'user' ? 'bg-primary' : 'bg-secondary'
                }`}
              >
                {msg.type === 'user' ? 'You' : 'Bot'}:
              </span>{' '}
              {msg.text}
            </div>
          ))}
        </div>
        <div className="chat-footer d-flex">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Type your message..."
            ref={inputRef}
          />
          <button className="btn btn-primary" onClick={handleSend}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
