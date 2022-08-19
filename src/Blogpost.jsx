import React from 'react';
import './css/blogpost.css'

export const Blogpost = ({title, text, pictureUrl = null}) => {
  return (
    <div id='blogpost'>
      <h2>{title}</h2>
      <p>
        {GetImage(pictureUrl)}
        {text}
      </p>
      <br/>
    </div>
  )
}

const GetImage = (url) => {
  if (url?.length > 0) {
    return <img src={url}/>
  }
}