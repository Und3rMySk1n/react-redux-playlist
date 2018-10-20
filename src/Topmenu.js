import React, { Component } from 'react';

class Topmenu extends Component {
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