import { combineReducers } from 'redux';
import tracks from './tracks';
import genres from './genres';
import filter from './filter';

export default combineReducers({
    tracks,
    genres,
    filter
});