import React, { useContext, useRef, useEffect } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { context } from '../../context/context';

const MainBot = () => {
  const { onSent, input, setInput, chatHistory, loading, isSpeaking, speakText, handleStopSpeaking } = useContext(context);
  const chatEndRef = useRef(null);
  const recognition = useRef(null);

  const handleSend = () => { // .trim() removes whitespaces ->calls OnSent
    if (input.trim()) {
      onSent(input.trim());
      stopRecognition();
    }
  };

  const handleInputChange = (e) => { //handles change between audio and text input ->calls setInput
    setInput(e.target.value);//mentains when audio input is provided
  };

  const handleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Your browser does not support speech recognition. Please use a supported browser.');
      return;
    }
  
    if (!recognition.current) {
      recognition.current = new window.webkitSpeechRecognition();
      recognition.current.continuous = true;
      recognition.current.interimResults = true; // Capture interim results
      recognition.current.lang = 'en-US';
  
      recognition.current.onresult = (event) => {
        let finalTranscript = '';
        let interimTranscript = '';
  
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript + ' ';
          } else {
            interimTranscript += event.results[i][0].transcript + ' ';
          }
        }
  
        // Use finalTranscript or interimTranscript based on your application's logic
        setInput(finalTranscript.trim() || interimTranscript.trim());
  
        // Optionally, you can automatically send the input after voice recognition
        if (finalTranscript.trim() || interimTranscript.trim()) {
          handleSend();
        }
      };
  
      recognition.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
      };
    }
  
    recognition.current.start();

    setTimeout(() => {
      if (recognition.current && recognition.current.state === 'recording') {
        recognition.current.stop();
        console.log('Speech recognition stopped due to inactivity.');
      }
    }, 3000);
  };
  const stopRecognition = () => {
    if (recognition.current) {
      recognition.current.stop();
    }
  };

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  return (
    <div className='main'>
      <div className="nav">
        <p>Financial Health Assistant</p>
        <img src={assets.user_icon} alt="user icon" />
      </div>

      <div className="main-container">
        <div className="chat-history">
          {chatHistory.map((chat, index) => (
            <div key={index} className="chat-item">
              <div className="chat-prompt">
                <img src={assets.user_icon} alt="user icon" />
                <p>{chat.prompt}</p>
              </div>
              <div className="chat-response">
                <img src={assets.gemini_icon} alt="gemini icon" />
                <p dangerouslySetInnerHTML={{ __html: loading && index === chatHistory.length - 1 ? 'loading...' : chat.response }}></p>
                <button onClick={() => speakText(chat.response)}>🔊 Listen</button>
                {isSpeaking && <button onClick={handleStopSpeaking}>⏹ Stop</button>}
              </div>
            </div>
          ))}
          <div ref={chatEndRef}></div>
        </div>

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={handleInputChange}
              value={input}
              type="text"
              placeholder='Enter a prompt here'
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" onClick={handleVoiceInput} />
              {input && <img onClick={handleSend} src={assets.send_icon} alt="" />}
            </div>
          </div>
          <p className="bottom-info">
            FINLEY may display inaccurate information, including about people, so double-check its responses. Your privacy and Gemini Apps.
          </p>
          {loading && (
            <p className="loading-indicator">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainBot;
