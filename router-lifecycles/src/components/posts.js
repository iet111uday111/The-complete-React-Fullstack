import React from 'react'
import { Link } from 'react-router-dom';

const Posts = () => {
  // const ids = [
  //   { id: 1 , name: 'Post1'},
  //   { id: 2 , name: 'Post2'},
  //   { id: 3 , name: 'Post3'}
  // ]

  // const list = ids.map(item => {
  //   return (
  //     <span key={item.id}>
  //         <Link to={item.id}>{item.name}</Link><br/>
  //     </span>
  //   )
  // })
  // return (
  //   <div>
  //     <Link to="/posts/1">Post1</Link><br/>
  //     <Link to="/posts/2">Post2</Link><br/>
  //     <Link to="/posts/3">Post3</Link><br/>
      
  //   </div>
  // )

  // return ids.map(item => {
  //   return (
  //     <span key={item.id}>
  //         <Link to={item.id}>{item.name}</Link><br/>
  //     </span>
  //   )
  // })

  return [
    <div key="1">Hello</div>,
    <div key="2">Hell</div>,
    <div key="3">He</div>
  ]
}

export default Posts;
