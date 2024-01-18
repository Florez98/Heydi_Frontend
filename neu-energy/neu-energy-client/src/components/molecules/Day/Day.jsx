import React from 'react';
import {Cell, Label}  from '../../atoms';

export const Day = ({ day }) => {
    const strDay = day.day.toString();
    return (
        <div className="day-container">
            <Label text={strDay.length === 1 ? '0' + strDay : strDay} className="label__days"/>
            {day["hour_x_energy"].map((consumo, index) => (
                <Cell key={`cell_${index}`} consumo={consumo} />
            ))}
        </div>
    );
};


