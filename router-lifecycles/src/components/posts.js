import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Posts = () => {
  return (
    <div>
      <Link to="/posts/1">Post1</Link><br/>
      <Link to="/posts/2">Post2</Link><br/>
      <Link to="/posts/3">Post3</Link><br/>

    </div>
  )
}

export default Posts;
