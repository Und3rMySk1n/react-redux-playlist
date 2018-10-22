import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './topmenu.css';

class Topmenu extends Component {
    static propTypes = {
       items: PropTypes.arrayOf(
           PropTypes.shape({
               link: PropTypes.string.isRequired,
               title: PropTypes.string.isRequired
           })
       )
    };

    render() {
        return (
            <div className={'topmenu'}>
                {
                    this.props.items.map((item, i) => {
                        return <a href={item.link} key={i} className={'link'}>{item.title}</a>
                    })
                }
            </div>
        );
    }
}

export default Topmenu;