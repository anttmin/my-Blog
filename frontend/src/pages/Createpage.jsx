import React from "react";
import CreateFile from "./CreateFile";
import uuid from 'react-uuid';

import { redirect } from "react-router-dom";

const Createpage = () => {
  return (
    <div>
      <div className="CreatePage">
        <CreateFile />
      </div>
    </div>
  );
};

export default Createpage;

export const action = async ({request,params}) => {
  const data =await request.formData();

  const postData = {
    id : uuid(),
    title : data.get("title"),
    description : data.get("description"),
    image : data.get("image"),
    date : data.get("date"),

  }

  console.log(postData);



  const reponse =await fetch("http://localhost:8080/posts",{
    method : "POST",
    headers : {
      "Content-Type":"application/json"
    },
    body : JSON.stringify(postData)
  })
  // console.log(reponse);
  if(!reponse.ok){
     // code
  }else{
     return redirect("/")
  }
}
