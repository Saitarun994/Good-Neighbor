import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileDropdown from './components/ProfileDropDown'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Post from './pages/Post'
import Profile from './pages/Profile'
import ChatBot from './components/ChatBot'

function App() {

  const [count, setCount] = useState(0)
  const options = ['Profile'];
  let API_KEY = import.meta.env.VITE_API_KEY ;

  return (
    <BrowserRouter>
      {/*Header*/}
      <div className="bg-white p-4 shadow-md flex justify-between items-center">
        <ProfileDropdown options={options} />
        <h1 className="text-black font-extrabold text-3xl ml-2">GOOD NEIGHBOR</h1>
      </div>

      {/*The page router for our webapp*/}
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
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
