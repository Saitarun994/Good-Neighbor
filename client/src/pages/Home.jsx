import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card';


function Home() {

    const [posts, setPosts] = useState([])

    // Fetching data from mongo and storing in posts variable
    useEffect(()=>{
        axios.get("http://localhost:8080/")
        .then(result=> setPosts(result.data))
        .catch(err=> console.log(err))
    },[])

    return (
    <div className='max-w-8xl mx-auto'>
        <div className="flex flex-col items-center justify-center">
            <h1 className='font-extrabold text-[#222328] text-[32px]'>
                Neighborhood Report
            </h1>
        </div>
            <div className='w-full flex flex-col items-center justify-center'>
                {/*cards in here*/}
                {
                  posts.map((post) => {
                    return (
                        <Card
                        title = {post.title}
                        desc=  {post.desc}
                        img= {post.img}
                        name= {post.name}
                        dp={post.dp}
                        />
                    )
                  })
                }
                <Card
                    title = {"Someone stole my purse here"}
                    desc=  {"Ate a meal at McDonals and was walking out while suddenly a random guy stole my purse and ran away"}
                    img= {"https://www.gspretail.com/newsletter/images/nl11_McDonalds-1a.jpg"}
                    name= {"Maria vasquez"}
                    dp={"https://i.pinimg.com/736x/89/a1/b1/89a1b113fdd60f3f92c10a4dab99757c.jpg"}
                    />
                <Card
                    title = {"Stray dogs need shelter or home"}
                    desc=  {"I keep seeing these stray dogs on my jog across the cobblestone bridge in davis could anyone adopt them or call the shelter"}
                    img= {"https://media.4-paws.org/6/f/f/7/6ff73b4dc83b6b16362fa13d42f7d74ac7b13285/VIER_PFOTEN_2023-02-15_00009-2895x2004.jpg"}
                    name= {"Joseph"}
                    dp={"https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/743/cached.offlinehbpl.hbpl.co.uk/news/OMC/mattdyke_AF_1280-20180328113114139.jpg"}
                    />
                <Card
                    title = {"Need volunteers to clean hiking trail"}
                    desc=  {"This hiking trail near Walnut park davis has unfortunately been littered quite a bit lately, and it's really taking away from the beauty of our natural surroundings. I'm reaching out to see if any of you amazing folks would be willing to volunteer some time to help clean it up"}
                    img= {"https://cleanwater.org/sites/default/files/images/campaigns/Waste_Plastic_Bags_National_Plastic_Bags_Littering_forest_800x532.jpg"}
                    name= {"William Shockingson"}
                    dp={"https://i.kym-cdn.com/photos/images/original/002/511/145/4ea.jpg"}
                    />
                
            </div>
    </div>)
}

export default Home
