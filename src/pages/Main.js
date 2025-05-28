import Nav from '../components/Nav';
import ChatBox from '../components/Chatbox';
import Sidebar from '../components/Sidebar';
import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Main = () => {
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserId(user ? user.uid : null);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <Sidebar userId={userId} onSelectChat={setSelectedChatId} selectedChatId={selectedChatId} />
      <Nav />
      <ChatBox userId={userId} chatId={selectedChatId} onNewChat={setSelectedChatId} />
    </div>
  );
};

export default Main;