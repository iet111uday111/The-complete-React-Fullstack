import React, { Component } from 'react';
import '../css/styles.css';

/**
 * @function getYear
 * @description Get the year of current Date
 * @param Nothing
 */
/*const getYear = () => {
    const newDate = new Date();
    return newDate.getFullYear();
}*/

/**
 * @constant user Object
 */
/*const user = {
    name: 'Francis',
    lastName: 'Jones',
    age: 16
};*/

/**
 * @function Header
 * @description function based Header component which return the year of current date
 * @param Nothing
 */


/*const Header = () => {
    // return <div>Date in Millisecond : {
    //     getYear()
    // }</div>

    /**
     * Shows the user Detail
     */
/*return(
    <div>
        <div>{user.name}</div>
        <div>{user.lastName}</div>
        <div>{user.age}</div>
    </div>
)


// return(
//     <div>Header</div>
// )
}
*/


/**
 * @class Header
 * @description Class Based Header component which return a header
 * @param Nothing
 */
class Header extends Component {

    /**
     * State works as an database for react, wheever states change re-render happens(calling render() method)
     */
    // state = {
    //     keyword: 'Hello'
    // }

    /**
     * @description props are things we are getting from extended class.
     */
    constructor(props) {
        super(props);
        this.state = {
            title: 'The keywords are:',
            keyword: ''
        }
    }

    /**
     * @description Normal Event Handling in react
     */
    // inputChangeHandler(event) {
    //     this.setState({
    //         keyword: event.target.value
    //     });
    // }

    /**
     * @description Seting the state
     */
    // handleChange(event) {
    //     this.setState({title: event.target.value})
    // }

    /**
     * @description Event handling using arrow function
     */
    inputChangeHandler = (event) => {
        this.setState({
            keyword: event.target.value
        });
    };

    render() {
        /**
         * @description Inline styles
         */

        /*const styles = {
           header: {
               background: '#03a9f4',

           },
           logo: {
               color: '#fff',
               fontFamily: 'anton',
               textAlign: 'Center'
           }
       }*/

        console.log("render method", this.state.keyword);

        return (
            /**
             * @description Event Handling Method 1
             * it pass bind(this) to tell function to use "this" of class level not method level
             * 
             */
            // <header>
            //     <div className="logo" onClick={
            //         () => console.log('Click Event Called')}
            //     >Logo</div>
            //     <input type="text" onChange={this.inputChangeHandler.bind(this)} />
            // </header>

            /**
             * @description Event Handling Method 1
             * In this we call method in normal way but in the method we use arrow because it doesn't
             * have it's own "this"
             */
            <header>
                <div className="logo" onClick={
                    () => console.log('Click Event Called')}
                >Logo</div>
                <input type="text" onChange={this.inputChangeHandler} />
                <div>{this.state.title}</div>
                <div>{this.state.keyword}</div>
            </header>


        )
    }
}
export default Header;