import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios';

function FilterPost() {
    const [post,setPost]=useState([]);
    const [serachStr,setSerachStr]=useState("");
    const getData = async()=>{
        let posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log(posts.data);
            setPost(posts.data)
    }
    
    const filterProduct = useMemo(()=>{
        if(!serachStr){
            return post;
        }

        console.log(serachStr);
    
         let newPost = post.filter((index)=>{
            return index.title.toLowerCase().includes(serachStr.toLowerCase());
        })
        console.log(newPost);

        return newPost
        
    },[post,serachStr])

    useEffect(()=>{
        getData();
    },[])

    const handleChange=(e)=>{
        setSerachStr(e.target.value)
        console.log(serachStr);
        
    }
  return (
    <div>
        <h2>FilterPost</h2>

        <input type="text" name="" id="" style={{padding:"10px 20px"}} onChange={handleChange}/>
         <ul>
           
            {
            filterProduct.map((index,i)=>(
                <li key={i}>{index.title}</li>
            ))
        }
        </ul>
    </div>
  )
}

export default FilterPost