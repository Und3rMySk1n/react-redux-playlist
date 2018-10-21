import React, { Component } from 'react';
import Topmenu from './Topmenu/Topmenu';
import Dropdown from './Dropdown/Dropdown';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import List from './List/List';
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
                    <RegistrationForm onSubmit={(value) => {this._onFormSubmit(value)}} />
                </div>
                <List items={this.props.appStore} />
            </div>
        );
    }
}

export default connect(
    state => ({
        appStore: state
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