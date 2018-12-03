import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Components
 */

 import Header from './components/header';

/**
 * @function App
 * @description React App stating Point 
 * @param Nothing
 */
const App = () => {
    /**
     * Creating element inside the root element
     */

    // return React.createElement('h1',{className: 'title'}, React.createElement('div'));

    /**
     * Multiple thing to return 
     */

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
             <Header/>
         </div>
    )

    /**
     * For return singal arguments
     */

    //   return <h1>Hello World !!!!!</h1>
}

ReactDOM.render(<App />, document.querySelector('#root'));