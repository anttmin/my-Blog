import React from 'react'
import { useLoaderData } from 'react-router-dom'
import PostItem from '../components/PostItem';

const Posts = () => {
  const posts = useLoaderData();

  console.log(posts);

  return (
    <div>
     {
      posts.length > 0 && posts.map((post) => <PostItem post={post}  key={post.id}/>)
     }
    </div>
  )
}

export default Posts

export const loader = async () => {
  const reponse = await fetch("http://localhost:8080/posts");
  console.log(reponse);

  if(!reponse.ok){
    // code 
  }else{
    const data = await reponse.json();
    console.log(data);
    return data.posts;
  }
}