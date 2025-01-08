import React from 'react';
import { CountryType } from './App';

type Props = {
    item: CountryType;
};

const CountryItem = (props: Props) => {
    const item = props.item;
    return (
        <li key={item.no} className={item.visited ? 'list-group-item active' : 'list-group-item'}>
            {item.country}
        </li>
    );
};

export default CountryItem;
