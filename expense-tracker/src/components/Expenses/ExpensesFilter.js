import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

    const validYears = [
        {
            value: '2019',
            text: '2019'
        },
        {
            value: '2020',
            text: '2020'
        },
        {
            value: '2021',
            text: '2021'
        },
        {
            value: '2022',
            text: '2022'
        },
    ];

    const onSelectChange = (event) => {
        props.onYearSelected(event.target.value);
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={onSelectChange}>
                    {
                        validYears.map(year => <option key={year.value} value={year.value}> {year.text} </option> )
                    }
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;