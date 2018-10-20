import React, { Component } from 'react';

class Dropdown extends Component {
    constructor() {
        super();

        this.state = {
            isOpened: false
        };
    }

    onClicked() {
        this.setState({
            isOpened: !this.state.isOpened
        });
    }

    render() {
        const dropdownText = (this.state.isOpened) ? (
            <ul>
                <li>Something under dropdown</li>
                <li>And this is a list</li>
            </ul>
        ) : null;
        return (
            <div>
                <span onClick={() => this.onClicked()} className={'dropdown_link'}>
                    Dropdown menu content
                </span>
                {dropdownText}
            </div>
        );
    }
}

export default Dropdown;