import React from 'react'
import './ChatBot.css'

function ChatBot() {

  const openAI = () => {
    // ref to chatbot page
  }

  return (
    <div className="chatbot">
      <div className="cursor-pointer text-white font-semi-bold bg-orange-500 rounded-md hover:bg-orange-400 button" onclick={() => openAI()}>
        FAQ ChatBot
      </div>
    </div>
  )
}

export default ChatBot
