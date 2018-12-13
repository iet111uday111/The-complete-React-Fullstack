import { combineReducers } from 'redux';
import artists from './artist-reducers';

const rootReducer = combineReducers({
    artists
});

export default rootReducer;