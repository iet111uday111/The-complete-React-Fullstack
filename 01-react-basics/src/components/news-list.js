import React from 'react';
/**
 * @function NewsList
 * @param props 
 * @description This is a stateless component. It shows the list of news 
 * props is used to transfering data between the components.
 */
const NewsList = (props) => {
    console.log(props);
    
    return(
        <div>{props.name}</div>
    )
}

export default NewsList;