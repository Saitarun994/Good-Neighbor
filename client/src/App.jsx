import { useState } from 'react'
import { Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileDropdown from './components/ProfileDropDown'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Feed from './pages/Feed'
import Map from './components/Map.jsx'
import Post from './pages/Post'
import Profile from './pages/Profile'
import ChatBot from './components/ChatBot'
import Chat from './pages/Chat.jsx'

function App() {

  const [count, setCount] = useState(0)
  const options = ['Profile'];
  let API_KEY = import.meta.env.VITE_API_KEY ;

  return (
    <BrowserRouter>
      {/*Header*/}
      <div className="z-50 bg-white p-4 shadow-md flex justify-center items-center fixed w-full">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center">
            <h1 className="text-black font-black text-4xl ml-2 title">
              <Link to="/">
                GOOD NEIGHBOR
              </Link>
            </h1>
          </div>
          <div className="flex items-center"> 
            <ProfileDropdown/>
            <Link to="/post" className="hotButton">
              Post
            </Link>
            <Link to="/feed" className="hotButton">
              Lost & Found 
            </Link>
            <Link to="/map" className="hotButton">
              Map
            </Link>
          </div>
        </div>
      </div>

      {/*The page router for our webapp*/}
      <main class="main">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/feed" element={<Feed/>}/>
          <Route path="/post" element={<Post />} />
          <Route path="/map" element={<Map />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile/:id" element={<Profile/>}/>
          <Route path="/post/:id" element={<Post/>}/>

        </Routes>
      </main>

    <div className="chatbotCont">
        <ChatBot />
    </div>

    </BrowserRouter>
  )
}

export default App
