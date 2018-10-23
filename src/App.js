import React, { Component } from 'react';
import Topmenu from './Topmenu/';
import Dropdown from './Dropdown/';
import Form from './Form/';
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

    render() {
        return (
            <div>
                <Topmenu items={topMenuItems} />
                <div className={'container'}>
                    <Dropdown />
                    <h2>Tracks management:</h2>
                    <Form
                        placeholder={'Enter track name'}
                        buttonText={'Add track'}
                        onSubmit={(value) => {this._onAddTrackFormSubmit(value)}}
                    />
                    <Form
                        placeholder={'Type to search'}
                        buttonText={'Find'}
                        onSubmit={(value) => {this._onFindTrackFormSubmit(value)}}
                    />
                </div>
                <List items={this._prepareFilteredTracks()} />
            </div>
        );
    }

    _onAddTrackFormSubmit(value) {
        this.props.addTrack(value);
    }

    _onFindTrackFormSubmit(value) {
        this.props.findTrack(value);
    }

    _prepareFilteredTracks() {
        return this.props.tracks.filter(track => track.includes(this.props.filter));
    }
}

export default connect(
    state => ({
        tracks: state.tracks,
        filter: state.filter
    }),
    dispatch => ({
        addTrack: (trackName) => {
            dispatch({
                type: 'ADD_TRACK',
                payload: trackName
            })
        },
        findTrack: (filter) => {
            dispatch({
                type: 'FIND_TRACK',
                payload: filter
            })
        }
    })
)(App);