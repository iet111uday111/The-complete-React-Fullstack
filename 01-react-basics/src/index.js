import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/**
 * Importing JSON File
 */
import JSON from './db.json';

/**
 * Components
 */

import Header from './components/header';
import NewsList from './components/news-list';

/**
 * @function App
 * @description React App stating Point 
 * @param Nothing
 */
// const App = () => {

/**
 * Converting into class based component
 * 
 */
class App extends Component {

    state = {
        news: JSON
    }

    /**
     * Creating element inside the root element
     */

    // return React.createElement('h1',{className: 'title'}, React.createElement('div'));

    /**
     * @description Checking the JSON Data
     */
    // console.log(JSON);

    /**
     * Multiple thing to return 
     */

    /**
     * @description Whenever we use class based component we just cannot return anything
     * we need use render() mehod and then return
     */
    render() {
        return (
            /**
             * We can return only thing. So we nned warp all return into single element
             */
            // <div className="test">
            //     <h1>Hello World</h1>
            //     <div>Hey!!!!</div>
            // </div>


            /**
             * News App
             */

            <div>
                <Header />
                <NewsList news={this.state.news}>
                    <h2>The News are : </h2>
                </NewsList>
            </div>
        )

        /**
         * For return singal arguments
         */

        //   return <h1>Hello World !!!!!</h1>
    }

}

ReactDOM.render(<App />, document.querySelector('#root'));