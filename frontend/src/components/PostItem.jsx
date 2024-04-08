import React from "react";
import { Link } from "react-router-dom";
// import { BeakerIcon } from '@heroicons/react/24/solid'

const Postitem = ({ post }) => {
  const { id, title, date, image } = post;
  // console.log(post);
  return (
    <>
      <div className="BlogPost">
        <Link to={`/create-detail/${id}`}><img src={image} alt="img" className="img" /></Link>
      </div>
      <div className="data">
        <Link to={`/create-detail/${id}`}><p>{title}</p></Link>
        <Link to={`/create-detail/${id}`}><span>{date}</span></Link>
        <hr />
      </div>
    </>
  );
};

export default Postitem;





// 30: 


