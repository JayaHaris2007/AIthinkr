import React from 'react'

const Chatbox = () => {
  return (
    <div>
        <div className="container">
            <div class="row">
                <div class="box">
                    <div class="chat-body">
                        <div class="chat-message user"><span class="badge bg-primary">You:</span> Hello!</div>
                        <div class="chat-message bot"><span class="badge bg-secondary">Bot:</span> Hi there! How can I help?</div>
                    </div>
                    <div class="chat-footer d-flex">
                        <input type="text" class="form-control me-2" placeholder="Type your message..." />
                        <button class="btn btn-primary">Send</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chatbox