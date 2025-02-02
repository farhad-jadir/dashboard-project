import React, { useEffect, useState, useRef } from 'react';
import { FaCamera, FaImage, FaPaperclip } from 'react-icons/fa';
import Card from './Card';
import Button from '../ReusableComponents/Button';
import data from './data.json';

const Hero = () => {
  const [cards, setCards] = useState([]);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatBoxRef = useRef(null);
  const [chatOpened, setChatOpened] = useState(false);

  useEffect(() => {
    setCards(data);
  }, []);

  const toggleChat = () => {
    if (chatBoxRef.current) {
      chatBoxRef.current.classList.toggle('hidden');
      if (!chatOpened) {
        // Send an automatic welcome message from the admin
        setMessages([
          { text: "Hello! How can I assist you today?", sender: "admin" },
          ...messages,
        ]);
        setChatOpened(true);
      }
    }
  };

  const sendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
      // Send a reply from the admin after the user message
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "You will be kindly contacted shortly. 🙏 Thank You! 🙏.", sender: "admin" }
        ]);
      }, 1000); // Admin's message will appear after 1 second
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevents the default new line in the input
      sendMessage(); // Sends the message when Enter is pressed
    }
  };

  return (
    <div className="p-6 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
      <Button 
        onClick={toggleChat} 
        className="fixed bottom-6 right-6 bg-orange-500 text-white text-lg font-bold rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
      >
        C
      </Button>
      <div ref={chatBoxRef} className="hidden fixed bottom-20 right-6 bg-white shadow-lg rounded-lg w-80 h-96 flex flex-col">
        <div className="bg-[#F26922] text-white p-3 font-semibold rounded-t-lg">Chat with Cypher</div>
        <div className="flex-1 overflow-y-auto p-2 border rounded-md mb-2 h-64">
          {messages.map((msg, index) => (
            <div key={index} className={`p-2 rounded-md mb-1 max-w-[70%] ${msg.sender === "user" ? "bg-blue-500 text-white self-end ml-auto" : "bg-gray-300 text-black self-start"}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 p-2">
          <textarea 
            className="border p-2 rounded-md" 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress} 
            placeholder="Enter your question..."
            rows={2}
          />
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <FaCamera className="text-gray-500 cursor-pointer" size={20} />
              <FaImage className="text-gray-500 cursor-pointer" size={20} />
              <FaPaperclip className="text-gray-500 cursor-pointer" size={20} />
            </div>
            <Button onClick={sendMessage} className="w-full sm:w-auto hover:bg-orange-800 text-[#FAFAFA] rounded-full">Send</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
