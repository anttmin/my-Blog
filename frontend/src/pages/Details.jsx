import React from "react";
import { useLoaderData } from "react-router-dom";
import PostDetail from "../components/PostDetail";

const Details = () => {
  const posts = useLoaderData();
  // console.log(posts);

  return (
    <>
      <PostDetail posts={posts} key={posts.id} />
    </>
  );
};

export default Details;

export const loader = async ({ request, params }) => {
  const reponse = await fetch(`http://localhost:8080/posts/${params.id}`);
  console.log(reponse);

  if (!reponse.ok) {
    // code
  } else {
    const data = await reponse.json();
    return data.post;
  }
};
