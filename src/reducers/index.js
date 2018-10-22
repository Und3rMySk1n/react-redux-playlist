import { combineReducers } from 'redux';
import tracks from './tracks';
import genres from './genres';

export default combineReducers({
    tracks,
    genres
});