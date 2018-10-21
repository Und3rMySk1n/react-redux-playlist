import React, { Component } from 'react';
import Topmenu from './Topmenu/Topmenu';
import Dropdown from './Dropdown/Dropdown';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import List from './List/List';

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

const listItems = [
    {
        text: 'That is one of those days',
        active: false
    },
    {
        text: 'When you do not want to wake up',
        active: true
    }
];

class App extends Component {
    render() {
        return (
            <div>
                <Topmenu items={topMenuItems} />
                <div className={'container'}>
                    <Dropdown />
                    <RegistrationForm />
                </div>
                <List items={listItems} />
            </div>
        );
    }
}

export default App;