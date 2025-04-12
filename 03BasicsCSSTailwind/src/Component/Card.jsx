import React from  'react'

function Card({title="Software Engineer",username}){   // props or we can write under it{ direct value which are passing from the app.jsx}
    return(

        <div className="max-w-xs p-6 rounded-md shadow-md bg-black mb-4">
        <img
          src="https://media.gettyimages.com/id/1395128746/photo/portrait-of-confident-young-businesswomen-standing-in-a-convention-center-during-product-and.jpg?s=612x612&w=gi&k=20&c=b5YU_WVagGUrh6s7hiC3JJOTaofLduPHiowOsXq6ETQ="    
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
          {title}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{username}</h2>
        </div>
        <p className="text-gray-300">
        Proficient in Java, Spring Boot, REST APIs, and database management with a strong grasp of data structures and algorithms.
        </p>
      </div>

    )
}

export default Card