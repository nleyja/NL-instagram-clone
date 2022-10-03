import React from "react";
import "./PostedImages.scss;"

const PostedImages = (props) => {
  const { postNames } = props;

  const postElements = postNames.map((postName, index) => {
    const postRoute = `/images/${postName}`

    return(
      <div className='img-div' style={{ backgroundImage: `url(${postRoute})`}} key={index}></div>
    )
  })

  return (
    <div className="post-gallery"> {postElements}</div>
  )
}

export default PostedImages;