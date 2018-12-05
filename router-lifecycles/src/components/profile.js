import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Profile = (props) => {
  console.log(props);

  const redir = () => {
   /**
    * Method 1
    */
    // return (
    //   <Redirect to="/" /> 
    // )

    /**
     * Method 2
     */

      props.history.push('/');
  }

  return (
    <div>
      <Link to={{
          pathname:`${props.match.url}/posts`
      }}>Take me to /profile/posts
      </Link>
      {/* <Redirect to="/" /> */}
      {redir()}
    </div>
  )
}

export default Profile;
