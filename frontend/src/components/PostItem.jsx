import React from 'react'
import { Link } from 'react-router-dom'

const PostItem = ({post}) => {
  const {title,id,date,image} = post
  return (
     <div className='section2'>
        <Link to={`/post-details/${id}`}>
        <img className='image' src={image} alt={title}/>
        </Link>

        <Link to={`/post-details/${id}`}>
        <p className='title'>{title}</p>
        </Link>
        
        <p className='date'>Post at - {date}</p>
        <hr />
     </div>
  )
}

export default PostItem