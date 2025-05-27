import React, { useRef, useState, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import ReactMarkdown from "react-markdown";

// Initialize the Generative AI model
const genAI = new GoogleGenerativeAI('AIzaSyAiV_SF4k-qRDPTDPBVEFMQ9d8eM1KLjoU');

const Chatbox = () => {
  const inputRef = useRef(null);
  const chatBodyRef = useRef(null);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi there! How can I help?' },
  ]);
  const [loading, setLoading] = useState(false);

  // Auto scroll chat to bottom smoothly when messages or loading changes
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, loading]);

  const handleSend = async () => {
    const userMsg = inputRef.current.value.trim();
    if (!userMsg) return;

    setMessages(prev => [...prev, { type: 'user', text: userMsg }]);
    inputRef.current.value = '';
    setLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: 'models/gemini-1.5-flash' });
      const result = await model.generateContent(userMsg);
      const response = await result.response;
      const botReply = await response.text();

      setMessages(prev => [...prev, { type: 'bot', text: botReply }]);
    } catch (error) {
      console.error('Error generating content:', error);
      setMessages(prev => [...prev, { type: 'bot', text: 'Sorry, something went wrong.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mainbar d-flex justify-content-center align-items-center">
      <div className="box">
        <h3 className="text-center mb-4">AIthinkr – Ask your doubt</h3>

        <div className="chat-body mb-3" ref={chatBodyRef} style={{ overflowY: 'auto', maxHeight: '400px' }}>
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.type}`}>
              <span className={`badge ${msg.type === 'user' ? 'bg-primary' : 'bg-secondary'} me-1`}>
                {msg.type === 'user' ? 'You' : 'Bot'}:
              </span>
              <span className="chat-text"><ReactMarkdown>{msg.text}</ReactMarkdown></span>
            </div>
          ))}

          {loading && (
            <div className="chat-message bot typing-indicator">
              <span className="badge bg-secondary me-1">Bot:</span>
              <span className="chat-text">Typing...</span>
            </div>
          )}
        </div>

        <div className="chat-footer d-flex">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Type your message..."
            ref={inputRef}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            disabled={loading}
          />
          <button className="btn btn-primary" onClick={handleSend} disabled={loading}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
