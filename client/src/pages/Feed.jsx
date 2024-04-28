import React from 'react'
import Map from '../components/Map'
import PostFeed from '../components/PostFeed'

function Feed() {
  return (
    <div className="text-left">
      <div className="flex flex-col items-center justify-center text-left">
        <div className="pTitle">
          My Feed
        </div>
        <PostFeed/>
      </div>
    </div>
  )
}

export default Feed
