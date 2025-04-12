import React from 'react'
import { useEffect, useState } from 'react'; 
import { useLoaderData } from 'react-router-dom';

function Github() {
    // const [data, setData] = useState();
        
    // useEffect(() => {
    //         fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then(response => response.json())
    //         .then(data => setData(data))
      
    // }, []);
    
    const data=useLoaderData()

    return (
        <div>
            <h1>GitHub Page</h1>
            <p>Welcome to the GitHub page!</p>
            <p> Your Github Follower : {data ? data.followers : 'Loading...'}</p>
            <div>
                <img src={data ? data.avatar_url : 'Loading...'} alt="GitHub Avatar" width="100" height="100" />   
            </div>
        </div>
    )
}


export default Github; 
export const GithubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/Ankitiwari085')
    return res.json()
}
           


