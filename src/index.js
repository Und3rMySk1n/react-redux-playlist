import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

function getPlaylist(state = [], action) {
    if (action.type === 'ADD_TRACK') {
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}

const store = createStore(getPlaylist);
store.dispatch({
    type: 'ADD_TRACK',
    payload: 'Freak on a leash'
});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
