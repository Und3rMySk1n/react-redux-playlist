import React from 'react';
import './list.css';

const List = ({items}) => {
    return (
        <div className={'items_list'}>
            {
                items.map((item, i) => {
                    return <li key={i} className={'list_item'}>{item}</li>
                })
            }
        </div>
    );
};

export default List;