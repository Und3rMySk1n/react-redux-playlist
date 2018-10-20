import React, { Component } from 'react';
import Topmenu from './Topmenu';
import Dropdown from './Dropdown';
import RegistrationForm from './RegistrationForm';

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
                    <RegistrationForm />
                </div>
            </div>
        );
    }
}

export default App;