
import React, { useEffect, useState } from 'react'
import PostContext from './PostContext';

export default function PostProvider() {
    const [posts,setPosts]=useState([]);
    const getPost = async()=>{
        try {
              let posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log(posts.data);
            return posts.data;
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(()=>{
        getPost();
    })
  return (
    <PostContext.Provider value={{posts}}></PostContext.Provider>
  )
}
