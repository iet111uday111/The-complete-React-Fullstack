export default function (state = {}, action) {
    switch (action.type) {
        case 'GET_ARTISTS':
            return { ...state, artistList: action.payload }


        case 'GET_ARTISTS_ALL':
            return { ...state, artistList: action.payload }


        case 'GET_ARTISTS_DETAIL':
            return { ...state, artistList: action.payload }


        case 'CLEAR_ARTIST_DETAIL':
            return { ...state, artistList: action.payload }


        default:
            return state;
    }
}