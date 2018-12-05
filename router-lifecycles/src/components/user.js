import React from 'react'
import userHoc from '../hoc/userHoc';

const User1 = (props) => {
    console.log(props);
    
  return (
    <div>
      USER1
    </div>
  )
}

const User2 = (props) => {
    console.log(props);
    
  return (
    <div>
      USER1
    </div>
  )
}

export default userHoc(User1, User2, 'H1', 'H2');
