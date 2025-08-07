import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const send = () => {
    const txt = input.trim();
    if (!txt) return;
    setMessages([...messages, { from: 'user', text: txt }]);
    setInput('');

    // ❗ replace with real API call
    const reply = `Echo: ${txt}`;
    setMessages(m => [...m, { from: 'bot', text: reply }]);
  };

  return (
    <div className={`chatbot ${open ? 'open' : ''}`}>
      {open && (
        <div className="chat-window">
          <header>KC Furn Assistant</header>

          <div className="messages">
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.from}`}>
                {m.text}
              </div>
            ))}
          </div>

          <div className="input-row">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Type a message"
            />
            <button onClick={send}>➤</button>
          </div>
        </div>
      )}

      <button
        className="toggle-btn"
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle chat"
      >
        💬
      </button>
    </div>
  );
};

export default Chatbot;