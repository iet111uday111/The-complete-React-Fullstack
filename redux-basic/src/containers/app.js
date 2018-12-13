import React, { Component } from 'react'
import { connect } from 'react-redux';
import { moviesList, directorsList } from '../actions';
import { bindActionCreators } from 'redux';
import MoviesList from '../components/moviesList';

class App extends Component {

    componentWillMount() {
        this.props.moviesList();
        this.props.directorsList();
    }

    

    render() {
        return (
            <div>
                    <MoviesList {...this.props}/>
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


