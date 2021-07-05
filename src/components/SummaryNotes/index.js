import React from 'react';
import { helperToArr } from '../../utils/helpersFunctions';

function SummaryNotes ({ list, category }) {
    const items = helperToArr(category).map((el, index) => {
        return (
            <div className="summary-list_item" key={index}>
                <span className={el.icon}></span>
                <span>{el.name}</span>
                <span>{el.activeCount}</span>
                <span>{el.unactiveCount}</span>
            </div>
        )
    });
    return (<div>
        {items}
        </div>)
}

export default SummaryNotes;