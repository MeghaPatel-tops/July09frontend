import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Post() {
    const [postArray,setPostArray]=useState([]);
    const getPost= async()=>{
        try {
            let posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log(posts.data);
            setPostArray(posts.data)
            
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        getPost();
    },[])
  return (
    <div>Post
        <ul>
            {
            postArray.map((index,i)=>(
                <li key={i}>{index.title}</li>
            ))
        }
        </ul>
    </div>
  )
}

export default Post