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

        return (
            <header>
                <div className="logo">Logo</div>
                <input type="text" />
            </header>
        )
    }
}
export default Header;