import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
    const getPost= async()=>{
        
            let posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log(posts.data);
            return posts.data;
       
    }

function Tespost() {


    const {data,isLoading,error}= useQuery({
        queryKey:['postArray'],
        queryFn:getPost
    })
      if (isLoading) return <h1>Loading.....</h1>;

  if (error) return <p>Error: {error.message}</p>;
     
  return (
    <div style={{padding:"100px"}}>TesTpost
        <input type="text" name="" id="" style={{padding:"10px 20px"}} onChange={handleChange}/>
         <ul>
           
            {
            data.map((index,i)=>(
                <li key={i}>{index.title}</li>
            ))
        }
        </ul>
    </div>
  )
}

export default Tespost