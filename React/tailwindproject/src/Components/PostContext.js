import React, { createContext } from 'react'

const  getPost=async()=>{
         let posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log(posts.data);
            return posts.data;
    }
const PostContext = createContext({})


export default PostContext