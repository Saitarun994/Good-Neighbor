import React from 'react'

const Card = ({ title, desc, img , name, dp}) => {
    //console.log(img);
    
  return (
    <div className="relative max-w-md m-8 shadow-xl">
    <div className="relative aspect-w-1 aspect-h-1">
        
        <img
            src={img}
            alt="img loading"
            className="w-full h-full rounded-lg"
            onError={(e) => {
                e.target.src = "https://user-images.githubusercontent.com/582516/98960633-6c6a1600-24e3-11eb-89f1-045f55a1e494.png";
            }}
        />
        <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 p-2 flex flex-col w-full items-start space-y-1">
            <div className="flex items-center space-x-2">
                <img src={dp} alt="Display Picture" className="w-8 h-8 rounded-full" />
                <div className='p-x-5'>
                    <p className="text-white mr-1">{name}</p>
                    <p className="text-white text-sm mr-1">{title}</p>
                    <p className="text-gray-300 text-xs mr-3">{desc}</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Card
