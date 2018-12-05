import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

/**
 * Importing Components 
 */
import Home from './components/home';
import Post from './components/post';
import Profile from './components/profile';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <header>Header</header>
          <Route path="/" exact component={Home} />
          <Route path="/posts" component={Post} />
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

