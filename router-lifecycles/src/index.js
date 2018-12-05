import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
// import { HashRouter, Route, Link } from 'react-router-dom';
// import { MemoryRouter, Route, Link } from 'react-router-dom';

/**
 * Importing Components 
 */
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';
import PostItem from './components/post-item';
import Life from './components/lifecycle';
import Conditional from './components/conditional';
import User from './components/user';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <header>
            <NavLink to="/">Home</NavLink><br />
            <NavLink
              to="/posts"
              activeStyle={{ color: 'red' }}
              activeClassName="selected"
            >Posts</NavLink><br />
            <NavLink to={{
              pathname: '/profile',
              // hash: '#fransis',
              // search:'?profile=true'
            }}>Profile</NavLink><br />
            <NavLink to="/life">Life</NavLink><br />
            <NavLink to="/conditional">Conditional</NavLink><br />
            <NavLink to="/user">User</NavLink>
            <hr />
          </header>
          {/* <Route path="/" exact component={Home} />
          <Route path="/posts" exact component={Posts} />
          <Route path="/posts/:id/:username" component={PostItem} />
          <Route path="/profile" component={Profile} /> */}

          <Switch>
            {/* <Redirect from="/profile" to="/" /> */}
            <Route path="/posts/:id/:username" component={PostItem} />
            <Route path="/posts" component={Posts} />
            <Route path="/profile" component={Profile} />
            <Route path="/life" component={Life} />
            <Route path="/conditional" component={Conditional} />
            <Route path="/user" component={User} />            
            <Route path="/" exact component={Home} />
            <Route render={ () => <h3>Oops 404!!!</h3>} />
          </Switch>

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

