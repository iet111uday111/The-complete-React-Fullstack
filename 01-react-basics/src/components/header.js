import React from 'react';

/**
 * @function getYear
 * @description Get the year of current Date
 * @param Nothing
 */
const getYear = () => {
    const newDate = new Date();
    return newDate.getFullYear();
}

/**
 * @constant user Object
 */
const user = {
    name: 'Francis',
    lastName: 'Jones',
    age: 16
};

/**
 * @function Header
 * @description Header component which return the year of current date
 * @param Nothing
 */
const Header = () => {
    // return <div>Date in Millisecond : {
    //     getYear()
    // }</div>

    /**
     * Shows the user Detail
     */
    return(
        <div>
            <div>{user.name}</div>
            <div>{user.lastName}</div>
            <div>{user.age}</div>
        </div>
    )
}

export default Header;