import React from "react";
import { useLoaderData } from "react-router-dom";
import Postitem from "../components/Postitem";

export const Post = () => {
  const  posts = useLoaderData();
  // console.log(posts)
  return (
    <>

         {
            posts.map((post)=>(

              <Postitem post={post} key={post.id}/>
            
          ))
         }

    </>
  );
};


export const loader = async ()=>{
  const reponse = await fetch("http://localhost:8080/posts/")

  if(!reponse.ok){
    //code
  }else{
     const data =await reponse.json();
     return data.posts;
  }
  
}