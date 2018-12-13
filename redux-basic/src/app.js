import React, { Component } from 'react'
import { connect } from 'react-redux';
import { moviesList, directorsList } from './actions';
import { bindActionCreators } from 'redux';

class App extends Component {

    componentWillMount() {
        console.log(this.props.moviesList());
        console.log(this.props.directorsList());
    }

    renderMovies = (movies) =>(
        movies ? 
        movies.map((item) => (
            <div>
                    {item.name}
            </div>
        ))
        : null
    )

    render() {
        console.log(this.props);

        return (
            <div>
                {this.renderMovies(this.props.data.movies)}
      </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.movies
    }
}

/**
 * Dispatching an action using bindActionCreators
 * @param  dispatch 
 */
const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({
    moviesList,
    directorsList
   },dispatch)
}



/**
 * Dispatching an action
 * @param  dispatch 
 */
// const mapDispatchToProps = (dispatch) => {
//     return{
//         getMovies: () =>{
//             dispatch(moviesList())
//         },
//         getDirectors: () =>{
//             dispatch(directorsList())
//         } 
//     }
// }

export default connect(mapStateToProps, mapDispatchToProps)(App);


