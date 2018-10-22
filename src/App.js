import React, { Component } from 'react';
import Topmenu from './Topmenu/';
import Dropdown from './Dropdown/';
import AddTrackForm from './AddTrackForm/';
import List from './List/';
import { connect } from 'react-redux';

const topMenuItems = [
    {
        link: '/',
        title: 'Home'
    },
    {
        link: '/about',
        title: 'About'
    },
    {
        link: '/contacts',
        title: 'Contacts'
    }
];

class App extends Component {

    _onFormSubmit(value) {
        this.props.addTrack(value);
    }

    render() {
        return (
            <div>
                <Topmenu items={topMenuItems} />
                <div className={'container'}>
                    <Dropdown />
                    <AddTrackForm onSubmit={(value) => {this._onFormSubmit(value)}} />
                </div>
                <List items={this.props.tracks} />
            </div>
        );
    }
}

export default connect(
    state => ({
        tracks: state.tracks
    }),
    dispatch => ({
        addTrack: (trackName) => {
            dispatch({
                type: 'ADD_TRACK',
                payload: trackName
            })
        }
    })
)(App);