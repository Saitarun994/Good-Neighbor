import React from 'react'
import Map from '../components/Map'
import PostFeed from '../components/PostFeed'

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      Home Page
      <Map/>
      <PostFeed/>
    </div>
  )
}

export default Home
