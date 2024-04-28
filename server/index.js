import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import PostSchema from "./mongodb/models/post.js";
import UploadSchema from "./mongodb/models/upload.js";

dotenv.config(); 

const app = express();
app.use(cors(
    {
        origin: [
            'http://localhost:5175',
        ],
        methods: ['GET', 'POST','PUT','DELETE'],
        credentials: true
    }
));
app.use(express.json());
//const port = process.env.PORT || 8080;
const port = 8080;

const startServer = async () => {
    try {
      connectDB(process.env.MONGODB_URL);
    } catch (error) {
      console.log(error);
    }
  };

//api route to get all posts from mongo and send to frontend
app.get("/", (req,res)=>{
    UploadSchema.find({}) //mongodb cmd
    .then(posts=> res.json(posts))
    .catch(err=> res.json(err))
})


//api route to get specific user from mongodb
app.get("/getUser/:id",(req,res)=>{
    const id = req.params.id;
    PostSchema.findById({_id:id}) //mongodb cmd
    .then(users=> res.json(users))
    .catch(err=> res.json(err))
})


// api route to update specific user from mongodb
app.put("/updateUser/:id",(req,res)=>{
    const id = req.params.id;
    PostSchema.findByIdAndUpdate({_id:id},{
        name:req.body.name, 
        email:req.body.email,
        age:req.body.age
    }) //mongodb cmd
    .then(users=> res.json(users))
    .catch(err=> res.json(err))
})

// api route to delete specific user from mongodb
app.delete("/deleteUser/:id",(req,res)=>{
    const id = req.params.id;
    PostSchema.findByIdAndDelete({_id:id})//mongodb cmd
    .then(users=> res.json(users))
    .catch(err=> res.json(err))
})


//backend post route to get data from front end
app.post("/createUser",(req,res)=>{
    PostSchema.create(req.body) //mongodb cmd
    .then(users=> res.json(users))
    .catch(err => res.json(err))

    console.log("created new user:",req.body)
})

//backend post route to get new post from front end
app.post("/createPost",(req,res)=>{
    UploadSchema.create(req.body) //mongodb cmd
    .then(users=> res.json(users))
    .catch(err => res.json(err))
    console.log("created new post:",req.body)
})

app.listen(port, () => {
    console.log("Server Started, Listening on Port: " + port)
});


startServer();


