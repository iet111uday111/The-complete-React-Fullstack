import React from 'react';
/**
 * @function NewsList
 * @param props 
 * @description This is a stateless component. It shows the list of news 
 * props is used to transfering data between the components.
 */
const NewsList = (props) => {
    console.log(props);
    const items = props.news.map((item) => {
        return(
            <div>
                <h3>{item.title}</h3>
                <div>{item.feed}</div>
                <div>{item.feed}</div>
            </div>
        )
    });

    return(
        <div>
            {items}
        </div>
    )
}

export default NewsList;