import React from 'react'

const PostDetails = ({posts}) => {
    const {description,image,title,date} = posts
    // console.log(post);
  return (
    <div className='details'>

        <p className='title'>{title}</p>
        <p className='date'>{date}</p>
        <img className='image' src={image} alt={title}/>
        <p className='description'>{description}</p>
    </div>
  )
}

export default PostDetails