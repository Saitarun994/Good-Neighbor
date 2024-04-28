import React from 'react'
import './PostFeed.css'

function PostFeed() {
  return (
    <div className=" my-4 flex flex-col justify-center gap-4">

      <div className="postBlock">
        <img src="/wallet.jpeg" className="postImg" />
        <div>
          <div className="flex items-center">
            <img src="/pfp.jpeg" className="postPFP"/>
            <div className="postUser"> Harry Potter </div>
            <div className="postTag"> Lost </div>
          </div>
          <h3 className="postTitle"> I lost my wallet </h3>
          <div className="postContent"> Has anyone seen my wallet? Last seen at the ARC men's bathroom. Thank you! </div>
          <div className="flex">
            <div className="postFound"> Report Sighting </div>
          </div>
        </div>
      </div>

      <div className="postBlock">
        <img src="/phone.webp" className="postImg"/>
        <div>
          <div className="flex items-center">
            <img src="/pfp.jpeg" className="postPFP" />
            <div className="postUser"> Steve Jobs </div>
            <div className="postTag" style={{backgroundColor: "rgb(0, 153, 76, 0.6)"}}> Found </div>
          </div>
          <h3 className="postTitle"> Found an iPhone </h3>
          <div className="postContent"> I found an iPhone laying in arroyo field. Hope the owner sees this! </div>
        </div>
      </div>

      <div className="postBlock">
        <img src="/dog.jpg" className="postImg" />
        <div>
          <div className="flex items-center">
            <img src="/pfp.jpeg" className="postPFP" />
            <div className="postUser"> Beth Harmon </div>
            <div className="postTag"> Lost </div>
          </div>
          <h3 className="postTitle"> Lost Dog </h3>
          <div className="postContent"> My dog ran out of the house and got lost. Please report sighting if you see him. Thank you Good Neighbor! </div>
          <div className="flex">
            <div className="postFound"> Report Sighting </div>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default PostFeed
