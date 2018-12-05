import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
// import { HashRouter, Route, Link } from 'react-router-dom';
// import { MemoryRouter, Route, Link } from 'react-router-dom';

/**
 * Importing Components 
 */
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';
import PostItem from './components/post-item';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <header>
            <NavLink to="/">Home</NavLink><br/>
            <NavLink 
                to="/posts"
                activeStyle={{color: 'red'}}
                activeClassName="selected"
            >Posts</NavLink><br/>
            <NavLink to={{
              pathname:'/profile',
              // hash: '#fransis',
              // search:'?profile=true'
            }}>Profile</NavLink><br/>
            <hr/>
          </header> 
          <Route path="/" exact component={Home} />
          <Route path="/posts" exact component={Posts} />
          <Route path="/posts/:id/:username" component={PostItem} />
          <Route path="/profile" component={Profile} />
          
        </div>
      </BrowserRouter>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

export default App;

