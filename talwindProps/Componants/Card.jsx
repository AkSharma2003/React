import React from 'react'

function Card(props) {
    console.log(props.name);
  return (
    <>
        <div className="flex flex-col items-center p-7 rounded-2xl">
        <div>
          <img
            className="size-48 shadow-xl rounded-md"
            alt=""
            src="https://images.pexels.com/photos/26886130/pexels-photo-26886130.jpeg"
          />
        </div>
        <div className="flex">
          <span className="text-2xl font-medium">{props.name}</span>
          <span className="font-medium text-sky-500">The Anti-Patterns</span>
          <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>{props.btntext}</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>
      </div> 
    </>
  )
}

export default Card
