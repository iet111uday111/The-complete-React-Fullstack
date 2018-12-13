export default function(state={}, action){
    switch(action.type){
        case 'MOVIES_LIST': 
            return {...state, movies: action.payload}
        
        case 'DIRECTORS_LIST':
            return {...state, directors: action.payload}
        
        default:
            return state;
    }
}