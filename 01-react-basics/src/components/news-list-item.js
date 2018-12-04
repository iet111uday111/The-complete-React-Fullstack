import React from 'react';
import { css } from 'glamor';

/**
 * @description Showing each news as per loop gives us data
 * @param  props
 */
// const NewsItem = (props) => {
//     console.log(props);

//     return (
//         <div>
//             <h3>{props.item.title}</h3>
//             <div>{props.item.feed}</div>
//         </div>
//     )
// }

/**
 * Method 2 : Optimized way
 * @description optimized with the help of destructing of object
 * @param  props \
 *  Adding Styling packages for css and styling - react glamour
 */
const NewsItem = ({item}) => {
    
    let newsItem = css({
        padding:'20px',
        boxSizzing: 'border-box',
        borderBottom: '1px solid grey',
        ':hover': {
            color: 'red'
        },
        cursor: 'pointer',
        '@media(max-width: 500px)': {
            background: 'blue'
        }
    });

    let newsgrey = css({
        Background: 'lightgrey'
    });

    return (
        /**
         * Method 1 inline css 
         */
        // <div {...newsItem} {...newsgrey}>
        //     <h3>{item.title}</h3>
        //     <div>{item.feed}</div>
        // </div>

        /**
         * Method 2 Adding Classes of glamour
         */
        <div className={`${newsItem} ${newsgrey}`}>
            <h3>{item.title}</h3>
            <div>{item.feed}</div>
        </div>

    )
}

export default NewsItem;
