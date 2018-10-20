import React, { Component } from 'react';

class RegistrationForm extends Component {
    constructor() {
        super();

        this.state = {
            email: ''
        };
    }

    _onSubmit(event) {
        event.preventDefault();
        console.log(`Email value: ${this.state.email}`);
    }

    _onEmailChange(email) {
        this.setState({email});
    }

    render() {
        return (
            <div>
                <h2>Registration form</h2>
                <form onSubmit={(event) => this._onSubmit(event)}>
                    <input
                        className={'form_field'}
                        type='text'
                        placeholder='Enter email'
                        value={this.state.email}
                        onChange={(event) => this._onEmailChange(event.target.value)}
                    />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default RegistrationForm;