import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <div className='sidebar'>
        <h2>Chat Menu</h2>
        <br/>
        <div class='newchat'>
          <a href="#newchat" className='btn btn-primary'> New Chat</a>
        </div>
        <br/>
        <br/>
        <div class='recent'>
          <h3>Recents</h3>
          <ul>
            <li><a href="#section1">Section 1</a></li>
            <li><a href="#section2">Section 2</a></li>
          </ul>
        </div>

        <div class='yesterday'>
          <h3>Yesterday</h3>
          <ul>
            <li><a href="#section1">Section 1</a></li>
            <li><a href="#section2">Section 2</a></li>
            <li><a href="#section3">Section 3</a></li>
          </ul>
        </div>


        <div class='lastWeek'>
          <h3>Last Week</h3>
          <ul>
            <li><a href="#section1">Section 1</a></li>
            <li><a href="#section2">Section 2</a></li>
            <li><a href="#section3">Section 3</a></li>
          </ul>
        </div>
      </div>    
    </div>  
    )   
}

export default Sidebar

