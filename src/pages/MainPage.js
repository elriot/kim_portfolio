import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';

// --- Command Processing Logic ---
const processCommand = (command, navigate) => {
  const args = command.toLowerCase().split(' ');
  const cmd = args[0];

  switch (cmd) {
    case 'help':
      // Return a structured object instead of a plain string
      return {
        type: 'list',
        lines: [
          { command: 'whois', description: 'Learn more about me' },
          { command: 'projects', description: 'View my work' },
          { command: 'contact', description: 'Get in touch' },
          { command: 'clear', description: 'Clear the terminal screen' },
        ]
      };

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
      return 'clear';

    default:
      return `command not found: ${command}\nType 'help' to see a list of available commands.`;
  }
};

// --- Helper component to render different types of output ---
const CommandOutput = ({ output }) => {
  // Handle the structured list from the 'help' command
  if (output && output.type === 'list') {
    return (
      <div className="output-list">
        <p>Available commands:</p>
        <ul>
          {output.lines.map(line => (
            <li key={line.command}>
              <span className="command-name">{line.command}</span>
              <span className="command-description">{line.description}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // Handle all other simple text outputs
  const text = output || '';
  return (
    <span className="line-text" dangerouslySetInnerHTML={{ __html: text.toString().replace(/\n/g, '<br />') }} />
  );
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

  useEffect(() => { inputRef.current?.focus(); }, []);
  useEffect(() => { scrollRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [history]);

  const handleInputChange = (e) => { setInput(e.target.value); };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!input) return;

    const output = processCommand(input, navigate);

    if (output === 'clear') {
      setHistory([]);
    } else {
      setHistory(prev => [...prev, { text: input, isCommand: true }, { text: output, isCommand: false }]);
    }
    setInput('');
  };

  const focusInput = () => { inputRef.current?.focus(); };

  return (
    <div className="main-container page-container-height" onClick={focusInput}>
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="dot red"></span><span className="dot yellow"></span><span className="dot green"></span>
          </div>
          <div className="terminal-title">soopin-kim -- -bash</div>
        </div>
        <div className="terminal-body">
          {history.map((line, index) => (
            <div key={index} className={line.isCommand ? 'command-line' : 'output-line'}>
              {line.isCommand ? (
                <>
                  <span className="prompt-symbol">$</span>
                  <span className="line-text">{line.text}</span>
                </>
              ) : (
                <CommandOutput output={line.text} />
              )}
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