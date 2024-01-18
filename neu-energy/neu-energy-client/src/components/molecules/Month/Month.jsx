import React from 'react';
import { Day } from '../../molecules';

export const Month = ({ days, month }) => {
    return (
        <div className='Month-container'>
            {days.map((day, index) => <Day day={day} key={`day_${month}_${index}`} />)}
        </div>
    );
};

