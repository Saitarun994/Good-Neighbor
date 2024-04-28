import React from 'react'
import './ChatBot.css'
import { Link } from 'react-router-dom'

function ChatBot() {

  const openAI = () => {
    // ref to chatbot page
  }

  return (
    <div className="chatbot">
      <Link to="/chat">
      <div className="cursor-pointer text-white font-semi-bold bg-orange-500 rounded-md hover:bg-orange-400 button" onclick={() => openAI()}>
        FAQ ChatBot
      </div>
      </Link>
    </div>
  )
}

export default ChatBot
