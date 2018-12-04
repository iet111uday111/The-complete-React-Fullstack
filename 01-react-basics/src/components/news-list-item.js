import React from 'react'

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
 * @param  props 
 */
const NewsItem = ({item}) => {
    return (
        <div>
            <h3>{item.title}</h3>
            <div>{item.feed}</div>
        </div>
    )
}

export default NewsItem;
