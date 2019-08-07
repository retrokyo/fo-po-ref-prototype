import React from 'react';
import capitalize from './capitalize';

const arrayToLi = (array) => {
    return array.map((item) => {
        return <li>{capitalize(item)}</li>
    })
};

export default arrayToLi;