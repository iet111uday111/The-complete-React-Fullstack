import React from 'react'
// import { BrowserRouter, Route, Link } from 'react-router-dom';

const PostItem = (props) => {
  console.log(props);
  
  return (
    <div>
        Id : {props.match.params.id}
        username: {props.match.params.username}

    </div>
  )
}

export default PostItem;
