import Nav from '../components/Nav';
import ChatBox from '../components/Chatbox'

import Sidebar from '../components/Sidebar';
import React from 'react'


const Main = () => {
  return (
    <div>

            <Sidebar />



          <div  class='mainbar'>

            <Nav />
            <ChatBox />
            
          </div>

      </div>
        
  )
}

export default Main