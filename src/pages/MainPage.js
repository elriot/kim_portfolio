import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';

// --- Command Processing Logic ---
const processCommand = (command, navigate) => {
  const args = command.toLowerCase().split(' ');
  const cmd = args[0];

  switch (cmd) {
    case 'help':
      return `Available commands:
- whois    : Learn more about me
- projects : View my work
- contact  : Get in touch
- clear    : Clear the terminal screen`;

    case 'whois':
      navigate('/about');
      return 'Navigating to About Me...';

    case 'projects':
      navigate('/portfolios');
      return 'Navigating to Portfolio...';

    case 'contact':
      navigate('/contact');
      return 'Navigating to Contact...';
      
    case 'clear':
      return 'clear'; // Special command handled by the component

    default:
      return `command not found: ${command}
Type 'help' to see a list of available commands.`;
  }
};


export const MainPage = () => {
  const [history, setHistory] = useState([
    { text: 'Welcome to my interactive portfolio!', isCommand: false },
    { text: "Type 'help' to get started.", isCommand: false },
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  // Focus the input field on first render
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Scroll to the bottom whenever history changes
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);


  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!input) return;

    const output = processCommand(input, navigate);

    if (output === 'clear') {
      setHistory([]);
    } else {
      const newHistory = [
        ...history,
        { text: input, isCommand: true },
        { text: output, isCommand: false },
      ];
      setHistory(newHistory);
    }
    
    setInput('');
  };

  // Allow the entire div to act as a focus area for the input
  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="main-container page-container-height" onClick={focusInput}>
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="terminal-title">soopin-kim -- -bash</div>
        </div>
        <div className="terminal-body">
          {history.map((line, index) => (
            <div key={index} className={line.isCommand ? 'command-line' : 'output-line'}>
              {line.isCommand && <span className="prompt-symbol">$</span>}
              <span className="line-text">{line.text}</span>
            </div>
          ))}
          <form onSubmit={handleFormSubmit} className="input-form">
            <span className="prompt-symbol">$</span>
            <input
              ref={inputRef}
              type="text"
              className="terminal-input"
              value={input}
              onChange={handleInputChange}
              autoFocus
            />
          </form>
          <div ref={scrollRef} />
        </div>
      </div>
    </div>
  );
};