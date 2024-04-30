import { useState } from 'react'
import '../App.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import { MainContainer, ChatContainer, MessageList, Message, MessageInput , TypingIndicator } from '@chatscope/chat-ui-kit-react'


function App() {

  const API_KEY = "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"
  const [typing , setTyping] = useState(false)

  const [messages, setMessages] = useState([
    {
      message:"Hello my name is Hubert, how can I help you today?",
      sender: "ChatGPT",
      direction:"Incoming"
    }
  ]);

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      //direction:"Incoming"
    }
    const newMessages = [...messages,newMessage] //all old messages + new message
    //update message state
    setMessages(newMessages)
    //typing indicator
    setTyping(true)
    //process message to chatgpt
    await processMessageTOChatgGPT(newMessages) //new messages contains the updated conversation
  }

  async function processMessageTOChatgGPT(chatMessages) {
    // formatting our messages to chatgpt api format
    let apiMessages = chatMessages.map((messageObject)=>{
      let role ="";
      if(messageObject.sender === "ChatGPT")
      {
        role="assistant"
      }
      else 
      {
        role = "user"
      }
      return { role:role, content:messageObject.message}
    })

    // role : "user"-> msg from the user , "assistant"-> msg from gpt
    // role: "system"-> initial msg defining how we want gpt to talk
    const systemMessage = {
      role: "system",
      content: "You are an FAQ system, named Hubert, that is empathetic if people are trying to find their items and very respectable and a great service, and you have multiple features that include, posts about the neighborhood that alerts the local area about the news to help the residents and tourists know about new attraction spots, new trends and local favorites, another feature you have is the lost and found that is a lifeline for people who lost their belongings, the same feature is also for people who want to post their foundings to alert the area of any possible \"Good Neighbors\" about their lost items being found. Another key feature you have is the map that takes in the coordinates of the posts from its meta data and have lost items pinned in areas that they were lost at."
    } 

    const apiRequestBody = {
      "model":"gpt-3.5-turbo",
      "messages": [
        systemMessage,
        ...apiMessages  // formatted for gpt [msg1,msg2,msg3 ...]
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions",{
      method:"POST",
      headers:{
        "Authorization":"Bearer "+API_KEY,
        "Content-Type":"application/json"
      },
      body: JSON.stringify(apiRequestBody)
    })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data);
      console.log(data.choices[0].message.content)
      setMessages(
        [...chatMessages,{
          message: data.choices[0].message.content,
          sender: "ChatGPT",
          direction:"Incoming"
        }]
      )
      setTyping(false);
    })
  
  }

  return (
    <div>
      <div>
        <MainContainer className="chatPage">
          <ChatContainer>
            <MessageList
              typingIndicator={typing ? <TypingIndicator content="ChatGPT is typing"/> : null }
              scrollBehavior='smooth'
            >
              {messages.map((message, i)=> {
                return <Message key={i} model={message}/>
              })}
            </MessageList>
            <MessageInput placeholder="Type input here" onSend={handleSend}/>
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  )
}

export default App