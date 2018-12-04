import React from 'react';
import NewsItem from './news-list-item';

/**
 * @function NewsList
 * @param props 
 * @description This is a stateless component. It shows the list of news 
 * props is used to transfering data between the components.
 * In React Js whenever we are using any loop or iterator we need to pass unique key
 * for each iteration to avoid warning from React.
 * Warning: "Each child in an array or iterator should have a unique "key" prop."
 */
const NewsList = (props) => {
    console.log(props);
    const items = props.news.map((item) => {
        return (
            <NewsItem key={item.id} item={item} />
        )
    });

    return (
        <div>
            {props.children}
            {items}
        </div>
    )
}

export default NewsList;



