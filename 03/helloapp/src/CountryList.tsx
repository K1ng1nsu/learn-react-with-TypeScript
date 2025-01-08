import React from 'react';
import { CountryType } from './App';
import CountryItem from './CountryItem';

type Props = {
    countries: Array<CountryType>;
};

const CountryList = (props: Props) => {
    const list = props.countries;

    const countries = list.map((item) => {
        return <CountryItem key={item.no} item={item} />;
    });

    return <ul className="list-group">{countries}</ul>;
};

export default CountryList;
