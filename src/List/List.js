import React from 'react';
import './list.css';

const List = ({items}) => {
    return (
        <div className={'items_list'}>
            {
                items.map((item, i) => {
                    const itemClass = `list_item${(item.active) ? ' active' : ''}`;
                    return <li key={i} className={itemClass}>{item.text}</li>
                })
            }
        </div>
    );
};

export default List;