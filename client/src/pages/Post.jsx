import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { withAuthInfo, useRedirectFunctions, useLogoutFunction } from '@propelauth/react'
import { FileUploader} from "react-drag-drop-files";
import './Post.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const fileTypes = ["JPG", "PNG", "GIF"];
import Dropzone from "react-dropzone";


const Post = withAuthInfo((props) => {
  const navigate = useNavigate()
  const [file, setFile] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleUpload = (acceptedFiles) => {
    setFile(acceptedFiles[0]);  
  };

  const sendForm = (e) => {
    e.preventDefault()
    console.log(title)
    console.log(desc)
    let img = file.path;
    let name = props.user && props.user.firstName;
    let dp = props.user && props.user.pictureUrl;
    console.log(img);
    console.log(name);
    console.log(dp);
    axios.post("http://localhost:8080/createPost", {title,desc,img,name,dp})
    .then(result => {
      console.log(result)
      navigate('/')
    })
    .catch(err => console.log(err))
  }

  if (props.isLoggedIn){
    return(
      <div className="flex flex-col justify-center gap-4 items-center postPage">
        <div className="bg-blue-100 p-5 rounded-lg">
          <form onSubmit={sendForm}>
            <br/>
            <label> Title: </label>
            <input 
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <br/>
            <label> Description: </label>
            <br/>
            <textarea


              required
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>

            <br/>
            <div className="w-full h-full flex justify-center items-center border-2 border-dashed border-gray-400 rounded-lg px-4 my-2 min-w-56 min-h-48">
              <Dropzone onDrop={handleUpload} minSize={1024} maxSize={3072000}>
                    {({ getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject }) => {
                      const additionalClass = isDragAccept ? "accept" : isDragReject ? "reject" : "";
                      return (
                        <div
                          {...getRootProps({
                            className: `dropzone ${additionalClass}`,
                          })}
                        >
                      <input {...getInputProps()} />
                      <p>Drag'n'drop images</p>
                    </div>
                  );
                }}
              </Dropzone>
            </div>
            {file && (
              <div className="flex flex-col justify-center items-center">
                <h4>File Uploaded Successfully !!</h4>
                <div className="w-36 h-36 bg-gray-200 flex justify-center items-center mt-1">
                  <img src={URL.createObjectURL(file)} className="h-full object-cover " alt="file not found" />
                </div>
              </div>
            )}
            <br/>
            <button type="submit" className=" mx-2 bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Submit
            </button>
          </form>
        </div>

      </div>
      );

  }
  else
  {
    return (
      <div className="flex justify-center items-center h-56 postPage">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <p className="text-center font-bold">PLEASE LOGIN TO POST</p>
      </div>
    </div>
    );
  }
})

export default Post
