import React, { Component } from 'react';
import './form.css';

class AddTrackForm extends Component {
    constructor() {
        super();

        this.state = {
            value: ''
        };
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => this._onSubmit(event)}>
                    <input
                        className={'form_field'}
                        type='text'
                        placeholder={this.props.placeholder}
                        value={this.state.value}
                        onChange={(event) => this._onValueChange(event.target.value)}
                    />
                    <button type='submit'>{this.props.buttonText}</button>
                </form>
            </div>
        );
    }

    _onSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.value);
        this.setState({value: ''});
    }

    _onValueChange(value) {
        this.setState({value});
    }
}

export default AddTrackForm;