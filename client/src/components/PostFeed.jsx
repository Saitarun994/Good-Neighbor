import React from 'react'
import './PostFeed.css'

function PostFeed() {
  return (
    <div className=" my-4 flex flex-col justify-center gap-4">
      <div className="postBlock">
        <div className="flex items-center">
          <img src="/pfp.jpeg" className="postImg"/>
          <div className="px-[1vw]"> Harry Potter </div>
        </div>
        <h3 className="postTitle"> I lost my wallet </h3>
        <div className="postContent"> Has anyone seen my wallet? Last seen at the ARC men's bathroom. Thank you! </div>
        <div className="postFound"> Report Found </div>

      </div>

      <div className="postBlock">
        <div className="flex items-center">
          <img src="/pfp.jpeg" className="postImg" />
          <div className="px-[1vw]"> Harry Potter </div>
        </div>
        <h3 className="postTitle"> I lost my wallet </h3>
        <div className="postContent"> Has anyone seen my wallet? Last seen at the ARC men's bathroom. Thank you! </div>
        <div className="postFound"> Report Found </div>
      </div>

      <div className="postBlock">
        <div className="flex items-center">
          <img src="/pfp.jpeg" className="postImg" />
          <div className="px-[1vw]"> Harry Potter </div>
        </div>
        <h3 className="postTitle"> I lost my wallet </h3>
        <div className="postContent"> Has anyone seen my wallet? Last seen at the ARC men's bathroom. Thank you! </div>
        <div className="postFound"> Report Found </div>
      </div>

      
    </div>
  )
}

export default PostFeed
