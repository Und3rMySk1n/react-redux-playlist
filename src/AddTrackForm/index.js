import React, { Component } from 'react';
import './add_track_form.css';

class AddTrackForm extends Component {
    constructor() {
        super();

        this.state = {
            value: ''
        };
    }

    _onSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.value);
        this.setState({value: ''});
    }

    _onValueChange(value) {
        this.setState({value});
    }

    render() {
        return (
            <div>
                <h2>Registration form</h2>
                <form onSubmit={(event) => this._onSubmit(event)}>
                    <input
                        className={'form_field'}
                        type='text'
                        placeholder='Enter track name'
                        value={this.state.value}
                        onChange={(event) => this._onValueChange(event.target.value)}
                    />
                    <button type='submit'>Add track</button>
                </form>
            </div>
        );
    }
}

export default AddTrackForm;