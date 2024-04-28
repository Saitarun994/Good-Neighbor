import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { withAuthInfo, useRedirectFunctions, useLogoutFunction } from '@propelauth/react'
import { FileUploader } from "react-drag-drop-files";
import './Post.css'

const fileTypes = ["JPG", "PNG", "GIF"];

const Post = withAuthInfo((props) => {
  const [myFile, setmyFile] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  let sendForm = (e) => {
    e.preventDefault()
    console.log(title)
    /*fetch("localhost:8080/newpost", {
      method: "POST",
      body: {
        title: title,
        description: desc,
        image: myFile
      }
    }) */
  }

  return (
    <div className="my-4 flex flex-col justify-center gap-4 items-center">

      <div className="postBlock">
        <form onSubmit={sendForm}>
          <FileUploader className="fileUpload" handleChange={(e) => setFile(e.name)} name="file" types={fileTypes} />
          <label> Title: </label>
          <input 
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label> Description: </label>
          <textarea
            required
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <button type="submit"> Submit </button>
        </form>
      </div>

    </div>
  )
})

export default Post
