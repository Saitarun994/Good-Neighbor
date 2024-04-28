import React from 'react'
import './PostFeed.css'

function PostFeed() {
  return (
    <div className=" my-4 flex flex-col justify-center gap-4">

      <div className="postBlock">
        <img src="arduino-found.webp" className="postImg" />
        <div>
          <div className="flex items-center">
            <img src="/pfp.jpeg" className="postPFP"/>
            <div className="postUser"> Kina Lee </div>
            <div className="postTag" style={{backgroundColor: "rgb(0, 153, 76, 0.6)"}}> Found </div>
          </div>
          <h3 className="postTitle"> Found this Arduino Uno </h3>
          <div className="postContent"> Contact me, I used it for Hackdavis'24, I'll promise to give it back lols </div>
          <div className="flex">
          </div>
        </div>
      </div>


      <div className="postBlock">
        <img src="arduino.jpg" className="postImg" />
        <div>
          <div className="flex items-center">
            <img src="/pfp.jpeg" className="postPFP"/>
            <div className="postUser"> Gregory Paul </div>
            <div className="postTag"> Lost </div>
          </div>
          <h3 className="postTitle">I lost my Arduino Uno</h3>
          <div className="postContent"> I'm the only one with an Uno at Hackdavis'24, someone help me find it please? </div>
          <div className="flex">
          <div className="postFound"> Report Sighting </div>
          </div>
        </div>
      </div>

      <div className="postBlock">
        <img src="wallet.jpeg" className="postImg" />
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
        <img src="/cellphone.jpg" className="postImg"/>
        <div>
          <div className="flex items-center">
            <img src="/pfp.jpeg" className="postPFP" />
            <div className="postUser"> Steve Jobs </div>
            <div className="postTag" style={{backgroundColor: "rgb(0, 153, 76, 0.6)"}}> Found </div>
          </div>
          <h3 className="postTitle"> Found an iPhone </h3>
          <div className="postContent"> I found an iPhone laying in Arroyo Field. Hope the owner sees this! </div>
        </div>
      </div>

      <div className="postBlock">
        <img src="/cellphone_found.jpg" className="postImg"/>
        <div>
          <div className="flex items-center">
            <img src="/pfp.jpeg" className="postPFP" />
            <div className="postUser"> Sai Tarun </div>
            <div className="postTag"> Lost </div>
          </div>
          <h3 className="postTitle"> Have anyone seen an iPhone around Arroyo Field? </h3>
          <div className="postContent"> I was doing my daily runs and the phone fell out of my pocket out of nowhere... </div>
        </div>
        <div className="postFound"> Report Sighting </div>
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

      <div className="postBlock">
        <img src="/poodle.jpg" className="postImg" />
        <div>
          <div className="flex items-center">
            <img src="/pfp.jpeg" className="postPFP" />
            <div className="postUser"> Jacob Johns </div>
            <div className="postTag"> Lost </div>
          </div>
          <h3 className="postTitle"> Lost Dog </h3>
          <div className="postContent"> I left the backdoor open last night by accident, now Mr.Bubbles is gone! Good Neighbor do your magic! </div>
          <div className="flex">
            <div className="postFound"> Report Sighting </div>
          </div>
        </div>
      </div>

      <div className="postBlock">
        <img src="/poodle-found.jpg" className="postImg" />
        <div>
          <div className="flex items-center">
            <img src="/pfp.jpeg" className="postPFP" />
            <div className="postUser"> Jason Tatum </div>
            <div className="postTag" style={{backgroundColor: "rgb(0, 153, 76, 0.6)"}}> Found </div>
          </div>
          <h3 className="postTitle"> Poodle wandering around UC Davis </h3>
          <div className="postContent"> Saw this big boy while biking around campus, Mr. Bubbles is his name, contact me 916-776-7788 </div>
          <div className="flex">
          </div>
        </div>
      </div>

      <div className="postBlock">
        <img src="/football.jpg" className="postImg" />
        <div>
          <div className="flex items-center">
            <img src="/pfp.jpeg" className="postPFP" />
            <div className="postUser"> Angelina Swanson </div>
            <div className="postTag"> Lost </div>
          </div>
          <h3 className="postTitle"> My son lost his favorite soccer ball </h3>
          <div className="postContent"> My two kids were playing soccer and one kicked it way too far, it was by the Union Center at Davis, please help find my son's ball back. </div>
          <div className="flex">
            <div className="postFound"> Report Sighting </div>
          </div>
        </div>
      </div>

      <div className="postBlock">
        <img src="/football-found.jpg" className="postImg" />
        <div>
          <div className="flex items-center">
            <img src="/pfp.jpeg" className="postPFP" />
            <div className="postUser"> Joe Jenkins </div>
            <div className="postTag" style={{backgroundColor: "rgb(0, 153, 76, 0.6)"}}> Found </div>
          </div>
          <h3 className="postTitle"> Jabulani Soccer Ball Found! </h3>
          <div className="postContent"> Saw the cows were kicking this one, someone come pick it back up! </div>
          <div className="flex">
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default PostFeed
